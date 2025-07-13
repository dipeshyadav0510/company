'use client';

import Image from 'next/image'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

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
        <h1 className="text-3xl font-bold text-center mb-12 gradient-heading">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="relative h-[370px] mb-8 rounded-lg overflow-hidden enhanced-shadow">
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
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-300">Teku, Kathmandu, Nepal</p>
                  <p className="text-gray-300">Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Contact Information</h3>
                <p className="text-gray-200">Phone: +977 984 123 4567</p>
                <p className="text-gray-200">Email: maajalapa123@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Business Hours</h3>
                <p className="text-gray-200">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-200">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="gradient-card p-10 rounded-lg enhanced-shadow">
            <h2 className="text-xl font-bold mb-6 gradient-text">Send Us a Message</h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Your Message Is Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-yellow-500 text-black py-2 px-6 rounded-md font-bold hover:bg-yellow-400 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="material">Construction Material Supply</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-black"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-6 rounded-md font-bold hover:bg-yellow-400 transition gradient-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 