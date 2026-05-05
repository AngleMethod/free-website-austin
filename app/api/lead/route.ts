type LeadPayload = {
  name: string;
  businessName: string;
  phone: string;
  description: string;
};

const leadWebhookUrl = process.env.LEAD_WEBHOOK_URL;

async function sendLeadEmail(lead: LeadPayload) {
  if (!leadWebhookUrl) {
    return;
  }

  const response = await fetch(leadWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "josh@notecreativestudios.com",
      subject: "New website lead",
      lead,
    }),
  });

  if (!response.ok) {
    throw new Error("Lead webhook request failed");
  }
}

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;
    const lead = {
      name: cleanString(body.name),
      businessName: cleanString(body.businessName),
      phone: cleanString(body.phone),
      description: cleanString(body.description),
    };

    if (
      !lead.name ||
      !lead.businessName ||
      !lead.phone ||
      !lead.description
    ) {
      return Response.json(
        { success: false, error: "Missing required lead fields." },
        { status: 400 },
      );
    }

    console.log("New website lead", lead);
    await sendLeadEmail(lead);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);

    return Response.json(
      { success: false, error: "Lead submission failed." },
      { status: 500 },
    );
  }
}
