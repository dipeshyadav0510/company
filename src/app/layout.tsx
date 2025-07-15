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
        {/* Background Elements */}
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
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
