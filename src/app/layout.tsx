import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Ali Moojid Abbas — Engineer, Developer & Creative Technologist',
  description: 'Portfolio of Eng. Ali Moojid Abbas: Python development, data analysis, applied AI, visual storytelling and motion design.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
