"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Globe, Users, Handshake } from "lucide-react";

const partners = [
  {
    name: "Eastern Mennonite Missions",
    logo: "/images/logo-emm.png",
    description: "A non-profit organization supporting the documentary through their commitment to peace-building and reconciliation efforts worldwide.",
    website: "https://www.emm.org/",
    featured: true
  },
  {
    name: "Peace and Reconciliation Network",
    logo: "/images/logo-prn.png",
    description: "Part of the World Evangelical Alliance, PRN is dedicated to promoting peace and reconciliation as integral aspects of the gospel message.",
    website: "https://www.reconciledworld.net/",
    featured: true
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Shared Mission",
    description: "Join us in promoting peace and reconciliation through powerful storytelling"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Reach audiences worldwide with a message of hope and transformation"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Connect with organizations dedicated to healing and understanding"
  },
  {
    icon: Handshake,
    title: "Collaborative Support",
    description: "Work together to create lasting change in communities affected by conflict"
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/10 via-transparent to-transparent" />
        
        <div className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#dea01e]">Partners</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Together with visionary organizations, we're bringing stories of peace 
                and reconciliation to audiences worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations that share our commitment to healing and transformation
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  {/* Logo Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10">
                    <div className="relative h-32 lg:h-40 w-full">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#dea01e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c48a08] transition-all duration-200 group/btn"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Partnership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in creating meaningful impact through collaborative storytelling
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#dea01e]/10 rounded-full mb-4 group-hover:bg-[#dea01e]/20 transition-colors duration-200">
                  <benefit.icon className="w-8 h-8 text-[#dea01e]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-[#dea01e] to-[#c48a08] rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              If your organization shares our vision for peace and reconciliation, 
              we'd love to explore how we can work together to create lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#dea01e] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 group"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}