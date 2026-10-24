import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Ali Moojid Abbas — Engineer, Developer & Creative Technologist',
  description: 'Portfolio of Eng. Ali Moojid Abbas: Python development, data analysis, applied AI, visual storytelling and motion design.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dawod/thmanyah-font-web/serif-display.css" /></head><body>{children}</body></html>;
}
