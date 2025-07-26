import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "MLC IT Solutions <maximilian@mlcitsolutions.co.uk>",
      to: ["crscaffoldingsw@gmail.com"],
      subject: "New Quote Request",
      react: EmailTemplate({ firstName, lastName, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
