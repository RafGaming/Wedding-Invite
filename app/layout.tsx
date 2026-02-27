import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jethro & Francisca — Wedding Invitation",
  description:
    "You are cordially invited to the wedding celebration of Jethro & Francisca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
