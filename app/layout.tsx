import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Beautytech LLC',
  description: 'Монгол улсын тэргүүлэгч гоо сайхны технологийн компани. RIBESKIN брэндийн Carboxy, Deep Shoot, G-Peel, Dermal бүтээгдэхүүнүүдийн албан ёсны борлуулагч.',
  keywords: ['Beautytech', 'Co2 carboxy', 'Carboxy', 'Deep Shoot', 'G-Peel', 'карбокси', 'гоо сайхан', 'арьс арчилгаа', 'Монгол'],
  icons: {
  icon: [
    { url: "/bicon.png", sizes: "32x32", type: "image/png" },
  ],
},
}

export const viewport: Viewport = {
  themeColor: '#5c4033',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
