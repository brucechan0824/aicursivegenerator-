import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Cursive Generator - Best Cursive Font & Text Generator',
  description: 'Free AI cursive generator to transform text into beautiful cursive fonts instantly. Best AI-powered cursive text generator and cursive font generator with intelligent enhancement. Perfect for social media, design projects, and creative writing.',
  keywords: 'ai cursive generator, cursive generator, cursive font generator, cursive text generator, ai text generator, fancy text generator, stylish text, cursive writing, text converter, unicode text, social media fonts, ai cursive font converter',
  authors: [{ name: 'AI Cursive Generator' }],
  creator: 'AI Cursive Generator',
  publisher: 'AI Cursive Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cursive-generator.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Cursive Generator - Best Cursive Font & Text Generator',
    description: 'Free AI cursive generator to transform text into beautiful cursive fonts. Best AI-powered cursive text generator and cursive font generator.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Cursive Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cursive Generator - Best Cursive Font & Text Generator',
    description: 'Free AI cursive generator to transform text into beautiful cursive fonts. Best AI-powered cursive text generator and cursive font generator.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AI Cursive Generator",
              "description": "Free AI cursive generator to transform text into beautiful cursive fonts instantly. Best AI-powered cursive text generator and cursive font generator",
              "url": "https://ai-cursive-generator.com",
              "applicationCategory": "Utility",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {children}
      </body>
    </html>
  )
} 