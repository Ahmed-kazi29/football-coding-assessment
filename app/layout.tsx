import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Sofia_Sans } from "next/font/google";
import ClientLayout from "@/components/layout/ClientLayout";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Football Shuru",
  description: "Your football community platform",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sofiaSans.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
