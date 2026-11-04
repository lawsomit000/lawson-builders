import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, projectType, message } = await request.json();

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Lawson Builders <onboarding@resend.dev>",
    to: "mitch@lawsonbuild.com",
    replyTo: email,
    subject: `New inquiry from ${name} — ${projectType}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Project Type: ${projectType}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
