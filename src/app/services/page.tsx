import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'From custom homes to renovations, we bring your dream home to life with quality craftsmanship and attention to detail.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      features: [
        'Custom Home Building',
        'Home Renovations',
        'Kitchen & Bathroom Remodeling',
        'Room Additions',
        'Basement Finishing'
      ]
    },
    {
      title: 'Commercial Construction',
      description: 'We deliver commercial projects on time and within budget while maintaining the highest standards of quality and safety.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2070',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Facilities',
        'Warehouses',
        'Restaurant Build-outs'
      ]
    },
    {
      title: 'Renovation Services',
      description: 'Transform your existing space with our comprehensive renovation services that blend modern design with functionality.',
      image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=2070',
      features: [
        'Interior Renovations',
        'Exterior Renovations',
        'Historic Restorations',
        'Commercial Remodeling',
        'Structural Modifications'
      ]
    },
    {
      title: 'Construction Material Supply',
      description: 'We provide high-quality construction materials for all your building needs, ensuring timely delivery and competitive pricing.',
      image: 'https://images.unsplash.com/photo-1590644178374-fb40b06b6860?q=80&w=2070',
      features: [
        'Cement & Aggregates',
        'Steel & Metal Products',
        'Bricks & Blocks',
        'Plumbing Materials',
        'Electrical Supplies'
      ]
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className={`backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl ${
                  service.title === 'Residential Construction' 
                    ? 'bg-gradient-to-r from-orange-900/30 to-orange-800/30'
                    : service.title === 'Commercial Construction'
                    ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/30'
                    : service.title === 'Renovation Services'
                    ? 'bg-gradient-to-r from-green-900/30 to-green-800/30'
                    : 'bg-gradient-to-r from-yellow-900/30 to-yellow-800/30'
                }`}>
                  <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                  <p className="text-gray-200 text-base mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-200">
                        <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 