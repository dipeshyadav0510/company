'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { socialLinks } from '@/config/social-links'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isActive = (path: string) => {
    return pathname === path ? 'border-b-2 border-white' : ''
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-900 text-white relative">
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-11">
        <div className="flex items-center justify-between h-16">
          {/* Left - Company Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Maa Jalapa
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none relative z-[60]"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-10">
              <Link 
                href="/" 
                className={`hover:bg-gray-700 px-6 py-2 rounded-md text-base ${isActive('/')}`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`hover:bg-gray-700 px-4 py-2 rounded-md text-base ${isActive('/services')}`}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className={`hover:bg-gray-700 px-4 py-2 rounded-md text-base ${isActive('/projects')}`}
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className={`hover:bg-gray-700 px-4 py-2 rounded-md text-base ${isActive('/about')}`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`hover:bg-gray-700 px-4 py-2 rounded-md text-base ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right - Social Media Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href={socialLinks.facebook}
              target="_blank" 
              className="hover:text-yellow-500 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
            </Link>
            <Link 
              href={socialLinks.instagram}
              target="_blank" 
              className="hover:text-yellow-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.3,0.1,1.6,0.1,4.8c0,3.2,0,3.6-0.1,4.8c-0.1,3.2-1.7,4.8-4.9,4.9c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.9-0.1c-3.3-0.1-4.8-1.7-4.9-4.9c-0.1-1.3-0.1-1.6-0.1-4.8c0-3.2,0-3.6,0.1-4.8c0.1-3.2,1.7-4.8,4.9-4.9C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z"/>
              </svg>
            </Link>
            <Link 
              href={socialLinks.whatsapp}
              target="_blank" 
              className="hover:text-yellow-500 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </Link>
            <Link 
              href={socialLinks.viber}
              target="_blank" 
              className="hover:text-yellow-500 transition-colors"
              aria-label="Viber"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.4.8C13.1.8 14.8.9 16.5 1.2c1.5.3 2.9.8 4.1 1.9 1.2 1.1 1.8 2.4 2.1 3.9.3 1.8.4 3.5.4 5.3 0 1.8-.1 3.5-.4 5.3-.3 1.5-.9 2.8-2.1 3.9-1.2 1.1-2.6 1.6-4.1 1.9-1.7.3-3.4.4-5.1.4-1.7 0-3.4-.1-5.1-.4-1.5-.3-2.9-.8-4.1-1.9-1.2-1.1-1.8-2.4-2.1-3.9-.3-1.8-.4-3.5-.4-5.3 0-1.8.1-3.5.4-5.3.3-1.5.9-2.8 2.1-3.9 1.2-1.1 2.6-1.6 4.1-1.9 1.7-.3 3.4-.4 5.1-.4zm0 2c-1.6 0-3.2.1-4.8.3-1.1.2-2.1.6-2.9 1.4-.8.8-1.3 1.8-1.5 2.9-.2 1.6-.3 3.2-.3 4.8s.1 3.2.3 4.8c.2 1.1.6 2.1 1.4 2.9.8.8 1.8 1.3 2.9 1.5 1.6.2 3.2.3 4.8.3s3.2-.1 4.8-.3c1.1-.2 2.1-.6 2.9-1.4.8-.8 1.3-1.8 1.5-2.9.2-1.6.3-3.2.3-4.8s-.1-3.2-.3-4.8c-.2-1.1-.6-2.1-1.4-2.9-.8-.8-1.8-1.3-2.9-1.5-1.6-.2-3.2-.3-4.8-.3zm-.5 4.2c.3 0 .5.2.5.5v2.5h2.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.5h-2.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.5v-2.5c0-.3.2-.5.5-.5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Sliding from right */}
      <div 
        className={`
          fixed top-0 right-0 w-64 h-full transform transition-transform duration-300 ease-in-out z-50
          bg-[#0f1729]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="px-4 pt-20 pb-3 space-y-1 bg-[#0f1729]">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium bg-[#0f1729] hover:bg-gray-700 ${isActive('/')}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`block px-3 py-2 rounded-md text-base font-medium bg-[#0f1729] hover:bg-gray-700 ${isActive('/services')}`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`block px-3 py-2 rounded-md text-base font-medium bg-[#0f1729] hover:bg-gray-700 ${isActive('/projects')}`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium bg-[#0f1729] hover:bg-gray-700 ${isActive('/about')}`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium bg-[#0f1729] hover:bg-gray-700 ${isActive('/contact')}`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
        {/* Mobile Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-[#0f1729]">
          <div className="flex items-center space-x-4">
            <Link
              href={socialLinks.facebook}
              target="_blank"
              className="text-gray-300 hover:text-yellow-500"
              aria-label="Facebook"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
            </Link>
            <Link
              href={socialLinks.instagram}
              target="_blank"
              className="text-gray-300 hover:text-yellow-500"
              aria-label="Instagram"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.3,0.1,1.6,0.1,4.8c0,3.2,0,3.6-0.1,4.8c-0.1,3.2-1.7,4.8-4.9,4.9c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.9-0.1c-3.3-0.1-4.8-1.7-4.9-4.9c-0.1-1.3-0.1-1.6-0.1-4.8c0-3.2,0-3.6,0.1-4.8c0.1-3.2,1.7-4.8,4.9-4.9C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z"/>
              </svg>
            </Link>
            <Link
              href={socialLinks.whatsapp}
              target="_blank"
              className="text-gray-300 hover:text-yellow-500"
              aria-label="WhatsApp"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </Link>
            <Link
              href={socialLinks.viber}
              target="_blank"
              className="text-gray-300 hover:text-yellow-500"
              aria-label="Viber"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.4.8C13.1.8 14.8.9 16.5 1.2c1.5.3 2.9.8 4.1 1.9 1.2 1.1 1.8 2.4 2.1 3.9.3 1.8.4 3.5.4 5.3 0 1.8-.1 3.5-.4 5.3-.3 1.5-.9 2.8-2.1 3.9-1.2 1.1-2.6 1.6-4.1 1.9-1.7.3-3.4.4-5.1.4-1.7 0-3.4-.1-5.1-.4-1.5-.3-2.9-.8-4.1-1.9-1.2-1.1-1.8-2.4-2.1-3.9-.3-1.8-.4-3.5-.4-5.3 0-1.8.1-3.5.4-5.3.3-1.5.9-2.8 2.1-3.9 1.2-1.1 2.6-1.6 4.1-1.9 1.7-.3 3.4-.4 5.1-.4zm0 2c-1.6 0-3.2.1-4.8.3-1.1.2-2.1.6-2.9 1.4-.8.8-1.3 1.8-1.5 2.9-.2 1.6-.3 3.2-.3 4.8s.1 3.2.3 4.8c.2 1.1.6 2.1 1.4 2.9.8.8 1.8 1.3 2.9 1.5 1.6.2 3.2.3 4.8.3s3.2-.1 4.8-.3c1.1-.2 2.1-.6 2.9-1.4.8-.8 1.3-1.8 1.5-2.9.2-1.6.3-3.2.3-4.8s-.1-3.2-.3-4.8c-.2-1.1-.6-2.1-1.4-2.9-.8-.8-1.8-1.3-2.9-1.5-1.6-.2-3.2-.3-4.8-.3zm-.5 4.2c.3 0 .5.2.5.5v2.5h2.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.5h-2.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.5v-2.5c0-.3.2-.5.5-.5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar