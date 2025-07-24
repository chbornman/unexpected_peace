'use client'

import Link from "next/link"
import { PlayIcon, TicketIcon, UsersIcon, GlobeAltIcon, CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function WatchTheFilm() {
  const screeningSteps = [
    {
      number: "1",
      title: "Choose Your Screening Type",
      description: "Decide between virtual, on-demand, or in-person screening based on your community's needs."
    },
    {
      number: "2",
      title: "Set Your Date and Time",
      description: "Select a date that works for your group. Consider time zones for virtual events."
    },
    {
      number: "3",
      title: "Register Your Screening",
      description: "Complete the registration process to secure your screening license."
    },
    {
      number: "4",
      title: "Secure Your Venue or Platform",
      description: "Book a physical location or set up your virtual meeting platform."
    },
    {
      number: "5",
      title: "Promote Your Event",
      description: "Use our promotional materials to spread the word in your community."
    },
    {
      number: "6",
      title: "Manage Registrations",
      description: "Track attendees and send reminder communications."
    },
    {
      number: "7",
      title: "Prepare Discussion Questions",
      description: "Download our discussion guide to facilitate meaningful conversations."
    },
    {
      number: "8",
      title: "Host Your Screening",
      description: "Welcome your guests and create a space for reflection and dialogue."
    },
    {
      number: "9",
      title: "Facilitate Post-Screening Discussion",
      description: "Guide your group through processing the film's powerful messages."
    },
    {
      number: "10",
      title: "Share Your Experience",
      description: "Tell us about your screening and how it impacted your community."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dea01e' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Watch the Film
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 italic">
            "Peace starts with recognizing the humanity of the other"
          </p>
        </div>
      </section>

      {/* Rental Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Stream Now on Kinema
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience Unexpected Peace from the comfort of your home. Available for individual viewing 
                through our partner platform Kinema.com. Your rental supports the ongoing work of documenting 
                stories of forgiveness and reconciliation worldwide.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">48-hour viewing window</p>
                    <p className="text-gray-600 text-sm">Watch as many times as you want within 48 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">HD quality streaming</p>
                    <p className="text-gray-600 text-sm">Crystal clear video and audio for the best experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Closed captions available</p>
                    <p className="text-gray-600 text-sm">English subtitles for accessibility</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://www.kinema.com/unexpected-peace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#dea01e] to-[#f5b942] text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <TicketIcon className="w-5 h-5 mr-2" />
                Rent Now on Kinema
              </a>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group relative">
                    <div className="absolute inset-0 bg-white rounded-full opacity-20 scale-110 animate-ping"></div>
                    <div className="relative bg-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-200">
                      <PlayIcon className="w-12 h-12 text-gray-900" />
                    </div>
                  </button>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">Click to watch trailer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Screening Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Host a Community Screening
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bring Unexpected Peace to your community. Choose the screening format that works best for your group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Virtual Screening */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mb-6">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Virtual Screening</h3>
              <p className="text-gray-600 mb-6">
                Perfect for geographically dispersed groups. Host online via Zoom, Teams, or other platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Live streaming option
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Interactive Q&A possible
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Global participation
                </li>
              </ul>
            </div>

            {/* On-Demand Screening */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mb-6">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Demand Screening</h3>
              <p className="text-gray-600 mb-6">
                Flexible viewing window allows participants to watch at their convenience within a set timeframe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  7-day viewing window
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Watch at your own pace
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Follow-up discussion
                </li>
              </ul>
            </div>

            {/* In-Person Screening */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center mb-6">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">In-Person Screening</h3>
              <p className="text-gray-600 mb-6">
                Traditional theater or venue screening for maximum community impact and shared experience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Theater experience
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Immediate discussion
                </li>
                <li className="flex items-start">
                  <span className="text-[#dea01e] mr-2">•</span>
                  Community building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Step Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How to Host a Screening
            </h2>
            <p className="text-xl text-gray-600">
              Follow our simple 10-step guide to create a meaningful experience for your community.
            </p>
          </div>

          <div className="space-y-6">
            {screeningSteps.map((step, index) => (
              <div key={index} className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dea01e] to-[#f5b942] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-200">
                    {step.number}
                  </div>
                  {index < screeningSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mx-6 mt-2"></div>
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ChatBubbleLeftRightIcon className="w-16 h-16 mx-auto mb-6 text-[#dea01e]" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Host a Screening?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            We're here to support you every step of the way. Contact us for screening packages, 
            promotional materials, and discussion guides.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#dea01e] to-[#f5b942] text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}