import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans as JosefinSans, Roboto } from 'next/font/google'
import Providers from '@/components/Providers'

const josefin = JosefinSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-josefin',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
