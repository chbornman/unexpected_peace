'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'
import { HiMenu, HiX } from 'react-icons/hi'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-[#dea01e] group-hover:to-[#c4901a] transition-all duration-300">
              Unexpected Peace
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/watch-the-film" className="text-gray-700 hover:text-[#dea01e] font-medium transition-colors duration-200">
              Watch
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onBlur={() => setTimeout(() => setAboutDropdownOpen(false), 200)}
                className="text-gray-700 hover:text-[#dea01e] font-medium transition-colors duration-200 flex items-center gap-1 group"
              >
                About
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 animate-fade-in">
                  <Link href="/about" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    Overview
                  </Link>
                  <Link href="/about/the-film" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    The Film
                  </Link>
                  <Link href="/about/meet-the-filmmakers" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    Meet the Filmmakers
                  </Link>
                  <Link href="/about/the-story" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    The Story
                  </Link>
                  <Link href="/about/partners" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    Partners
                  </Link>
                  <Link href="/about/advisory-council" className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] transition-all duration-200 rounded-lg mx-2">
                    Advisory Council
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/donate" className="text-gray-700 hover:text-[#dea01e] font-medium transition-colors duration-200">
              Donate
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#dea01e] font-medium transition-colors duration-200">
              Contact
            </Link>
            
            <div className="flex items-center space-x-1 ml-8 pl-8 border-l border-gray-200">
              <a href="https://www.facebook.com/UnexpectedPeace/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <FaFacebook className="h-5 w-5 text-gray-600 hover:text-[#dea01e]" />
              </a>
              <a href="https://twitter.com/UnexpectedPeace" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <FaTwitter className="h-5 w-5 text-gray-600 hover:text-[#dea01e]" />
              </a>
              <a href="https://www.instagram.com/unexpectedpeace/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <FaInstagram className="h-5 w-5 text-gray-600 hover:text-[#dea01e]" />
              </a>
              <a href="https://www.imdb.com/title/tt31471601/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <SiImdb className="h-5 w-5 text-gray-600 hover:text-[#dea01e]" />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-4 space-y-1">
          <Link href="/watch-the-film" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200">
            Watch
          </Link>
          <div className="space-y-1">
            <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/about/the-film" className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 text-sm">
              The Film
            </Link>
            <Link href="/about/meet-the-filmmakers" className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 text-sm">
              Meet the Filmmakers
            </Link>
            <Link href="/about/the-story" className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 text-sm">
              The Story
            </Link>
            <Link href="/about/partners" className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 text-sm">
              Partners
            </Link>
            <Link href="/about/advisory-council" className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200 text-sm">
              Advisory Council
            </Link>
          </div>
          <Link href="/donate" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200">
            Donate
          </Link>
          <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#dea01e] rounded-lg transition-colors duration-200">
            Contact
          </Link>
          
          <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-gray-100">
            <a href="https://www.facebook.com/UnexpectedPeace/" target="_blank" rel="noopener noreferrer" className="p-2">
              <FaFacebook className="h-6 w-6 text-gray-600 hover:text-[#dea01e] transition-colors duration-200" />
            </a>
            <a href="https://twitter.com/UnexpectedPeace" target="_blank" rel="noopener noreferrer" className="p-2">
              <FaTwitter className="h-6 w-6 text-gray-600 hover:text-[#dea01e] transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/unexpectedpeace/" target="_blank" rel="noopener noreferrer" className="p-2">
              <FaInstagram className="h-6 w-6 text-gray-600 hover:text-[#dea01e] transition-colors duration-200" />
            </a>
            <a href="https://www.imdb.com/title/tt31471601/" target="_blank" rel="noopener noreferrer" className="p-2">
              <SiImdb className="h-6 w-6 text-gray-600 hover:text-[#dea01e] transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}