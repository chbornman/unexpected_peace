'use client';

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Social {
  email?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface Filmmaker {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  social?: Social;
}

export default function MeetTheFilmmakers() {
  const filmmakers: Filmmaker[] = [
    {
      name: "Dr. Jonathan Bornman",
      role: "Social Anthropologist / Producer",
      bio: "Dr. Bornman grew up in a Mennonite family in Indiana and has dedicated his life to understanding peace and reconciliation. After serving in Burkina Faso and Senegal, he earned his PhD in Social Anthropology from Middlesex University. His groundbreaking research on nonviolence and Christian-Muslim relations led him to found Dove Tale Productions in 2021 to share these powerful stories of forgiveness.",
      expertise: ["Social Anthropology", "Nonviolence Studies", "Christian-Muslim Relations", "Documentary Production"],
      image: "/images/filmmaker-bornman.jpg",
      social: {
        email: "jonathan@unexpectedpeace.com",
        website: "https://jonathanbornman.com"
      }
    },
    {
      name: "Ehab Assal",
      role: "Cinematographer / Producer",
      bio: "Starting his cinema career in the early 1990s, Ehab Assal has become one of the most respected Palestinian cinematographers working today. His credits include major Hollywood productions like 'The Insider' as well as critically acclaimed films 'Omar' and 'The Idol.' As founder of Yellow Dawn Productions, he brings both technical excellence and deep cultural sensitivity to his visual storytelling.",
      expertise: ["Cinematography", "Documentary Film", "Visual Storytelling", "Cross-cultural Narratives"],
      image: "/images/filmmaker-assal.jpg",
      social: {
        linkedin: "https://linkedin.com/in/ehabassal",
        website: "https://ehabassal.com"
      }
    },
    {
      name: "D. Michael Hostetler",
      role: "Director / Producer",
      bio: "With over 30 years of international communications experience, D. Michael Hostetler brings a unique perspective to documentary filmmaking. As founder of the Sisters & Brothers production group and former Executive Director of Nazareth Village, he has dedicated his career to building bridges between cultures through powerful visual storytelling and authentic cross-cultural dialogue.",
      expertise: ["Film Direction", "Cross-cultural Communication", "Story Development", "Documentary Production"],
      image: "/images/filmmaker-hostetler.jpg",
      social: {
        linkedin: "https://linkedin.com/in/dmichaelhostetler",
        twitter: "https://twitter.com/dmhostetler"
      }
    }
  ];

  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#dea01e]/20" />
        <div className="absolute inset-0 bg-[url('/images/film-texture.png')] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Meet the <span className="text-[#dea01e]">Filmmakers</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The creative minds behind Unexpected Peace bring together decades of experience 
              in documentary filmmaking, anthropology, and cross-cultural storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filmmakers Grid Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {filmmakers.map((filmmaker, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Filmmaker Portrait with Overlay */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={filmmaker.image}
                    alt={`${filmmaker.name} - ${filmmaker.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {filmmaker.social?.email && (
                      <a 
                        href={`mailto:${filmmaker.social.email}`}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-[#dea01e] hover:text-white transition-all duration-200"
                        aria-label={`Email ${filmmaker.name}`}
                      >
                        <FaEnvelope size={20} />
                      </a>
                    )}
                    {filmmaker.social?.linkedin && (
                      <a 
                        href={filmmaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-[#dea01e] hover:text-white transition-all duration-200"
                        aria-label={`${filmmaker.name} on LinkedIn`}
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {filmmaker.social?.twitter && (
                      <a 
                        href={filmmaker.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-[#dea01e] hover:text-white transition-all duration-200"
                        aria-label={`${filmmaker.name} on Twitter`}
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {filmmaker.social?.website && (
                      <a 
                        href={filmmaker.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-[#dea01e] hover:text-white transition-all duration-200"
                        aria-label={`${filmmaker.name}'s website`}
                      >
                        <FaGlobe size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#dea01e] transition-colors duration-200">
                    {filmmaker.name}
                  </h2>
                  <p className="text-lg text-[#dea01e] font-semibold mb-4">
                    {filmmaker.role}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {filmmaker.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {filmmaker.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-[#dea01e]/10 group-hover:text-[#dea01e] transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section with Enhanced Design */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dea01e]/5 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
              A <span className="text-[#dea01e]">Collaborative</span> Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Together, our team brings a unique blend of academic insight, artistic vision, 
              and cultural sensitivity to tell stories that transcend boundaries. With backgrounds 
              spanning continents and faiths, we unite in our commitment to showcasing the 
              transformative power of peace and understanding.
            </p>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#dea01e]/10 blur-2xl rounded-full" />
              <blockquote className="relative text-2xl sm:text-3xl font-light italic text-gray-700 leading-relaxed">
                &ldquo;Our diverse perspectives allow us to capture the universal human experiences 
                that connect us all, regardless of our differences.&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for line clamping */}
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-none {
          display: block;
          -webkit-line-clamp: unset;
        }
      `}</style>
    </>
  );
}