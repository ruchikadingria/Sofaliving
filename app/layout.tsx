import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOFALIVING — Bespoke Sofas for Modern Indian Homes",
  description: "Handcrafted, precision-tailored seating made for the way you live.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
