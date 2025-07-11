import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const fallbackTemplate = (name: string, email: string, message: string) => `
New Contact Form Submission

From: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
Reply directly to this email to respond to ${name}.
          `

const htmlTemplate = (name: string, email: string, message: string) => `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">From:</td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Date:</td>
                    <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                  </tr>
                </table>
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                  <p style="margin: 0; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  💡 <strong>Tip:</strong> Reply directly to this email to respond to ${name} at 
                  <a href="mailto:${email}" style="color: #007bff;">${email}</a>
                </p>
              </div>
            </div>
          `

export const POST = async (request: NextRequest) => {
  const transporter = createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

    try {
        const { name, email, message } = await request.json();
      
        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          text: fallbackTemplate(name, email, message),
          html: htmlTemplate(name, email, message),
        };

        await transporter.sendMail(mailOptions);
      
        return NextResponse.json({ success: true, message: "Message sent" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
    }
};