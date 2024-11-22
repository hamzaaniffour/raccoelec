import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { formData } = await req.json();

  if (!formData || Object.keys(formData).length === 0) {
    return NextResponse.json({ message: "No form data found" }, { status: 400 });
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.NODEMAILER_EMAIL, // Your email
      pass: process.env.NODEMAILER_PW, // Your email password
    },
  });

  // Setup email data
  const mailOptions = {
    from: "aniffour.dev@gmail.com", // Sender address
    to: formData.step1.email, // List of receivers
    subject: "Form Submission", // Subject line
    text: `
      From: ${formData.step1.first_name} ${formData.step1.last_name}
      Email: ${formData.step1.email}
      Phone: ${formData.step1.phone}
      Radio Option: ${formData.step1.radio}
      Beneficiary: ${formData.step1.beneficiary}
      Delivery Option: ${formData.step2.DeliveryOption}
      Code Postal: ${formData.step3.codePostal}
      Commune: ${formData.step3.Commune}
      Facultatif: ${formData.step3.facultatif || ""}
      Voie: ${formData.step3.Voie || ""}
      Cadastral: ${formData.step3.cadastral || ""}
      Terrain: ${formData.step3.terrain || ""}
      Number: ${formData.step3.number || ""}
      Option1: ${formData.step3.Option1 ? "Yes" : "No"}
      Portes Fenetres: ${formData.step4.portesFenetres || ""}
      Echeance: ${formData.step4.echeance || ""}
      Autorisation: ${formData.step4.autorisation || ""}
    `,
  };

  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to submit form. Please try again later." }, { status: 500 });
  }
}
