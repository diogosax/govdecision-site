import type { LegalChrome } from "./types";

/**
 * EN-US — the source of truth for the public legal / compliance pages
 * (SITE-018). Foundational, readable, and deliberately cautious: no government
 * affiliation, no guaranteed outcomes, no claim of full compliance with any
 * specific legal regime. Product names (GovDecision, Sax Group LLC, Sax Global,
 * GovDecision Capital, Supplier Passport, Deal Room) are never translated.
 */
export const enUS = {
  updated: "Last updated: June 2026",
  note: "This page is provided for general information about GovDecision's website and platform practices. It may be updated from time to time.",
  contactEmailLabel: "Email",
  contactWhatsappLabel: "WhatsApp Business",

  terms: {
    meta: {
      title: "Terms of Use — GovDecision",
      description:
        "Terms for using the public GovDecision website and content. GovDecision is a platform by Sax Group LLC and is not affiliated with any government.",
    },
    breadcrumbName: "Terms of Use",
    eyebrow: "Legal",
    title: "Terms of Use",
    lead: "These terms explain how you may use the public GovDecision website and the information we publish on it. GovDecision is a global government business platform by Sax Group LLC, based in Orlando, Florida.",
    sections: [
      {
        heading: "About GovDecision",
        body: [
          "GovDecision is a platform by Sax Group LLC. It helps suppliers qualify public sector opportunities, build readiness, and understand market access across countries.",
          "Sax Global, the cross-border arm of Sax Group, may provide planning, context, and guidance where applicable.",
        ],
      },
      {
        heading: "Using this website",
        body: [
          "You may use this website to learn about GovDecision, Sax Global, and our approach to public sector business. You agree to use the site lawfully and not to disrupt it, misuse it, or attempt to gain unauthorized access to it or its systems.",
        ],
      },
      {
        heading: "No government affiliation",
        body: [
          "GovDecision is not affiliated with, endorsed by, or acting on behalf of any government, public buyer, procurement portal, multilateral institution, or official source, unless we state this expressly in writing. References to public bodies, programs, or sources are for context only.",
        ],
      },
      {
        heading: "No guarantee of opportunities or outcomes",
        body: [
          "Public sector opportunities change constantly. We do not guarantee that any opportunity is current, available, or suitable for your company, and we do not guarantee eligibility, qualification, registration approval, bid acceptance, awards, financing, partner placement, market access, or any contract outcome.",
        ],
      },
      {
        heading: "Public opportunity examples and briefs",
        body: [
          "Government Opportunity Briefs and similar content are public opportunity examples and market signals. They are illustrative — not customer case studies, guaranteed opportunities, or a promise of results. Always confirm details against the official source before acting.",
        ],
      },
      {
        heading: "No legal, procurement, financial, tax, or investment advice",
        body: [
          "Content on this website is provided for general information. It is not legal, procurement, financial, tax, or investment advice, and it should not be relied on as a substitute for professional advice specific to your situation.",
        ],
      },
      {
        heading: "AI-assisted content and decision support",
        body: [
          "Parts of the platform and our content use AI-assisted analysis to help extract requirements, summarize opportunities, and structure decision briefs. AI-assisted output can be incomplete or inaccurate, and it is meant to support — not replace — human review and professional judgment.",
        ],
      },
      {
        heading: "Market access and Sax Global support",
        body: [
          "Where applicable, Sax Global can support market access planning, local partner strategy, and cross-border execution context. This support is advisory and does not guarantee market access, partner placement, or contract outcomes.",
        ],
      },
      {
        heading: "GovDecision Capital positioning",
        body: [
          "GovDecision Capital is a finance-readiness positioning. It is not direct lending and not a credit decision. Where applicable, it supports finance-readiness, case structuring, and partner-route preparation. Any financing is provided by third parties on their own terms.",
        ],
      },
      {
        heading: "Information you submit",
        body: [
          "If you contact us or complete a form, you are responsible for the accuracy of what you provide and for having the right to share it. Please do not submit confidential or sensitive information through the public website unless it is necessary.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The GovDecision and Sax Group names, logos, content, and design are owned by Sax Group LLC or its licensors. You may not copy, reproduce, or reuse them without permission, except for normal personal or internal business reference.",
        ],
      },
      {
        heading: "Third-party links and public sources",
        body: [
          "This website may link to third-party sites and reference public sources. We do not control that content and are not responsible for it. Following an external link is at your own discretion.",
        ],
      },
      {
        heading: "Limitation of reliance",
        body: [
          'This website is provided "as is" for general information. To the extent permitted by law, Sax Group LLC is not responsible for decisions made solely in reliance on this website. You remain responsible for validating requirements and outcomes before you act.',
        ],
      },
      {
        heading: "Updates to these terms",
        body: [
          "We may update these terms from time to time. The current version always applies to your use of the website.",
        ],
      },
    ],
    contact: {
      heading: "Contact",
      body: "Questions about these terms? Reach the GovDecision team using the details below.",
    },
  },

  privacy: {
    meta: {
      title: "Privacy Notice — GovDecision",
      description:
        "What the GovDecision website may collect through forms and analytics, and how we aim to handle it. GovDecision is a platform by Sax Group LLC.",
    },
    breadcrumbName: "Privacy Notice",
    eyebrow: "Privacy",
    title: "Privacy Notice",
    lead: "This notice explains, in plain language, what information the GovDecision website may collect and how we aim to use it. GovDecision is a platform by Sax Group LLC.",
    sections: [
      {
        heading: "Overview",
        body: [
          "We aim to collect only the information we need to respond to you and to operate and improve the website. This notice describes the website and our public platform practices; it is not a complete description of every internal process.",
        ],
      },
      {
        heading: "Information you provide",
        body: [
          "When you choose to contact us, you may share information about yourself and your company. You control what you send, and you can choose not to provide optional details.",
        ],
      },
      {
        heading: "Contact form submissions",
        body: [
          "Our contact form may collect the information below. We may also capture basic context from the page you came from — such as a path or type value in the URL — to route your request to the right team.",
        ],
        bullets: [
          "Name",
          "Company",
          "Work email",
          "Country",
          "Target markets",
          "Message",
          "Page or path context from the URL",
        ],
      },
      {
        heading: "WhatsApp contact",
        body: [
          "If you contact us via WhatsApp, that conversation is handled through WhatsApp Business and is subject to WhatsApp's own terms and privacy practices. WhatsApp contact is optional.",
        ],
      },
      {
        heading: "Analytics and site usage data",
        body: [
          "We use Vercel Analytics and Speed Insights to understand, at a high level, how the site is used and how it performs. These analytics are designed to avoid intentionally collecting personally identifying information.",
        ],
      },
      {
        heading: "Cookies and tracking",
        body: [
          "The website aims to keep tracking minimal. Where analytics or similar technologies are used, they are intended for aggregate measurement rather than building individual profiles.",
        ],
      },
      {
        heading: "How information may be used",
        body: [
          "We may use the information you provide to respond to your request, route it to the right team, follow up about a readiness or market access conversation, and improve our content and services, where applicable.",
        ],
      },
      {
        heading: "Sharing with Sax Group / Sax Global",
        body: [
          "We may share your request internally within Sax Group and with Sax Global where it is relevant to supporting your inquiry — for example, a cross-border market access question. We do not sell your personal information.",
        ],
      },
      {
        heading: "Service providers",
        body: [
          "We rely on trusted service providers — for example, hosting, email delivery, and analytics — to operate the website. They process information on our behalf to provide their services.",
        ],
      },
      {
        heading: "International context",
        body: [
          "GovDecision serves suppliers and markets in different countries, so information may be processed in countries other than your own, depending on the context.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "We aim to keep information only as long as needed for the purpose it was collected, or as appropriate for ongoing communication, and then to remove or archive it. Retention may vary depending on the context.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can choose what to share, ask us about the information you have provided, or ask us to update or remove it, where applicable. Please avoid submitting sensitive or confidential information through the public form unless it is necessary.",
        ],
      },
      {
        heading: "Updates",
        body: [
          "We may update this notice from time to time. The current version always applies.",
        ],
      },
    ],
    contact: {
      heading: "Contact",
      body: "Questions about privacy or the information you have shared? Reach the GovDecision team using the details below.",
    },
  },

  compliance: {
    meta: {
      title: "Compliance — GovDecision",
      description:
        "How GovDecision approaches responsible government business: no affiliation, supplier responsibility, AI-assisted analysis with human review, and ethical participation.",
    },
    breadcrumbName: "Compliance",
    eyebrow: "Compliance",
    title: "Compliance",
    lead: "GovDecision is a decision-support and readiness platform for public sector business. This page explains how we approach responsible, ethical participation in public procurement — and what stays the supplier's responsibility.",
    sections: [
      {
        heading: "Responsible government business",
        body: [
          "GovDecision helps suppliers make better decisions about public sector opportunities: what to pursue, what to fix first, and which route to market makes sense. We support the decision; suppliers own the participation.",
        ],
      },
      {
        heading: "No government affiliation",
        body: [
          "GovDecision is not affiliated with, endorsed by, or acting on behalf of any government, public buyer, or official source unless expressly stated. We do not influence procurement decisions or outcomes.",
        ],
      },
      {
        heading: "Public source and opportunity data",
        body: [
          "Opportunity examples and data are drawn from public and market sources where available. Sources change, and details can be incomplete or out of date — always validate against the official source before acting.",
        ],
      },
      {
        heading: "AI-assisted analysis",
        body: [
          "AI-assisted analysis may help extract requirements, summarize opportunities, detect potential blockers, and structure decision briefs. It is a support tool, not a substitute for professional review, and its output should always be validated.",
        ],
      },
      {
        heading: "No outcome guarantees",
        body: [
          "We do not guarantee eligibility, qualification, registration approval, bid acceptance, awards, financing, partner placement, or market access. GovDecision supports readiness and decisions, not results.",
        ],
      },
      {
        heading: "Anti-corruption and ethical conduct",
        body: [
          "We encourage lawful, ethical, and transparent participation in public procurement. GovDecision should not be used to facilitate bribery, fraud, collusion, or any attempt to improperly influence a public process.",
        ],
      },
      {
        heading: "Supplier responsibility",
        body: [
          "Suppliers remain responsible for validating requirements, eligibility, deadlines, registrations, submissions, and compliance obligations in each market.",
          "GovDecision should not be used to misrepresent capabilities, eligibility, certifications, documentation, or compliance status.",
        ],
      },
      {
        heading: "Market access and partner routes",
        body: [
          "Where applicable, Sax Global can support market access planning and partner-route preparation. This support is advisory and does not guarantee market access, partner placement, financing, awards, or contract outcomes.",
        ],
      },
      {
        heading: "GovDecision Capital and finance-readiness",
        body: [
          "GovDecision Capital supports finance-readiness, case structuring, and partner-route preparation where applicable. It is not direct lending and not a credit decision; any financing is provided by third parties on their own terms.",
        ],
      },
      {
        heading: "Human review and validation",
        body: [
          "Decisions about whether and how to pursue an opportunity should always involve human review. GovDecision is built to inform that judgment, not to replace it.",
        ],
      },
    ],
    contact: {
      heading: "Reporting concerns",
      body: "If you have a question or want to raise a concern about responsible use or these practices, reach the GovDecision team using the details below.",
    },
  },
} satisfies LegalChrome;

export default enUS;
