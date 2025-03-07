import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Alexander <alexanderdev1912@gmail.com>', // Your verified domain email
      to: ['your-email@example.com'], // Your receiving email
      subject: subject,
      html: `
        <p>New message from: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
