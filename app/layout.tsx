// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css';

export const metadata = { 
  title: 'Wedding Invite', 
  description: 'A beautiful wedding invitation website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}