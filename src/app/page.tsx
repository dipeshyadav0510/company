import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-16">
      {/* CTA Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Let's work together to bring your construction vision to life. Our team is ready to help you with your next project.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/projects"
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-md font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300 text-lg"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-4 rounded-md font-bold hover:bg-yellow-400 transition-all duration-300 text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
