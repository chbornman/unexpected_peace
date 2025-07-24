'use client'

import Link from "next/link";
import Image from "next/image";
import { PlayIcon, FilmIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/documentary-still-7a.jpg"
            alt="Unexpected Peace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tagline at top */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 font-light tracking-wide animate-fade-in italic">
            A film by Dove Tale Productions
          </p>

          {/* Logo/Title */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-light">unexpected</span>
              <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight">Peace</span>
            </h1>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/watch-the-film"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#dea01e] rounded-full hover:bg-[#c4901a] transition-all duration-200 transform hover:scale-105"
            >
              <FilmIcon className="w-5 h-5 mr-2" />
              WATCH THE FILM
            </Link>
            
            <button
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsPlaying(true)}
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              PLAY TRAILER
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Stories of Forgiveness & Reconciliation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unexpected Peace explores extraordinary journeys of forgiveness across cultures, 
              revealing how communities choose love over hate, understanding over revenge, 
              and peace over violence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Forgiveness</h3>
              <p className="text-gray-600">Witness the transformative power of forgiveness in the face of tragedy</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cross-Cultural</h3>
              <p className="text-gray-600">Explore peace-building across different faiths and cultures worldwide</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <FilmIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentary</h3>
              <p className="text-gray-600">A powerful film that challenges our understanding of conflict resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-[#dea01e] opacity-20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <blockquote className="relative text-2xl sm:text-3xl md:text-4xl font-light italic text-gray-700 text-center leading-relaxed">
              &quot;Peace starts with recognizing the humanity of the other&quot;
            </blockquote>
            <div className="absolute -bottom-8 -right-8 text-[#dea01e] opacity-20 transform rotate-180">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
          </div>
          <cite className="block text-center mt-8 text-lg text-gray-600 not-italic">
            — Featured in Unexpected Peace
          </cite>
        </div>
      </section>

      {/* Stories Preview */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Three Powerful Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Journey across continents to witness how different communities respond to violence with unexpected grace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  src="/images/documentary-still-2a.jpg"
                  alt="Amish community"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">Nickel Mines</h3>
                  <p className="text-sm opacity-90">Pennsylvania, USA</p>
                </div>
              </div>
              <p className="text-gray-600">How the Amish community chose immediate forgiveness after an unthinkable tragedy</p>
            </div>

            {/* Story 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  src="/images/documentary-still-5a.jpg"
                  alt="Harlem community"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">Harlem</h3>
                  <p className="text-sm opacity-90">New York, USA</p>
                </div>
              </div>
              <p className="text-gray-600">Muslim families&apos; powerful response of nonviolence in the face of senseless violence</p>
            </div>

            {/* Story 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  src="/images/documentary-still-7a.jpg"
                  alt="Solo, Indonesia"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">Solo</h3>
                  <p className="text-sm opacity-90">Indonesia</p>
                </div>
              </div>
              <p className="text-gray-600">Christians and Muslims building bridges of understanding in a divided city</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about/the-story"
              className="inline-flex items-center text-[#dea01e] hover:text-[#c4901a] font-semibold text-lg group"
            >
              Explore All Stories
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Experience the Journey
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join us in exploring stories of reconciliation, hope, and the extraordinary 
            power of human connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/watch-the-film"
              className="btn-gold text-white"
            >
              <FilmIcon className="w-5 h-5 mr-2" />
              Start Watching Now
            </Link>
            <Link
              href="/donate"
              className="btn-secondary text-white border-white hover:bg-white hover:text-black"
            >
              <HeartIcon className="w-5 h-5 mr-2" />
              Support the Film
            </Link>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setIsPlaying(false)}>
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#dea01e] transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-white text-xl">Trailer coming soon!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}