import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EnchantedCanvas ● Indie Video Games',
  description: 'EnchantedCanvas is a passionate new indie game studio committed to creative growth and improvement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>{children}</body>
    </html>
  )
}