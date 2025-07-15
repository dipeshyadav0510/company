import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false
})

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maa Jalapa Construction',
  description: 'Professional construction services for all your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative min-h-screen flex flex-col">
          <div className="sticky top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <Navbar />
          </div>
          <main className="flex-grow pt-3">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
