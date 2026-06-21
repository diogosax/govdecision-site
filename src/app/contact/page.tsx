import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/marketing/ContactForm";
import { site } from "@/data/site";
import { loginLink } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your government readiness conversation with GovDecision. Tell us what you sell and where you want to compete.",
};

const aside: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "target",
    title: "Qualify before you commit",
    body: "We'll help you see fit, blockers, and effort before you invest a week in the wrong opportunity.",
  },
  {
    icon: "checklist",
    title: "Build readiness with method",
    body: "Turn missing requirements into a plan with owners and dates across the markets you target.",
  },
  {
    icon: "compass",
    title: "Find your route to market",
    body: "Direct, distributor, local partner, subcontract, consortium — or prepare first.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero + form */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
        <Container className="relative py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-plum sm:text-5xl">
                Start your government readiness conversation.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
                Tell us what you sell and where you want to compete. We&apos;ll
                help you decide where to focus, what readiness you need, and
                which route to market makes sense.
              </p>

              <div className="mt-8 space-y-4">
                {aside.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-coral shadow-soft">
                      <Icon name={a.icon} size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-plum">{a.title}</p>
                      <p className="text-sm leading-relaxed text-slate">
                        {a.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-sm">
                <p className="text-slate">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="font-semibold text-plum underline-offset-4 hover:underline"
                  >
                    {site.contactEmail}
                  </a>
                </p>
                <p className="text-slate">
                  Already a customer?{" "}
                  <a
                    href={loginLink.href}
                    className="font-semibold text-plum underline-offset-4 hover:underline"
                  >
                    Log in to the app
                  </a>
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Reassurance strip */}
      <section className="bg-plum py-10 text-white">
        <Container>
          <p className="text-center text-sm leading-relaxed text-white/70">
            {site.legalDisclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
