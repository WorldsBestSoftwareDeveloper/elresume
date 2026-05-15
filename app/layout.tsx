import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Richard Yakubu | Full Stack Developer',
  description: 'Portfolio for Richard Yakubu, a full stack developer building polished web and onchain experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
