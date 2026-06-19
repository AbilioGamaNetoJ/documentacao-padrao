import { z } from "zod"

interface PagespeedArgs {
  url: string
  strategy: "mobile" | "desktop"
}

export default {
  description:
    "Analisa performance web de uma URL com a API PageSpeed Insights do Google. Retorna pontuacao de Performance, Acessibilidade, Boas Praticas, SEO e Core Web Vitals (FCP, LCP, TBT, CLS, SI). Use para auditar paginas do projeto e diagnosticar problemas de carregamento.",
  args: {
    url: z.string().describe("URL completa do site para analisar. Ex: https://codexcreate.com.br"),
    strategy: z
      .enum(["mobile", "desktop"])
      .default("mobile")
      .describe("Dispositivo de teste: mobile ou desktop"),
  },
  async execute(args: PagespeedArgs) {
    const apiKey = process.env.PAGESPEED_API_KEY
    if (!apiKey) {
      return "Erro: PAGESPEED_API_KEY nao configurada. Obtenha uma chave gratuita em https://console.cloud.google.com/apis/credentials e habilite a PageSpeed Insights API."
    }

    const apiUrl =
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?` +
      `url=${encodeURIComponent(args.url)}&strategy=${args.strategy}&key=${apiKey}` +
      `&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`

    const res = await fetch(apiUrl)
    if (!res.ok) {
      return `Erro na API: HTTP ${res.status} ${res.statusText}`
    }

    const data = (await res.json()) as {
      error?: { message: string }
      lighthouseResult?: {
        categories: Record<string, { score: number | null } | undefined>
        audits: Record<string, { displayValue?: string }>
      }
    }

    if (data.error) {
      return `Erro na API: ${data.error.message}`
    }

    if (!data.lighthouseResult) {
      return "Erro inesperado: resultado do PageSpeed nao foi retornado pela API."
    }

    const { categories, audits } = data.lighthouseResult

    const score = (cat?: { score: number | null } | null) => {
      if (!cat || cat.score == null) return "N/A"
      return String(Math.round(cat.score * 100))
    }

    return [
      `PageSpeed Insights: ${args.url} [${args.strategy}]`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Performance:       ${score(categories.performance)}/100`,
      `Acessibilidade:    ${score(categories.accessibility)}/100`,
      `Boas Praticas:     ${score(categories["best-practices"])}/100`,
      `SEO:               ${score(categories.seo)}/100`,
      ``,
      `Core Web Vitals:`,
      `  FCP  (First Contentful Paint):   ${audits["first-contentful-paint"]?.displayValue ?? "N/A"}`,
      `  LCP  (Largest Contentful Paint):  ${audits["largest-contentful-paint"]?.displayValue ?? "N/A"}`,
      `  TBT  (Total Blocking Time):       ${audits["total-blocking-time"]?.displayValue ?? "N/A"}`,
      `  CLS  (Cumulative Layout Shift):   ${audits["cumulative-layout-shift"]?.displayValue ?? "N/A"}`,
      `  SI   (Speed Index):              ${audits["speed-index"]?.displayValue ?? "N/A"}`,
    ].join("\n")
  },
}
