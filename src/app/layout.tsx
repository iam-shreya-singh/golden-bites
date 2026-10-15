import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Golden Bites | Ghar Ka Swad • Ranchi',
  description: 'Freshly baked dry cakes & traditional flax sattu ladoos made to order in Harmu, Ranchi.',
  icons: {
    icon: '/logo.png', // Points to your custom logo in the public folder
  },
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