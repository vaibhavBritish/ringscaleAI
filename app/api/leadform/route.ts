// app/api/leads/route.ts
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const consent = body.consent === true;

    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!consent) {
      return Response.json(
        {
          success: false,
          message: "You must accept the consent checkbox.",
        },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message: message || null,
        consent,
      },
    });

    return Response.json(
      {
        success: true,
        message: "Lead submitted successfully.",
        data: lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}