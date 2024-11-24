import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const request = await req.json();

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "587", 10),
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: request.email, // sender address
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO, // list of receivers
    subject: request.subject, // Subject line
    text: request.message, // plain text body
    html: `<div>${request.message} <br /><br />Thank you,<br />${request.name}</div>`, // html body
  };

  return await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      console.log("Email sent successfully:", response);
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: any) => {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
