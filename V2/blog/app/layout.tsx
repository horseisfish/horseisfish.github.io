import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Shih-Yu Ma - Academic Website',
    template: '%s | Shih-Yu Ma',
  },
  description: 'Master\'s in Information Design @ Taiwan Tech | HCI • Mixed Reality • Cognitive Science',
  openGraph: {
    title: 'Shih-Yu Ma - Academic Website',
    description: 'Master\'s in Information Design @ Taiwan Tech | HCI • Mixed Reality • Cognitive Science',
    url: baseUrl,
    siteName: 'Shih-Yu Ma',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider defaultTheme="dark" storageKey="shih-yu-ma-theme">
          <Navbar />
          <main className="flex-auto min-w-0 flex flex-col px-4 md:px-0 max-w-4xl mx-auto mt-24">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
