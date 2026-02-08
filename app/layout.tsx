import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Le Jardin Secret - Restaurant Gastronomique',
  description: 'Une expérience culinaire d\'exception au cœur de Paris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}