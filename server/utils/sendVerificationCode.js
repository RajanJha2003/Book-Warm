import { generateVerificationOtpEmailTemplate } from "./emailTemplate.js";


export async function sendVerificationCode(verificationCode, email, res) {
    try {
        const message=generateVerificationOtpEmailTemplate(verificationCode);
        sendEmail({
            email,
            subject:"Verification Code(Bookworm Library Management System)",
            message
        })

        res.status(200).json({
            success:true,
            message:`Verification code sent to ${email}`
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Verfication code failed to send."
        })
        
    }
}