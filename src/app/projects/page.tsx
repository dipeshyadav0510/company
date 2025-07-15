'use client';

import Image from 'next/image'
import { useState, useEffect, TouchEvent } from 'react'

interface ProjectDetails {
  location: string;
  duration: string;
  size: string;
  completed: string;
  coordinates: { lat: number; lng: number; };
}

interface Project {
  title: string;
  description: string;
  images: string[];
  category: string;
  details: ProjectDetails;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Stagger the appearance of project cards
    const showCards = () => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200); // Each card appears 200ms after the previous one
      });
    };

    showCards();
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = (projectTitle: string) => {
    const touchDiff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swipe left
        nextImage(projectTitle);
      } else {
        // Swipe right
        prevImage(projectTitle);
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
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
        'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2070',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
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
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        'https://images.unsplash.com/photo-1600573472591-ee6a8e536a68?q=80&w=2070',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070',
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
        'https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=2070',
        'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2070',
        'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=2070',
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

  const nextImage = (projectTitle: string) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => {
        const currentIndex = prev[projectTitle] || 0;
        const project = projects.find(p => p.title === projectTitle);
        if (!project) return prev;
        
        return {
          ...prev,
          [projectTitle]: currentIndex === project.images.length - 1 ? 0 : currentIndex + 1
        };
      });
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevImage = (projectTitle: string) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => {
        const currentIndex = prev[projectTitle] || 0;
        const project = projects.find(p => p.title === projectTitle);
        if (!project) return prev;
        
        return {
          ...prev,
          [projectTitle]: currentIndex === 0 ? project.images.length - 1 : currentIndex - 1
        };
      });
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Handle keyboard navigation for desktop modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject && !isMobile) {
        if (e.key === 'ArrowLeft') {
          prevImage(selectedProject.title);
        } else if (e.key === 'ArrowRight') {
          nextImage(selectedProject.title);
        } else if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isMobile]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12 gradient-heading">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`backdrop-blur-md bg-white/10 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-white/20 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => {
                if (!isMobile) {
                  setSelectedProject(project);
                  setCurrentImageIndex(prev => ({ ...prev, [project.title]: 0 }));
                }
              }}
            >
              <div 
                className="relative h-64 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(project.title)}
              >
                <Image
                  src={project.images[currentImageIndex[project.title] || 0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                  {project.category}
                </div>

                {/* Mobile Navigation Arrows */}
                {isMobile && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(project.title);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity duration-300 z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(project.title);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity duration-300 z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      {(currentImageIndex[project.title] || 0) + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
                <p className="text-gray-300 text-base mb-4 h-[72px] line-clamp-3 overflow-hidden">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Location</p>
                    <p className="text-gray-300 line-clamp-2">{project.details.location}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Duration</p>
                    <p className="text-gray-300 line-clamp-2">{project.details.duration}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Size</p>
                    <p className="text-gray-300 line-clamp-2">{project.details.size}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Completed</p>
                    <p className="text-gray-300 line-clamp-2">{project.details.completed}</p>
                  </div>
                </div>

                <div className="mt-4 text-sm flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openInGoogleMaps(project.details.coordinates);
                    }}
                    className="flex items-center text-yellow-500 hover:text-yellow-400"
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

      {/* Project Details Modal - Only shown on desktop */}
      {selectedProject && !isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
            <div className="relative">
              {/* Image Slider */}
              <div className="relative h-[50vh] w-full overflow-hidden">
                <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                  isTransitioning ? 'opacity-50' : 'opacity-100'
                }`}>
                  <Image
                    src={selectedProject.images[currentImageIndex[selectedProject.title] || 0]}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => prevImage(selectedProject.title)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity duration-300 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => nextImage(selectedProject.title)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity duration-300 z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10">
                  {(currentImageIndex[selectedProject.title] || 0) + 1} / {selectedProject.images.length}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm mt-2">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => openInGoogleMaps(selectedProject.details.coordinates)}
                    className="flex items-center text-yellow-500 hover:text-yellow-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Map
                  </button>
                </div>

                <p className="text-gray-300 mb-6 h-[96px] line-clamp-4">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Location</p>
                    <p className="text-gray-300 line-clamp-2">{selectedProject.details.location}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Duration</p>
                    <p className="text-gray-300 line-clamp-2">{selectedProject.details.duration}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Size</p>
                    <p className="text-gray-300 line-clamp-2">{selectedProject.details.size}</p>
                  </div>
                  <div className="h-[60px]">
                    <p className="font-semibold text-yellow-500">Completed</p>
                    <p className="text-gray-300 line-clamp-2">{selectedProject.details.completed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 