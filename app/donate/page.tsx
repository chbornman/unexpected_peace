import Link from 'next/link'

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Support the Documentary
          </h1>

          {/* Purpose Section */}
          <div className="space-y-6 mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              Your donation helps us expand the reach of "Unexpected Peace" and continue sharing these powerful stories of reconciliation and hope.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Your Support Will:
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Fund additional language releases including Bahasa, French, and Arabic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Support the documentation of more peacebuilding stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Help bring these transformative narratives to communities worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Donation Method */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Donate
            </h2>
            <p className="text-gray-700 mb-6">
              All donations are processed securely through Evangelical Media Ministries (EMM).
            </p>

            {/* Payment Options */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Payment Options Available:
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-gray-700">PayPal</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-gray-700">Credit Card</span>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-sm text-gray-700">
                <strong>Tax Information:</strong> For USA citizens, donations are tax-deductible. 
                Evangelical Media Ministries is a registered 501(c)(3) nonprofit organization.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link 
              href="http://emm.org/unexpectedpeace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              You will be redirected to EMM's secure donation page
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Questions about donations? Contact us at{' '}
            <a href="mailto:info@unexpectedpeace.com" className="text-blue-600 hover:underline">
              info@unexpectedpeace.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}