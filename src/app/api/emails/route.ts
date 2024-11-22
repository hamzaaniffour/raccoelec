// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formData } = req.body;

  if (!formData || Object.keys(formData).length === 0) {
    return res.status(400).json({ message: "No form data found" });
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
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to submit form. Please try again later." });
  }
}
