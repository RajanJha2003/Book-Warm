import ErrorHandler from '../middleware/errorMiddleware.js';
import bcrypt from 'bcrypt';
import { User } from '../models/userModel.js';
import crypto from 'crypto';
import { catchAsyncErrors } from '../middleware/catchAsyncErrors.js';
import { sendVerificationCode } from '../utils/sendVerificationCode.js';


export const register=catchAsyncErrors(async(req,res,next)=>{
    try {
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return next(new ErrorHandler("Please enter all fields.",400))
        }

        const existingUser=await User.findOne({email,accountVerified:true});
        if(existingUser){
            return next(new ErrorHandler("User already exists.",400))
        }

        const registrationAttemptsByUser=await User.findOne({email,accountVerified:false});
        if(registrationAttemptsByUser.length>=5){
            return next(new ErrorHandler("You have already attempted to register 5 times. Please contact support.",400))
        }

        if(password.length<8 || password.length>16){
            return next(new ErrorHandler("Password must be between 8 and 16 characters.",400))
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })

        const verificationCode=await user.generateVerificationCode();
        await user.save();

        sendVerificationCode(verificationCode,email,res);
        







    } catch (error) {
        next(error);
        
    }

})