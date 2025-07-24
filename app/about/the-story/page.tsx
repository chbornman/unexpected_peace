'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Heart, Users, Sparkles, Quote, Calendar, Globe, Star } from 'lucide-react'

export default function TheStory() {
  const [, setActiveStory] = useState<string | null>(null)

  const stories = [
    {
      id: 'nickel-mines',
      location: 'Nickel Mines, Pennsylvania',
      country: 'USA',
      date: 'October 2, 2006',
      image: '/images/documentary-still-7a.jpg',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-600',
      theme: 'Radical Forgiveness',
      quote: "We forgive you.",
      quoteSpeaker: "Amish neighbor to the shooter's family"
    },
    {
      id: 'harlem',
      location: 'Harlem, New York',
      country: 'USA',
      date: 'Present Day',
      image: '/images/documentary-still-5a.jpg',
      icon: <Users className="w-5 h-5" />,
      color: 'from-green-500 to-teal-600',
      theme: 'Nonviolent Resistance',
      quote: "Violence only begets more violence.",
      quoteSpeaker: "Oustaz Mbay"
    },
    {
      id: 'solo',
      location: 'Solo, Indonesia',
      country: 'Indonesia',
      date: 'Ongoing',
      image: '/images/documentary-still-2a.jpg',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      theme: 'Interfaith Bridges',
      quote: "We realized that our fears were based on ignorance.",
      quoteSpeaker: "Pastor Paulus Hartono"
    }
  ]

  const themes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Forgiveness',
      description: 'Breaking cycles of violence through radical grace'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Healing together through shared humanity'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Transformation',
      description: 'Turning tragedy into opportunity for growth'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Unity',
      description: 'Building bridges across faith and culture'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/documentary-still-1.jpg"
          alt="Documentary still"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-16 h-16 mx-auto mb-6 text-[#dea01e]" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Three Stories. One Truth.
            </h1>
            <p className="text-xl md:text-2xl font-light italic">
              &quot;In our darkest moments, we discover our greatest capacity for light.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline/Location Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Stories from Around the World
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setActiveStory(story.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={story.location}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30`}>
                        {story.icon}
                      </div>
                      <div className="flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {story.date}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-[#dea01e]" />
                        <span className="text-sm font-medium">{story.country}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{story.location}</h3>
                      <p className="text-[#dea01e] font-semibold">{story.theme}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Story Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Nickel Mines Story */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                  <div>
                    <h3 className="text-4xl font-bold mb-2">Nickel Mines</h3>
                    <p className="text-xl text-gray-600">The Amish Response to Tragedy</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  On October 2, 2006, a devastating shooting occurred at the West Nickel Mines School, 
                  an Amish one-room schoolhouse in Lancaster County, Pennsylvania.
                </p>
                
                {/* Key Person Callout */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#dea01e]">
                  <div className="flex items-start gap-4">
                    <Star className="w-8 h-8 text-[#dea01e] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Marie Roberts</h4>
                      <p className="text-gray-700 italic">
                        &quot;He held out his hand to my husband and said, &apos;We forgive you.&apos; 
                        It was the most powerful moment of grace I have ever experienced.&quot;
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Mother of the shooter</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  The Amish community&apos;s response went beyond words. They attended the shooter&apos;s funeral, 
                  established a fund for his family, and consistently demonstrated that forgiveness is not 
                  just a concept but a lived practice.
                </p>
              </div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/documentary-still-7b.jpg"
                    alt="Nickel Mines community"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">
                      A community choosing healing over hatred
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Harlem Story */}
          <motion.div 
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/documentary-still-5b.jpg"
                    alt="Harlem community gathering"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">
                      Peaceful resistance transforming a neighborhood
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-green-500 to-teal-600 rounded-full" />
                  <div>
                    <h3 className="text-4xl font-bold mb-2">Harlem</h3>
                    <p className="text-xl text-gray-600">The Power of Nonviolent Resistance</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  In the heart of Harlem, New York, a remarkable story of nonviolent resistance unfolded 
                  involving the Murid Muslim community.
                </p>
                
                {/* Key Person Callout */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#dea01e]">
                  <div className="flex items-start gap-4">
                    <Star className="w-8 h-8 text-[#dea01e] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Oustaz Mbay</h4>
                      <p className="text-gray-700 italic">
                        &quot;Violence only begets more violence. Our Prophet, peace be upon him, 
                        showed us that true strength lies in restraint.&quot;
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Religious leader, Murid community</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  When their mosque was vandalized, instead of seeking revenge, they organized a 
                  community cleanup where people of all backgrounds worked side by side.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solo Story */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
                  <div>
                    <h3 className="text-4xl font-bold mb-2">Solo, Indonesia</h3>
                    <p className="text-xl text-gray-600">Building Bridges Between Faiths</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  In Solo (Surakarta), Indonesia, a city that had experienced significant religious tensions, 
                  an unexpected partnership emerged between Christian and Muslim leaders.
                </p>
                
                {/* Key People Callout */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#dea01e]">
                  <div className="flex items-start gap-4">
                    <Star className="w-8 h-8 text-[#dea01e] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Pastor Paulus Hartono & Commander Yanni Rusmanto</h4>
                      <p className="text-gray-700 italic">
                        &quot;We discovered how much we had in common. We both wanted peace for our children, 
                        prosperity for our communities, and the freedom to worship.&quot;
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Christian pastor and Muslim military officer</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Together, they established the Solo Peace Forum, bringing together religious leaders, 
                  youth groups, and civil society organizations.
                </p>
              </div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/documentary-still-2b.jpg"
                    alt="Interfaith cooperation in Solo"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">
                      Former enemies becoming partners in peace
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Common Threads</h2>
            <p className="text-xl text-gray-600">
              Universal themes that unite these extraordinary stories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 p-8 rounded-2xl text-center group cursor-pointer transition-all hover:shadow-xl"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#dea01e] to-orange-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
                <p className="text-gray-600">{theme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Closing Quote */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-16 h-16 mx-auto mb-8 text-[#dea01e]" />
            <p className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8">
              &quot;These are not just stories of exceptional individuals but examples of what becomes possible 
              when communities commit to the difficult but transformative work of peace.&quot;
            </p>
            <div className="w-24 h-1 bg-[#dea01e] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}