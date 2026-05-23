import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sensor Watch Jolt Playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
