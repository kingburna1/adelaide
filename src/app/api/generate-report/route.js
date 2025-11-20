// app/api/generate-report/route.js
import OpenAI from "openai";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";   // ✅ FIX #1 — Must use NextResponse

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const {
      email,
      fullName,
      location,
      farmingType,
      crop,
      selectedSoil,
      observations,
      userId
    } = await req.json();

    // ✅ FIX #2 — use NextResponse.json
    if (!email || !fullName || !location || !farmingType || !crop || !selectedSoil) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ FIX #3 — full working prompt added
    const prompt = `
You are Adela, an expert agricultural advisor. Produce a concise, actionable farm report using the information below. Format the output as HTML with sections: Summary, Soil Assessment, Recommended Actions, Planting Schedule, Fertilizer & Irrigation Advice, Risks & Notes. Use bullet lists for actions.

User data:
- Name: ${fullName}
- Email: ${email}
- Location: ${location}
- Farming type: ${farmingType}
- Crop: ${crop}
- Soil type: ${selectedSoil}
- Observations: ${observations || "None provided"}

Keep it practical and under ~700 words.
`;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    const aiText =
      response.output?.[0]?.content?.[0]?.text ||
      response.output_text ||
      "No response generated";

    const htmlContent = `
      <div style="font-family:sans-serif;">
        <h2 style="color:#136f63">Adela — Your Farm Report</h2>
        <p><strong>For:</strong> ${fullName} — <em>${location}</em></p>
        <hr/>
        ${aiText}
        <hr/>
        <small>UserId: ${userId || "N/A"}</small>
      </div>
    `;

    // Send email
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Your Adela Farm Report — ${crop}`,
      html: htmlContent,
    });

    // Final response
    return NextResponse.json({ success: true, reportHtml: aiText });

  } catch (err) {
    console.error("generate-report error", err);
    return NextResponse.json(
      { error: "Server error generating report" },
      { status: 500 }
    );
  }
}
