/**
 * Contact API (SITE-004) — POST /api/contact.
 *
 * Accepts JSON, validates server-side, classifies the lead from its contextual
 * `path` / `type`, then delivers it through the configured provider. Detailed
 * failures stay in the server logs; the client only ever sees safe copy.
 */
import { NextResponse } from "next/server";
import { validateContactInput } from "@/lib/contact/validation";
import { buildLead, successMessageFor } from "@/lib/contact/lead-routing";
import { deliverLead } from "@/lib/contact/delivery";

// Uses `node:crypto` (webhook signing) — keep this on the Node.js runtime.
export const runtime = "nodejs";

const FRIENDLY_ERROR =
  "We could not send your request right now. Please try again or email contact@govdecision.com.";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = validateContactInput(raw);
  if (!parsed.ok) {
    // Honeypot / timing trips: respond OK so bots don't probe, deliver nothing.
    if (parsed.spam) {
      return NextResponse.json(
        {
          ok: true,
          leadType: "GENERAL_READINESS",
          message: successMessageFor("GENERAL_READINESS"),
        },
        { status: 200 },
      );
    }
    return NextResponse.json(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const lead = buildLead(parsed.data);
  const result = await deliverLead(lead);

  if (!result.ok) {
    // `result.error` is an internal code already logged in delivery.ts.
    return NextResponse.json(
      { ok: false, error: FRIENDLY_ERROR },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      leadType: lead.leadType,
      message: successMessageFor(lead.leadType),
    },
    { status: 200 },
  );
}
