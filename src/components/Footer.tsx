import Link from 'next/link'
import { socialLinks } from '@/config/social-links'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 w-full">
            <h3 className="text-xl font-bold mb-6">Maa Jalapa Construction & Suppliers Pvt. Ltd.</h3>
            <p className="text-gray-300 text-base">
              Building dreams into reality with quality and precision.
            </p>
            <div className="mt-8 flex space-x-6">
              <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </Link>
              <Link href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link href={socialLinks.viber} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.4.8C13.1.8 14.8.9 16.5 1.2c1.5.3 2.9.8 4.1 1.9 1.2 1.1 1.8 2.4 2.1 3.9.3 1.8.4 3.5.4 5.3 0 1.8-.1 3.5-.4 5.3-.3 1.5-.9 2.8-2.1 3.9-1.2 1.1-2.6 1.6-4.1 1.9-1.7.3-3.4.4-5.1.4-1.7 0-3.4-.1-5.1-.4-1.5-.3-2.9-.8-4.1-1.9-1.2-1.1-1.8-2.4-2.1-3.9-.3-1.8-.4-3.5-.4-5.3 0-1.8.1-3.5.4-5.3.3-1.5.9-2.8 2.1-3.9 1.2-1.1 2.6-1.6 4.1-1.9 1.7-.3 3.4-.4 5.1-.4zm0 2c-1.6 0-3.2.1-4.8.3-1.1.2-2.1.6-2.9 1.4-.8.8-1.3 1.8-1.5 2.9-.2 1.6-.3 3.2-.3 4.8s.1 3.2.3 4.8c.2 1.1.6 2.1 1.4 2.9.8.8 1.8 1.3 2.9 1.5 1.6.2 3.2.3 4.8.3s3.2-.1 4.8-.3c1.1-.2 2.1-.6 2.9-1.4.8-.8 1.3-1.8 1.5-2.9.2-1.6.3-3.2.3-4.8s-.1-3.2-.3-4.8c-.2-1.1-.6-2.1-1.4-2.9-.8-.8-1.8-1.3-2.9-1.5-1.6-.2-3.2-.3-4.8-.3zm-.5 4.2c.3 0 .5.2.5.5v2.5h2.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.5h-2.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.5v-2.5c0-.3.2-.5.5-.5z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 w-full">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-500 transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-yellow-500 transition-colors text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 w-full">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-base">Maa Jalapa Construction & Suppliers Pvt. Ltd.</p>
              <p className="text-gray-300 text-base">Teku, Kathmandu, Nepal</p>
              <p className="text-gray-300 text-base">Phone: +977 984 123 4567</p>
              <p className="text-gray-300 text-base">Email: maajalapa123@gmail.com</p>
            </div>
          </div>

          <div className="md:col-span-3 w-full">
            <h3 className="text-xl font-bold mb-6">Office Hours</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-base">Sunday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-base">Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-lg">© 2024 Maa Jalapa Construction & Suppliers Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 