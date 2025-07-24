import ContactForm from '@/components/ContactForm'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about screenings, want to organize an event, or interested in supporting our mission? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>
            <ContactForm />
          </div>

          {/* Right Side - Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#dea01e]/10 p-3 rounded-lg">
                    <FaEnvelope className="h-6 w-6 text-[#dea01e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@unexpectedpeace.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#dea01e]/10 p-3 rounded-lg">
                    <FaClock className="h-6 w-6 text-[#dea01e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-gray-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#dea01e]/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="h-6 w-6 text-[#dea01e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Available for screenings worldwide</p>
                  </div>
                </div>
              </div>

              {/* Response Expectations */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#dea01e]/5 to-[#dea01e]/10 rounded-xl border border-[#dea01e]/20">
                <h4 className="font-semibold text-gray-900 mb-2">What to Expect</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized responses to all inquiries</li>
                  <li>• Information about upcoming screenings</li>
                  <li>• Support for organizing community events</li>
                  <li>• Resources for educational purposes</li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow our journey and stay updated with the latest news, screenings, and behind-the-scenes content.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/UnexpectedPeace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-transparent hover:border-[#dea01e] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <FaFacebook className="h-10 w-10 text-[#1877f2] mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900">Facebook</h4>
                    <p className="text-sm text-gray-600">@UnexpectedPeace</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/0 to-[#dea01e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://twitter.com/UnexpectedPeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-transparent hover:border-[#dea01e] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <FaTwitter className="h-10 w-10 text-[#1da1f2] mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900">Twitter</h4>
                    <p className="text-sm text-gray-600">@UnexpectedPeace</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/0 to-[#dea01e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/unexpectedpeace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-transparent hover:border-[#dea01e] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <FaInstagram className="h-10 w-10 text-[#e4405f] mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-sm text-gray-600">@unexpectedpeace</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/0 to-[#dea01e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.imdb.com/title/tt31471601/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-transparent hover:border-[#dea01e] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <SiImdb className="h-10 w-10 text-[#f5c518] mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900">IMDb</h4>
                    <p className="text-sm text-gray-600">Film Details</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/0 to-[#dea01e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            {/* Map Visual Element */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600 mb-6">
                  Unexpected Peace has been screened in communities around the world, 
                  bringing people together to explore pathways to peace.
                </p>
                <div className="flex items-center space-x-2 text-[#dea01e]">
                  <FaMapMarkerAlt className="h-5 w-5" />
                  <span className="font-semibold">50+ Screenings Worldwide</span>
                </div>
              </div>
              {/* Decorative Map Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#dea01e] rounded-full" />
                <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#dea01e] rounded-full" />
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#dea01e] rounded-full" />
                <div className="absolute top-20 right-10 w-16 h-16 bg-[#dea01e] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}