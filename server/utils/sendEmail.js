import nodemailer from 'nodemailer';

export const sendEmail = async ({email, subject, body}) => {
    try {
        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            service: process.env.SMTP_SERVICE,
            port:process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            html: body,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }


}