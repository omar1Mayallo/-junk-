import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import AppLayout from "./_common/components/layout/AppLayout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} | %s`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
