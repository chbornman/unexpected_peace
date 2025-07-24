"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  FilmIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  BuildingOfficeIcon, 
  UsersIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/10 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#dea01e]">Unexpected Peace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring humanity's profound capacity for forgiveness and nonviolence in the face of unimaginable tragedy
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Director's Introduction with Modern Card Design */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <motion.div variants={fadeIn} className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-[#dea01e]/10 rounded-full">
                <SparklesIcon className="w-8 h-8 text-[#dea01e]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Director's Vision</h2>
                <p className="text-lg text-gray-600">The genesis of a journey into forgiveness</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                When I graduated from college, I knew that at some point I wanted to make a documentary about humanity's 
                struggle to practice nonviolence. But what form would that take? Who would be the subjects? And what 
                would be the approach?
              </p>
              <p>
                The idea for this documentary came to me in 2006, when I read a front-page article in the New York Times 
                about the Amish school shooting at Nickel Mines, Pennsylvania. A man had entered a one-room schoolhouse 
                and shot ten young girls, killing five. The response of the Amish community was immediate and stunning: 
                they forgave the shooter and reached out in love to his family.
              </p>
              <p>
                This act of forgiveness captivated the world. But for me, it raised profound questions: How is such 
                forgiveness possible? What does it mean to forgive in the face of such horror? And what can we learn 
                from communities that choose the path of nonviolence?
              </p>
              <p className="text-[#dea01e] font-semibold pt-4 text-xl">
                – Jonathan Bornman, Director
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Three Story Explorations with Card Layout */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4 text-center">
            Three Stories of <span className="text-[#dea01e]">Unexpected Peace</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each story reveals the extraordinary power of forgiveness across different cultures and faiths
          </motion.p>
          
          {/* Story Cards */}
          <div className="space-y-8">
            {/* Amish School Shooting Card */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image
                    src="/images/documentary-still-2a.jpg"
                    alt="Amish community in Nickel Mines"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#dea01e]/10 rounded-full">
                      <HeartIcon className="w-6 h-6 text-[#dea01e]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">The Amish School Shooting</h3>
                  </div>
                  <p className="text-sm font-semibold text-[#dea01e] mb-4">Nickel Mines, Pennsylvania</p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      On October 2, 2006, a gunman entered an Amish schoolhouse and shot ten young girls, killing five. 
                      Within hours, members of the Amish community were visiting the shooter's family, offering forgiveness and comfort.
                    </p>
                    <p>
                      The Amish's immediate forgiveness shocked the world. How could they forgive so quickly? 
                      What enabled this community to respond with love rather than hate? Their response challenges 
                      our understanding of justice, revenge, and the possibility of peace.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Murder of Senegalese Muslims Card */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#dea01e]/10 rounded-full">
                      <HeartIcon className="w-6 h-6 text-[#dea01e]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Murder of Senegalese Muslims</h3>
                  </div>
                  <p className="text-sm font-semibold text-[#dea01e] mb-4">Harlem, New York</p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      In 2009, a deranged man entered a convenience store and brutally murdered two Senegalese Muslim immigrants. 
                      The families of the victims, guided by their Islamic faith and West African traditions, chose to forgive the killer.
                    </p>
                    <p>
                      Their decision to forgive was rooted in both religious conviction and cultural wisdom. How did 
                      their faith sustain them through grief? What role did their community play in supporting this 
                      choice? Their story reveals the deep connections between faith, culture, and forgiveness.
                    </p>
                  </div>
                </div>
                <div className="relative h-80 md:h-full overflow-hidden order-1 md:order-2">
                  <Image
                    src="/images/documentary-still-5a.jpg"
                    alt="Senegalese Muslim community in Harlem"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent md:hidden"></div>
                </div>
              </div>
            </motion.div>

            {/* Muslim-Christian Conflict Card */}
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image
                    src="/images/documentary-still-7a.jpg"
                    alt="Muslim-Christian dialogue in Solo, Indonesia"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#dea01e]/10 rounded-full">
                      <HeartIcon className="w-6 h-6 text-[#dea01e]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Muslim-Christian Conflict</h3>
                  </div>
                  <p className="text-sm font-semibold text-[#dea01e] mb-4">Solo, Indonesia</p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      In a city torn by religious violence between Muslims and Christians, individuals from both communities 
                      are working to build bridges of understanding. Former enemies are becoming friends, choosing dialogue over division.
                    </p>
                    <p>
                      In the midst of ongoing tensions, these peacemakers show that reconciliation is possible. 
                      How do they overcome years of mistrust? What motivates them to reach across religious divides? 
                      Their courage offers hope for conflict resolution worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Questions Section with Modern Design */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#dea01e]/5 to-[#dea01e]/10 rounded-2xl p-8 md:p-12 border border-[#dea01e]/20">
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-full shadow-lg">
                <QuestionMarkCircleIcon className="w-8 h-8 text-[#dea01e]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Core Questions We Explore</h2>
            </motion.div>
            <motion.div variants={staggerChildren} className="grid md:grid-cols-2 gap-6">
              {[
                "What makes forgiveness possible in the face of unspeakable violence?",
                "How do communities cultivate cultures of peace and nonviolence?",
                "What role do faith traditions play in shaping responses to conflict?",
                "Can the wisdom of these communities help heal our divided world?"
              ].map((question, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    {question}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Modern Grid Navigation */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="border-t pt-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8 text-center">
            Explore <span className="text-[#dea01e]">Further</span>
          </motion.h2>
          <motion.nav 
            variants={staggerChildren}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { href: "/about/the-film", icon: FilmIcon, title: "The Film", desc: "Details about the documentary" },
              { href: "/about/meet-the-filmmakers", icon: UserGroupIcon, title: "Meet the Filmmakers", desc: "About the creative team" },
              { href: "/about/the-story", icon: BookOpenIcon, title: "The Story", desc: "Behind the scenes" },
              { href: "/about/partners", icon: BuildingOfficeIcon, title: "Partners", desc: "Our supporting organizations" },
              { href: "/about/advisory-council", icon: UsersIcon, title: "Advisory Council", desc: "Expert guidance and support" }
            ].map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.href} variants={fadeIn}>
                  <Link 
                    href={item.href} 
                    className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#dea01e]/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#dea01e]/10 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#dea01e] transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-[#dea01e] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-[#dea01e] transform group-hover:translate-x-1 transition-all duration-300 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>
        </motion.section>
      </div>
    </>
  )
}