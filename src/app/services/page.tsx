'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Services() {
  const router = useRouter();

  const handleServiceClick = (projectType: string) => {
    router.push(`/contact?project=${projectType}`);
  };

  const services = [
    {
      title: 'Residential Construction',
      description: 'From custom homes to renovations, we bring your dream home to life with quality craftsmanship and attention to detail.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      projectType: 'residential',
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
      projectType: 'commercial',
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
      projectType: 'renovation',
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
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070',
      projectType: 'other',
      features: [
        'Cement & Aggregates',
        'Steel & Metal Products',
        'Bricks & Blocks',
        'Plumbing Materials',
        'Electrical Supplies'
      ]
    },
    {
      title: 'Sustainable Building',
      description: 'Specialized in eco-friendly construction practices and sustainable building solutions for environmentally conscious projects.',
      image: 'https://images.unsplash.com/photo-1524207874394-5ec7c8c8e1a6?q=80&w=2070',
      projectType: 'other',
      features: [
        'Solar Panel Installation',
        'Green Building Materials',
        'Energy Efficient Systems',
        'LEED Certification',
        'Waste Reduction Plans'
      ]
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring seamless execution from planning to completion with expert coordination.',
      image: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=2070',
      projectType: 'other',
      features: [
        'Timeline Planning',
        'Budget Management',
        'Contractor Coordination',
        'Quality Control',
        'Progress Monitoring'
      ]
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12 gradient-heading">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="backdrop-blur-md bg-white/10 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] border border-white/20 cursor-pointer"
              onClick={() => handleServiceClick(service.projectType)}
            >
              <div className="relative h-[250px] md:h-[280px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                <p className="text-gray-300 text-base mb-6 h-[72px] line-clamp-3">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 