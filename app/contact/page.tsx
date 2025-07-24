import ContactForm from '@/components/ContactForm'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with the Unexpected Peace team. We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Social Media Links Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Connect with us</h2>
            <p className="text-gray-600 mb-8">
              Follow Unexpected Peace on social media to stay updated with the latest news, 
              screenings, and behind-the-scenes content.
            </p>
            
            <div className="space-y-6">
              <a
                href="https://www.facebook.com/UnexpectedPeace/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#dea01e] transition group"
              >
                <FaFacebook className="h-8 w-8 text-[#1877f2] group-hover:scale-110 transition" />
                <div>
                  <h3 className="font-medium">Facebook</h3>
                  <p className="text-sm text-gray-600">@UnexpectedPeace</p>
                </div>
              </a>

              <a
                href="https://twitter.com/UnexpectedPeace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#dea01e] transition group"
              >
                <FaTwitter className="h-8 w-8 text-[#1da1f2] group-hover:scale-110 transition" />
                <div>
                  <h3 className="font-medium">Twitter</h3>
                  <p className="text-sm text-gray-600">@UnexpectedPeace</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/unexpectedpeace/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#dea01e] transition group"
              >
                <FaInstagram className="h-8 w-8 text-[#e4405f] group-hover:scale-110 transition" />
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-sm text-gray-600">@unexpectedpeace</p>
                </div>
              </a>

              <a
                href="https://www.imdb.com/title/tt31471601/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-[#dea01e] transition group"
              >
                <SiImdb className="h-8 w-8 text-[#f5c518] group-hover:scale-110 transition" />
                <div>
                  <h3 className="font-medium">IMDb</h3>
                  <p className="text-sm text-gray-600">Unexpected Peace (2024)</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">General Inquiries</h3>
              <p className="text-gray-600">
                For press, screening requests, or other inquiries, please use the contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}