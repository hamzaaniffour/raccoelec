import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  to: string;
  subject: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { to, subject, message } = req.body as EmailRequestBody;

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your SMTP server (e.g., smtp.gmail.com)
      port: 587, // Typically 587 or 465
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Your email address
        pass: "your-email-password", // Your email password or app password
      },
    });

    try {
      // Send the email
      const info = await transporter.sendMail({
        from: '"Your Name" <your-email@example.com>', // Sender address
        to, // Recipient address
        subject, // Subject line
        text: message, // Plain text body
        html: `<p>${message}</p>`, // HTML body
      });

      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method ${req.method} not allowed" });
  }
}