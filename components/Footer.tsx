import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#dea01e] to-[#f5b942] bg-clip-text text-transparent">
              Unexpected Peace
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A documentary exploring the transformative power of forgiveness and nonviolence across cultures.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Dove Tale Productions LLC
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-100">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/watch-the-film" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Watch the Film
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* The Stories */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-100">The Stories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about/the-story" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Nickel Mines
                </Link>
              </li>
              <li>
                <Link href="/about/the-story" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Harlem
                </Link>
              </li>
              <li>
                <Link href="/about/the-story" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  Solo, Indonesia
                </Link>
              </li>
              <li>
                <Link href="/about/meet-the-filmmakers" className="text-gray-400 hover:text-[#dea01e] transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-4 bg-[#dea01e] mr-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  The Filmmakers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect & Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-100">Connect</h4>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://www.facebook.com/UnexpectedPeace/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#dea01e] transition-all duration-200 group"
              >
                <FaFacebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/UnexpectedPeace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#dea01e] transition-all duration-200 group"
              >
                <FaTwitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/unexpectedpeace/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#dea01e] transition-all duration-200 group"
              >
                <FaInstagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="https://www.imdb.com/title/tt31471601/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#dea01e] transition-all duration-200 group"
              >
                <SiImdb className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#dea01e] to-[#f5b942] text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <HeartIcon className="w-5 h-5 mr-2" />
              Support the Film
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              Website by Perfectly Digital Ltd
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/about/partners" className="text-gray-500 hover:text-[#dea01e] transition-colors duration-200">
                Partners
              </Link>
              <Link href="/about/advisory-council" className="text-gray-500 hover:text-[#dea01e] transition-colors duration-200">
                Advisory Council
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}