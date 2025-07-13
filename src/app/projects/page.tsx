'use client';

import Image from 'next/image'
import { useState, useEffect, TouchEvent } from 'react'

interface ProjectDetails {
  location: string;
  duration: string;
  size: string;
  completed: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  details: ProjectDetails;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!selectedProject) return;

    const touchDiff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swipe left
        nextImage();
      } else {
        // Swipe right
        prevImage();
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const projects: Project[] = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
      images: [
        'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2071',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070',
      ],
      details: {
        location: 'Downtown Business District',
        duration: '18 months',
        size: '50,000 sq ft',
        completed: '2023',
        coordinates: { lat: 27.7172, lng: 85.3240 }
      }
    },
    {
      title: 'Luxury Residential Development',
      category: 'Residential',
      description: 'Custom-built luxury homes with premium finishes and smart home integration.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
      ],
      details: {
        location: 'Suburban Heights',
        duration: '24 months',
        size: '12 units',
        completed: '2023',
        coordinates: { lat: 27.7052, lng: 85.3299 }
      }
    },
    {
      title: 'Historic Building Restoration',
      category: 'Renovation',
      description: 'Careful restoration of a 100-year-old building while preserving its historic character.',
      images: [
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2072',
        'https://images.unsplash.com/photo-1582407947200-13e9c44dd819?q=80&w=2070',
        'https://images.unsplash.com/photo-1582407947333-5e879c0c607a?q=80&w=2070',
      ],
      details: {
        location: 'Heritage District',
        duration: '12 months',
        size: '15,000 sq ft',
        completed: '2022',
        coordinates: { lat: 27.7047, lng: 85.3080 }
      }
    },
    {
      title: 'Shopping Center Development',
      category: 'Commercial',
      description: 'Modern retail complex with sustainable features and ample parking.',
      images: [
        'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?q=80&w=2070',
        'https://images.unsplash.com/photo-1567449304552-5b82044a5310?q=80&w=2070',
        'https://images.unsplash.com/photo-1567449303183-ae0d6ed1d100?q=80&w=2070',
      ],
      details: {
        location: 'City Center',
        duration: '15 months',
        size: '75,000 sq ft',
        completed: '2022',
        coordinates: { lat: 27.7167, lng: 85.3500 }
      }
    }
  ]

  const openInGoogleMaps = (coordinates: { lat: number, lng: number }) => {
    const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  const nextImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 300); // Match transition duration
    }
  };

  const prevImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 300); // Match transition duration
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12 gradient-heading">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="gradient-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer enhanced-shadow"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative h-64 overflow-hidden gradient-hover">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl gradient-text font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-base mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold gradient-text">Location</p>
                    <p className="text-gray-600">{project.details.location}</p>
                  </div>
                  <div>
                    <p className="font-semibold gradient-text">Duration</p>
                    <p className="text-gray-600">{project.details.duration}</p>
                  </div>
                  <div>
                    <p className="font-semibold gradient-text">Size</p>
                    <p className="text-gray-600">{project.details.size}</p>
                  </div>
                  <div>
                    <p className="font-semibold gradient-text">Completed</p>
                    <p className="text-gray-600">{project.details.completed}</p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-yellow-600 flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openInGoogleMaps(project.details.coordinates);
                    }}
                    className="flex items-center gradient-yellow hover:text-yellow-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto gradient-card enhanced-shadow">
            <div className="relative">
              {/* Image Slider */}
              <div 
                className="relative h-[50vh] w-full gradient-hover overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                    isTransitioning ? 'opacity-50' : 'opacity-100'
                  }`}
                >
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold gradient-text">{selectedProject.title}</h2>
                  <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm mt-2">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => openInGoogleMaps(selectedProject.details.coordinates)}
                  className="flex items-center gradient-yellow hover:text-yellow-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Map
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="font-semibold gradient-text">Location</p>
                  <p className="text-gray-600">{selectedProject.details.location}</p>
                </div>
                <div>
                  <p className="font-semibold gradient-text">Duration</p>
                  <p className="text-gray-600">{selectedProject.details.duration}</p>
                </div>
                <div>
                  <p className="font-semibold gradient-text">Size</p>
                  <p className="text-gray-600">{selectedProject.details.size}</p>
                </div>
                <div>
                  <p className="font-semibold gradient-text">Completed</p>
                  <p className="text-gray-600">{selectedProject.details.completed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 