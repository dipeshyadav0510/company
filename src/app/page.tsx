import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Building Your Vision,<br />Exceeding Expectations
            </h1>
            <p className="text-lg mb-8">
              Quality construction services for residential and commercial projects
            </p>
            <Link 
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
