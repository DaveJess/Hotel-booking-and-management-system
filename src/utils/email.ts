// src/utils/email.ts
export const sendEmail = async (to: string, subject: string, text: string) => {
  console.log(`Sending email to ${to}: ${subject} - ${text}`);
  // Use nodemailer for real email sending
};
