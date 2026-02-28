import type { Metadata, Viewport } from "next";
import { i18n } from "../../i18n-config";
import "../globals.css";

const siteUrl = "https://plumber-site.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const meta = {
  en: {
    title: "AquaFix | 24h Plumber | Cascais",
    description:
      "24-hour emergency plumber in Cascais. Drain unblocking, leak detection, pipe repair, sanitary installations. Free estimates. On-site in 30 minutes.",
  },
  pt: {
    title: "AquaFix | Canalizador 24h | Cascais",
    description:
      "Canalizador de emergência 24 horas em Cascais. Desentupimentos, deteção de fugas, reparação de canalizações e instalações sanitárias. Orçamento grátis.",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] ?? meta.pt;

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", pt: "/pt" },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${siteUrl}/${locale}`,
      siteName: "AquaFix",
      locale: locale === "pt" ? "pt_PT" : "en_US",
      type: "website",
      images: [
        {
          url: "/img/hero.png",
          width: 1200,
          height: 630,
          alt: "AquaFix — Canalizador 24h, Cascais",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/img/hero.png"],
    },
    robots: { index: true, follow: true },
    keywords:
      locale === "pt"
        ? [
            "canalizador cascais",
            "canalizador 24 horas",
            "canalizador carcavelos",
            "desentupimentos cascais",
            "deteção fugas água",
            "reparação canalizações",
            "canalizador urgente",
            "aquafix",
          ]
        : [
            "plumber cascais",
            "24 hour plumber",
            "plumber carcavelos",
            "drain unblocking cascais",
            "leak detection",
            "pipe repair",
            "emergency plumber",
            "aquafix",
          ],
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "AquaFix — Canalizador 24h",
    description: locale === "pt" ? meta.pt.description : meta.en.description,
    url: `${siteUrl}/${locale}`,
    telephone: "+351910123456",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cascais",
      addressRegion: "Lisboa",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6979,
      longitude: -9.4215,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      "Cascais",
      "Carcavelos",
      "Parede",
      "Estoril",
      "São Domingos de Rana",
      "Alcabideche",
      "Oeiras",
    ],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
    },
    image: `${siteUrl}/img/hero.png`,
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
