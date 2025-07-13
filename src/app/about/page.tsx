import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069',
      bio: '25+ years of construction experience, specializing in sustainable building practices.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
      bio: 'Expert in commercial construction with a focus on client satisfaction.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
      bio: 'Award-winning architect with expertise in modern and sustainable design.'
    },
    {
      name: 'Emily Brown',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
      bio: 'Passionate about creating functional and beautiful spaces for our clients.'
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-center mb-12 gradient-heading">About Our Company</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] enhanced-shadow rounded-lg overflow-hidden gradient-hover">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                alt="Company Overview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Building Excellence Since 1995</h2>
              <p className="text-gray-400 text-base mb-4">
                For over 25 years, Maa Jalapa Construction & Suppliers Pvt. Ltd. has been at the forefront of the construction industry, 
                delivering exceptional quality and innovation in every project we undertake.
              </p>
              <p className="text-gray-400 mb-4">
                Our commitment to excellence, sustainable practices, and customer satisfaction has made us 
                one of the most trusted names in construction.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 gradient-card rounded-lg enhanced-shadow">
                  <div className="text-3xl font-bold gradient-yellow">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 gradient-card rounded-lg enhanced-shadow">
                  <div className="text-3xl font-bold gradient-yellow">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 gradient-heading">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 gradient-card rounded-lg enhanced-shadow">
              <div className="text-yellow-500 text-3xl mb-4">🏗️</div>
              <h3 className="text-lg font-bold mb-2 gradient-text">Quality</h3>
              <p className="text-gray-600 text-base">We never compromise on the quality of our work and materials.</p>
            </div>
            <div className="text-center p-6 gradient-card rounded-lg enhanced-shadow">
              <div className="text-yellow-500 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Integrity</h3>
              <p className="text-gray-600">Honest communication and transparent business practices.</p>
            </div>
            <div className="text-center p-6 gradient-card rounded-lg enhanced-shadow">
              <div className="text-yellow-500 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2 gradient-text">Sustainability</h3>
              <p className="text-gray-600">Committed to environmentally responsible construction practices.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 gradient-heading">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center gradient-card p-6 rounded-lg enhanced-shadow">
                <div className="relative h-48 w-48 mx-auto mb-4 gradient-hover rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 gradient-text">{member.name}</h3>
                <p className="gradient-yellow font-medium text-base mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 