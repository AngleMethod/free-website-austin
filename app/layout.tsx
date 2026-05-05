import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$0 Website Build for Austin Businesses",
  description: "$0 upfront website build with $99/month hosting and maintenance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
