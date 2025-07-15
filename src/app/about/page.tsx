import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069',
      bio: '25+ years of construction experience, specializing in sustainable building practices.',
      instagram: 'https://www.instagram.com/johnsmith'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
      bio: 'Expert in commercial construction with a focus on client satisfaction.',
      instagram: 'https://www.instagram.com/sarahjohnson'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
      bio: 'Award-winning architect with expertise in modern and sustainable design.',
      instagram: 'https://www.instagram.com/michaelchen'
    },
    {
      name: 'Emily Brown',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
      bio: 'Passionate about creating functional and beautiful spaces for our clients.',
      instagram: 'https://www.instagram.com/emilybrown'
    }
  ]

  const stats = [
    {
      number: '25+',
      label: 'Years of Experience',
      description: 'Serving the construction industry since 1995'
    },
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Across residential and commercial sectors'
    },
    {
      number: '150+',
      label: 'Expert Team Members',
      description: 'Skilled professionals and craftsmen'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys'
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-center mb-12 text-white">About Our Company</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Company Overview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="backdrop-blur-md bg-[#1a1f2e]/80 p-8 rounded-lg border border-white/20 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-8 text-white">
                <div>Building</div>
                <div>Excellence Since</div>
                <div>1995</div>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                For over 25 years, Maa Jalapa Construction & Suppliers Pvt. Ltd. has been at the forefront of the construction industry, 
                delivering exceptional quality and innovation in every project we undertake.
              </p>
              <p className="text-gray-300 text-lg">
                Our commitment to excellence, sustainable practices, and customer satisfaction has made us 
                one of the most trusted names in construction.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="backdrop-blur-md bg-white/10 p-6 rounded-lg border border-white/20 text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <a 
                key={member.name}
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer" 
                className="block backdrop-blur-md bg-white/10 rounded-lg overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-500 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 