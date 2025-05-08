export function generateVerificationOtpEmailTemplate(otp) {
    return `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 30px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="text-align: center; color: #2c3e50;">📚 Bookworm Library</h2>
            <hr style="border: none; border-top: 2px solid #2c3e50; margin: 20px 0;">
            <p style="font-size: 16px; color: #333;">Hello,</p>
            <p style="font-size: 16px; color: #333;">
                To verify your email address for the Bookworm Library Management System, please use the following verification code:
            </p>
            <div style="text-align: center; margin: 30px 0;">
                <span style="display: inline-block; font-size: 32px; color: #fff; background-color: #27ae60; padding: 10px 20px; border-radius: 6px; letter-spacing: 6px;">
                    ${otp}
                </span>
            </div>
            <p style="font-size: 14px; color: #666;">
                This code will expire in 10 minutes. If you did not request this code, you can safely ignore this email.
            </p>
            <p style="font-size: 14px; color: #666;">Stay curious,</p>
            <p style="font-weight: bold; font-size: 15px; color: #2c3e50;">Bookworm Library Team</p>
        </div>
    `;
}
