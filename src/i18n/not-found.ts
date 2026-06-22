import type { Locale } from "./config";

/**
 * Copy for the branded 404 page, per locale. Kept tiny and standalone (not part
 * of the big Dictionary) so the localized `not-found` boundary — a Client
 * Component that detects the locale from the URL — stays lightweight.
 */
export type NotFoundCopy = {
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  exploreCta: string;
  homeCta: string;
};

export const notFoundCopy: Record<Locale, NotFoundCopy> = {
  "en-US": {
    code: "404",
    eyebrow: "Page not found",
    title: "This path is not ready yet.",
    body: "The page you are looking for may have moved, or this market path may still be under validation.",
    exploreCta: "Explore Market Access",
    homeCta: "Back to home",
  },
  "pt-BR": {
    code: "404",
    eyebrow: "Página não encontrada",
    title: "Este caminho ainda não está pronto.",
    body: "A página que você procura pode ter mudado, ou este caminho de mercado ainda pode estar em validação.",
    exploreCta: "Explorar acesso a mercados",
    homeCta: "Voltar para a página inicial",
  },
  es: {
    code: "404",
    eyebrow: "Página no encontrada",
    title: "Esta ruta aún no está lista.",
    body: "La página que buscas puede haber cambiado, o esta ruta de mercado todavía puede estar en validación.",
    exploreCta: "Explorar acceso a mercados",
    homeCta: "Volver al inicio",
  },
};
