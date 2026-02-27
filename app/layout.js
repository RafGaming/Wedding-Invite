import "./globals.css";

export const metadata = {
  title: "Wedding Invitation",
  description: "Jethro & Francisca Wedding Invitation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
