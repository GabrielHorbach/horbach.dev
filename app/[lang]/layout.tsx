import { Montserrat } from "next/font/google";
import { locales } from "@/config/languages";
import "../globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isPortuguese = lang === "pt";

  const title = isPortuguese
    ? "Horbach Dev - Desenvolvimento Web"
    : "Horbach Dev - Web Development";

  const description = isPortuguese
    ? "Serviços de desenvolvimento web no Brasil e nos Estados Unidos. Especialistas em criação de sites, aplicações web e soluções digitais."
    : "Web development services in Brazil and the United States. Experts in website creation, web applications, and digital solutions.";

  return {
    title,
    description,
    metadataBase: new URL("https://horbach.dev"),
    alternates: {
      canonical: `https://horbach.dev/${lang}`,
      languages: {
        "pt-BR": "https://horbach.dev/pt",
        "en-US": "https://horbach.dev/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://horbach.dev/${lang}`,
      siteName: "Horbach Dev",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Horbach Dev",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // verification: {
    //   google: "your-google-site-verification", // Add your Google Search Console verification code
    // },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
