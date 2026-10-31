import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jolt Playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    children
  )
}
