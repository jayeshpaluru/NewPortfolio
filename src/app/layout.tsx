import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jayesh Paluru',
  description: 'My personal portfolio inspider by the dynamic island template by spacecode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${robotoMono.className} bg-gradient-radial from-secondary via-green-400 to-accent`}>{children}</body>
    </html>
  );
}
