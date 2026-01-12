import nodemailer from "nodemailer"; 

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "FANE HOTELS",
    to: email,
    subject: "Verify Your Account",
    html: `<p>Click to verify:</p>
           <a href="http://localhost:4000/api/auth/verify/${token}">
           Verify Account</a>`,
  });
};
