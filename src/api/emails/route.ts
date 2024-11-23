import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method ${req.method} Not Allowed' });
  }

  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields: to, subject, or message' });
  }

  try {
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT) || 587, // 587 for TLS, 465 for SSL
      secure: false, // true for SSL, false for TLS
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASSWORD, // SMTP password
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, // Sender address
      to, // List of recipients
      subject, // Subject line
      text: message, // Plain text body
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}