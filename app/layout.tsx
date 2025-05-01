import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import { TopNavigation } from '@/components/top-navigation'
import { Footer } from '@/components/footer'
import Script from 'next/script'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const autograf = localFont({ 
  src: [
    { path: './fonts/Autograf.woff2' },
    { path: './fonts/Autograf.woff' },
  ],
  variable: '--font-autograf',
})

const myFont = localFont({
  src: './fonts/Autograf.ttf',
  display: 'swap',
  variable: '--font-autograf',
});

const retrophile = localFont({ 
  src: [
    { path: './fonts/Retrophile.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Retrophile.woff', weight: '400', style: 'normal' },
  ],
  variable: '--font-retrophile',
})

export const metadata: Metadata = {
  title: 'Bimmoon',
  description: 'Creative works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${autograf.variable} ${retrophile.variable}`}>
      <body className={inter.className }>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TopNavigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
      <Script id='google-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `
        }
      </Script>
    </html>
  )
}
