import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cerberus Games',
  description: 'Cerberus Games is a dynamic game studio committed to fostering the growth of emerging game developers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>{children}</body>
    </html>
  )
}