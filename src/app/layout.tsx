import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DynamicComponents from '@/components/DynamicComponents'

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
        <DynamicComponents />
        
        {/* Content */}
        <div className="relative min-h-screen flex flex-col">
          <div className="sticky top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <Navbar />
          </div>
          <main className="flex-grow pt-1">
            <div className="container mx-auto px-4">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
