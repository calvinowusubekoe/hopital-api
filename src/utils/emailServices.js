import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Function to send email reminders
export const sendReminderEmail = async (email, task) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Health Reminder: Scheduled Task",
      text: `Hello, this is a reminder to complete your task: ${task}. Please check in to confirm.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Reminder email sent to ${email}`);
  } catch (error) {
    console.error("Error sending reminder email:", error);
  }
};
