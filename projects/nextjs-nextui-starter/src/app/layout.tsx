import { cairo } from "@/config/font.config";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import { UIProvider } from "./UIProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} | %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      "/meta/favicon.ico",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/meta/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/meta/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/meta/apple-touch-icon.png",
      },
    ],
    apple: ["/meta/apple-touch-icon.png"],
    shortcut: ["/meta/apple-touch-icon.png"],
  },
  manifest: "/meta/site.webmanifest",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cairo.className}>
        <UIProvider themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
