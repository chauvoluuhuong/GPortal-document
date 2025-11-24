import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GPortal – Generic Portal',
  description: 'No-code platform for building management software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}

