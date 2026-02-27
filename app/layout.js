import "./globals.css";

export const metadata = {
  title: "Jethro & Francisca — Wedding Invitation",
  description: "A super‑premium cinematic wedding invitation experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
