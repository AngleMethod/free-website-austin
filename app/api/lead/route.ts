type LeadPayload = {
  name: string;
  businessName: string;
  phone: string;
  description: string;
};

const leadWebhookUrl = process.env.LEAD_WEBHOOK_URL;

async function sendLeadToWebhook(lead: LeadPayload) {
  if (!leadWebhookUrl) {
    return;
  }

  const message = [
    "New Lead 🚀",
    "",
    `Name: ${lead.name}`,
    `Business: ${lead.businessName}`,
    `Phone: ${lead.phone}`,
    `Details: ${lead.description}`,
  ].join("\n");

  try {
    const response = await fetch(leadWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        lead,
      }),
    });

    if (!response.ok) {
      console.error("Lead webhook request failed", response.status);
    }
  } catch (error) {
    console.error("Lead webhook request failed", error);
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
    await sendLeadToWebhook(lead);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);

    return Response.json(
      { success: false, error: "Lead submission failed." },
      { status: 500 },
    );
  }
}
