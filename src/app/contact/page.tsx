'use client';

import { useState, FormEvent, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Contact() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  useEffect(() => {
    const projectType = searchParams.get('project');
    if (projectType) {
      setFormData(prev => ({ ...prev, project: projectType }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - Now first on mobile */}
          <div className="md:order-2 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                <p className="text-gray-300">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-white mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  >
                    <option value="" className="bg-gray-900">Select a project type</option>
                    <option value="residential" className="bg-gray-900">Residential Construction</option>
                    <option value="commercial" className="bg-gray-900">Commercial Construction</option>
                    <option value="renovation" className="bg-gray-900">Renovation</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={8}
                    className="w-full min-h-[200px] md:min-h-[200px] h-[120px] px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-6 rounded-md font-bold hover:bg-yellow-400 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information - Now second on mobile */}
          <div className="md:order-1 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 p-8">
            <div className="relative h-[370px] mb-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0374927456687!2d85.30756368526284!3d27.69039074837493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQxJzI1LjQiTiA4NcKwMTgnMzUuMSJF!5e0!3m2!1sen!2snp!4v1709704844654!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Address</h3>
                <p className="text-gray-300">Teku, Kathmandu, Nepal</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Contact Information</h3>
                <p className="text-gray-300">Phone: +977 984 123 4567</p>
                <p className="text-gray-300">Email: maajalapa123@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Business Hours</h3>
                <p className="text-gray-300">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 