import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  // Extract template parameters from request
  const templateParams = data.templateParams;

  if (!templateParams?.from_email) {
    return new Response("Invalid email data provided.", { status: 400 });
  }

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  // Generate the email content
  const htmlContent = `
    <h1>Form Submission</h1>
    <p><strong>Name:</strong> ${templateParams.from_name}</p>
    <p><strong>Email:</strong> ${templateParams.from_email}</p>
    <p><strong>Phone:</strong> ${templateParams.phone}</p>
    <p><strong>Beneficiary:</strong> ${templateParams.beneficiary}</p>
    <p><strong>Delivery Option:</strong> ${templateParams.delivery_option}</p>
    <p><strong>Project Location:</strong> ${templateParams.code_postal}, ${templateParams.commune}</p>
    <p><strong>Additional Details:</strong></p>
    <pre>${JSON.stringify(templateParams, null, 2)}</pre>
  `;

  try {
    const emailResult = await transporter.sendMail({
      from: `"${templateParams.from_name}" <${templateParams.from_email}>`, // Sender info
      to: process.env.RECIPIENT_EMAIL || "recipient@example.com", // Change this to your recipient's email
      subject: "New Form Submission",
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true, result: emailResult }), { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response("Failed to send email.", { status: 500 });
  }
}
