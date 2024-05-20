import User from "@/Models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sandEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VARIFY") {
      await User.findByIdAndUpdate(userId, {
        varifyToken: hashedToken,
        varifyTokenExpiration: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiration: Date.now() + 3600000,
      });
    }
  

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "396eb870fdf01b",
        pass: "ee50b3eed3f25b"
      }
    });

    const mailOptions = {
      from: "zainqlandar@gmail.com", // sender address
      to: email, // list of receivers
      subject: emailType === "VERIFY" ? "Verify Email" : "Forgot Password", // Subject line
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
        } or copy and paste the link below in your browser.<br>
        ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.log(error);
  }
};
