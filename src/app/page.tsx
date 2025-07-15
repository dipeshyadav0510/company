'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import TypeWriter from '@/components/TypeWriter';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  const [showFirstContent, setShowFirstContent] = useState(false);
  const [showSecondContent, setShowSecondContent] = useState(false);

  const achievements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "25+ Years of Excellence",
      description: "Delivering exceptional construction services since 1995"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "500+ Projects Completed",
      description: "From residential homes to commercial complexes"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "98% Client Satisfaction",
      description: "Consistently exceeding client expectations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Company Greatness Section */}
      <div className="w-full py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypeWriter 
              text="Building Tomorrow's Legacy Today"
              className="text-4xl md:text-5xl font-bold text-white mb-6 h-[3.5rem]"
              onHalfway={() => setShowFirstContent(true)}
            />
            <div className={`transition-opacity duration-1000 ${showFirstContent ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Maa Jalapa Construction, we combine decades of expertise with innovative solutions to create structures that stand the test of time.
              </p>
            </div>
          </div>

          <div className={`transition-opacity duration-1000 ${showFirstContent ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-md bg-white/10 p-8 rounded-lg border border-white/20 text-center transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-yellow-500 mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TypeWriter 
            text="Ready to Start Your Project?"
            className="text-4xl md:text-5xl font-bold text-white mb-6 h-[3.5rem]"
            onHalfway={() => setShowSecondContent(true)}
            delay={0} // Start at the same time as the first heading
          />
          <div className={`transition-opacity duration-1000 ${showSecondContent ? 'opacity-100' : 'opacity-0'}`}>
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
    </div>
  )
}
