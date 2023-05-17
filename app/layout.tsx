import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'
import NavCart from '@/components/NavCart'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
<head>
<link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
</head>
      <body>
        <NavCart />
        
        
        {children}</body>
    </html>
  )
}
