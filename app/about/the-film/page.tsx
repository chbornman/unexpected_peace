"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Film, Users, Heart, Globe, Award, Calendar, Mail, Play } from "lucide-react";

export default function TheFilm() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#dea01e]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Unexpected Peace
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              A transformative documentary exploring profound alternatives to violence in the face of conflict
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#dea01e] text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c79018] transition-colors shadow-lg"
              >
                <Play className="w-5 h-5" />
                Watch Trailer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <Calendar className="w-5 h-5" />
                Coming 2025
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Synopsis Section with Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About the Documentary
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through intimate storytelling and compelling interviews, Unexpected Peace presents a 
              transformative vision for addressing the challenges that divide our communities and world.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: Film,
                title: "Feature-Length Documentary",
                description: "A cinematic journey that challenges conventional responses to conflict"
              },
              {
                icon: Users,
                title: "Intimate Storytelling",
                description: "Personal narratives that illuminate universal truths about peace and understanding"
              },
              {
                icon: Heart,
                title: "Transformative Vision",
                description: "Practical alternatives to violence that can heal communities and build bridges"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#dea01e] to-[#c79018] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Central Figure Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Dr. Bornman: The Central Figure
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At the heart of Unexpected Peace is Dr. Bornman, whose groundbreaking work and personal 
                journey illuminate the possibilities for transforming conflict through understanding, 
                compassion, and innovative approaches to peacebuilding.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dr. Bornman&apos;s experiences and insights form the narrative backbone of the documentary, 
                offering viewers a deeply personal yet universally relevant perspective on the nature 
                of conflict and the pathways to lasting peace.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Globe, label: "Global Perspective" },
                  { icon: Award, label: "Groundbreaking Work" },
                  { icon: Heart, label: "Compassionate Approach" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-[#dea01e]" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-500 text-lg font-medium">Dr. Bornman Portrait</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#dea01e]/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Theme Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dea01e]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Core Theme: Alternatives to Violence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unexpected Peace challenges conventional responses to conflict by presenting concrete, 
              practical alternatives to violence.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light italic mb-6 text-[#dea01e]">
                &quot;Amidst difference, scarcity, and injustice, fear divides. Anger boils. Conflict erupts.&quot;
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                This powerful observation frames the documentary&apos;s exploration of how we can transform 
                these natural human responses into opportunities for growth and understanding.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Production Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Production Company
              </h3>
              <div className="relative h-24 w-56 mb-4">
                <Image
                  src="/images/logo-dove-tale.png"
                  alt="Dove Tale Productions Logo"
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
              <p className="text-lg text-gray-600 font-medium">
                Dove Tale Productions LLC
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Dedicated to creating transformative media that inspires positive change
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#dea01e]/10 to-[#dea01e]/5 p-8 rounded-2xl shadow-lg border border-[#dea01e]/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Expected Release
              </h3>
              <div className="flex items-baseline gap-4">
                <p className="text-6xl font-bold text-[#dea01e]">
                  2025
                </p>
                <p className="text-xl text-gray-600 font-medium">
                  Coming Soon
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join our mailing list to be notified of premiere dates and screening locations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dea01e]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of the Journey
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay connected and be the first to know about screenings, release dates, and special events.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#dea01e] text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#c79018] transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Join Our Mailing List
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}