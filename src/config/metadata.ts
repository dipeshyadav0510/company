import type { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: 'Maa Jalapa Construction & Suppliers Pvt. Ltd.',
  description: 'Professional construction services for residential and commercial projects in Nepal. Quality craftsmanship and sustainable building practices.',
  keywords: ['construction', 'building', 'renovation', 'Nepal', 'Kathmandu', 'contractors', 'construction materials'],
  authors: [{ name: 'Maa Jalapa Construction' }],
  creator: 'Maa Jalapa Construction',
  publisher: 'Maa Jalapa Construction',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maajalapa.com',
    siteName: 'Maa Jalapa Construction',
    title: 'Maa Jalapa Construction & Suppliers Pvt. Ltd.',
    description: 'Professional construction services for residential and commercial projects in Nepal.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
        width: 1200,
        height: 630,
        alt: 'Maa Jalapa Construction Site',
      },
    ],
  },
}

export const getPageMetadata = (page: string): Metadata => {
  const pageMetadata: { [key: string]: Metadata } = {
    home: defaultMetadata,
    about: {
      ...defaultMetadata,
      title: 'About Us | Maa Jalapa Construction',
      description: 'Learn about our 25+ years of excellence in construction and our commitment to quality and innovation.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'About Us | Maa Jalapa Construction',
        description: 'Learn about our 25+ years of excellence in construction and our commitment to quality and innovation.',
      },
    },
    services: {
      ...defaultMetadata,
      title: 'Our Services | Maa Jalapa Construction',
      description: 'Comprehensive construction services including residential, commercial, renovation, and material supply.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Our Services | Maa Jalapa Construction',
        description: 'Comprehensive construction services including residential, commercial, renovation, and material supply.',
      },
    },
    projects: {
      ...defaultMetadata,
      title: 'Our Projects | Maa Jalapa Construction',
      description: 'Explore our portfolio of successful construction projects across Nepal.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Our Projects | Maa Jalapa Construction',
        description: 'Explore our portfolio of successful construction projects across Nepal.',
      },
    },
    contact: {
      ...defaultMetadata,
      title: 'Contact Us | Maa Jalapa Construction',
      description: 'Get in touch with us for your construction needs. Visit our office in Kathmandu or contact us online.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Contact Us | Maa Jalapa Construction',
        description: 'Get in touch with us for your construction needs. Visit our office in Kathmandu or contact us online.',
      },
    },
  }

  return pageMetadata[page] || defaultMetadata
}

export default defaultMetadata 