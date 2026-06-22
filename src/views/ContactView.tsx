import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactForm } from "@/components/marketing/ContactForm";
import { site } from "@/data/site";
import { loginHref } from "@/data/navigation";
import { contactPathLabels } from "@/data/destinations";

const asideIcons: IconName[] = ["target", "checklist", "compass"];

/** Localized display names for the markets used in the contextual banner. */
const marketName: Record<Locale, Record<string, string>> = {
  "en-US": {},
  "pt-BR": {
    Brazil: "Brasil",
    "United States": "Estados Unidos",
    "UN & World Bank": "ONU e Banco Mundial",
    Paraguay: "Paraguai",
    Mexico: "México",
    Canada: "Canadá",
  },
  es: {
    Brazil: "Brasil",
    "United States": "Estados Unidos",
    "UN & World Bank": "ONU y Banco Mundial",
    Paraguay: "Paraguay",
    Mexico: "México",
    Canada: "Canadá",
  },
};

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

type Context = { message: string; isLocal: boolean; targetMarkets?: string };

function resolveContext(
  dict: Dictionary,
  locale: Locale,
  path?: string,
  type?: string,
): Context | undefined {
  const c = dict.contact.context;
  const localize = (name: string) => marketName[locale][name] ?? name;
  const pair = path ? contactPathLabels[path] : undefined;
  const isLocal = type === "local" || (!!pair && pair.origin === pair.target);

  if (!pair && !type) return undefined;

  if (pair) {
    const origin = localize(pair.origin);
    const target = localize(pair.target);
    if (isLocal) {
      return {
        isLocal: true,
        message: c.localWithTarget.replace("{target}", target),
        targetMarkets: target,
      };
    }
    return {
      isLocal: false,
      message: c.crossWithPair
        .replace("{origin}", origin)
        .replace("{target}", target),
      targetMarkets: target,
    };
  }

  return type === "local"
    ? { isLocal: true, message: c.local }
    : { isLocal: false, message: c.cross };
}

export function ContactView({
  locale,
  dict,
  sp,
}: {
  locale: Locale;
  dict: Dictionary;
  sp: { [key: string]: string | string[] | undefined };
}) {
  const t = dict.contact;
  const path = firstParam(sp.path);
  const type = firstParam(sp.type);
  const context = resolveContext(dict, locale, path, type);

  return (
    <>
      {/* Hero + form */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
        <Container className="relative py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-plum sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
                {t.lead}
              </p>

              {context && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-coral/30 bg-coral/5 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-coral shadow-soft">
                    <Icon name={context.isLocal ? "target" : "route"} size={16} />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-plum">
                    {context.message}
                  </p>
                </div>
              )}

              <div className="mt-8 space-y-4">
                {t.aside.map((a, i) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-coral shadow-soft">
                      <Icon name={asideIcons[i]} size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-plum">{a.title}</p>
                      <p className="text-sm leading-relaxed text-slate">
                        {a.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-sm">
                <p className="text-slate">
                  {t.preferEmail}{" "}
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="font-semibold text-plum underline-offset-4 hover:underline"
                  >
                    {site.contactEmail}
                  </a>
                </p>
                <p className="text-slate">
                  {t.alreadyCustomer}{" "}
                  <a
                    href={loginHref}
                    className="font-semibold text-plum underline-offset-4 hover:underline"
                  >
                    {t.loginCta}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <ContactForm
                locale={locale}
                t={t.form}
                defaultMarkets={context?.targetMarkets}
                path={path}
                type={type}
                utmSource={firstParam(sp.utm_source)}
                utmMedium={firstParam(sp.utm_medium)}
                utmCampaign={firstParam(sp.utm_campaign)}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Reassurance strip */}
      <section className="bg-plum py-10 text-white">
        <Container>
          <p className="text-center text-sm leading-relaxed text-white/70">
            {t.disclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
