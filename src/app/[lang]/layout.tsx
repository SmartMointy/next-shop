import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import Salesbar from "@/components/salesbar";
import generateAlternates from "@/utils/generateAlternates";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import "@/app/globals.css";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

// TODO: Get correct fonts with weights
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.lang,
    namespace: "metadata",
  });

  // TODO: Load env BaseUrl
  // TODO: Localed Description
  // TODO: Localed Keywords
  return {
    title: {
      template: "%s | Next Shop",
      default: "Next Shop", // a default is required when creating a template
    },
    description: t("description"),
    referrer: "origin-when-cross-origin",
    keywords: ["Next Shop"],
    metadataBase: new URL("http://localhost:3000"),
    alternates: generateAlternates("/"),
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: [
      {
        rel: "mask-icon",
        sizes: "16x16",
        url: "/favicon32.png",
        color: "white",
      },
      {
        rel: "mask-icon",
        sizes: "16x16",
        url: "/favicon32.png",
        color: "black",
      },
    ],
  };
}

export default function IntlLayout({
  children,
  params,
}: {
  children: React.ReactNode | JSX.Element;
  params: { lang: string };
}) {
  const t = useTranslations("nav");
  console.warn(params);
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} ${poppins.className}`}>
        <NextIntlClientProvider messages={{}}>
          <div className="main-layout">
            <Salesbar />
            <header className="sticky top-0 z-50 bg-white">
              <Navbar menuLinks={[]} />
            </header>
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
