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
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  return {
    title:
      lang === "pt"
        ? "Horbach Dev - Desenvolvimento Web"
        : "Horbach Dev - Web Development",
    description:
      lang === "pt"
        ? "Serviços de desenvolvimento web no Brasil e nos Estados Unidos"
        : "Web development services in Brazil and the United States",
    alternates: {
      canonical: `https://horbach.dev/${lang}`,
      languages: {
        "pt-BR": "https://horbach.dev/pt",
        "en-US": "https://horbach.dev/en",
      },
    },
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
