import Link from 'next/link'

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Emotional Appeal */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dea01e]/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Lives Through
              <span className="block text-[#dea01e]">Stories of Peace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your generosity brings hope to conflict-torn communities and shares powerful narratives 
              of reconciliation that inspire lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#donate-now"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#dea01e] rounded-full hover:bg-[#c4901a] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Make Your Impact Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-full hover:border-[#dea01e] hover:text-[#dea01e] transition-all duration-200">
                Watch the Trailer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Your Impact So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#dea01e] mb-2">250K+</div>
              <p className="text-gray-700 font-medium">Lives Touched</p>
              <p className="text-sm text-gray-600 mt-1">Through screenings worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#dea01e] mb-2">47</div>
              <p className="text-gray-700 font-medium">Countries Reached</p>
              <p className="text-sm text-gray-600 mt-1">Spreading messages of hope</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#dea01e] mb-2">12</div>
              <p className="text-gray-700 font-medium">Languages</p>
              <p className="text-sm text-gray-600 mt-1">Making peace accessible</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#dea01e] mb-2">100%</div>
              <p className="text-gray-700 font-medium">Goes to Mission</p>
              <p className="text-sm text-gray-600 mt-1">Every dollar makes a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar / Funding Goals */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#dea01e]/10 to-[#dea01e]/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2025 Language Release Campaign</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>$85,000 raised</span>
                <span>Goal: $150,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-[#dea01e] to-[#c4901a] h-4 rounded-full transition-all duration-1000" style={{width: '57%'}}></div>
              </div>
            </div>
            <p className="text-gray-700">
              Help us reach communities in their native languages: Bahasa, French, Arabic, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section id="donate-now" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Choose Your Impact Level
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Every contribution, regardless of size, creates ripples of peace in communities worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Peacemaker Tier */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Peacemaker</h3>
                <div className="text-3xl font-bold">$50</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sponsor 5 community screenings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Digital thank you certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Monthly impact updates</span>
                  </li>
                </ul>
                <Link 
                  href="http://emm.org/unexpectedpeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200 font-semibold"
                >
                  Donate $50
                </Link>
              </div>
            </div>

            {/* Ambassador Tier - Featured */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-[#dea01e] relative">
              <div className="absolute top-0 right-0 bg-[#dea01e] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="bg-gradient-to-r from-[#dea01e] to-[#c4901a] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Ambassador</h3>
                <div className="text-3xl font-bold">$100</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Fund translation into 1 new language</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Name in film credits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Exclusive behind-the-scenes content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">All Peacemaker benefits</span>
                  </li>
                </ul>
                <Link 
                  href="http://emm.org/unexpectedpeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 text-white bg-[#dea01e] rounded-full hover:bg-[#c4901a] transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Donate $100
                </Link>
              </div>
            </div>

            {/* Champion Tier */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Champion</h3>
                <div className="text-3xl font-bold">$500+</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sponsor an entire community program</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Personal thank you from directors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Limited edition documentary poster</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">All previous tier benefits</span>
                  </li>
                </ul>
                <Link 
                  href="http://emm.org/unexpectedpeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-200 font-semibold"
                >
                  Donate $500+
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Amount Option */}
          <div className="text-center">
            <p className="text-gray-700 mb-4">Want to give a different amount?</p>
            <Link 
              href="http://emm.org/unexpectedpeace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-[#dea01e] bg-white border-2 border-[#dea01e] rounded-full hover:bg-[#dea01e] hover:text-white transition-all duration-200 font-semibold"
            >
              Choose Custom Amount
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stories of Impact</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "This documentary changed how our community views reconciliation. The screening 
                    brought together people who hadn't spoken in years."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#dea01e] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      RN
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Rev. Nancy</p>
                      <p className="text-sm text-gray-600">Community Leader, Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Supporting this project means investing in real change. I've seen firsthand 
                    how these stories transform hearts and communities."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#dea01e] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      JM
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">John Mitchell</p>
                      <p className="text-sm text-gray-600">Long-time Supporter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Tax Info */}
            <div>
              <div className="bg-gradient-to-br from-[#dea01e]/20 to-[#dea01e]/10 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-[#dea01e] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tax-Deductible Donations
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>For USA Citizens:</strong> Your donation is fully tax-deductible.
                </p>
                <p className="text-gray-700">
                  Evangelical Media Ministries is a registered 501(c)(3) nonprofit organization. 
                  Tax ID: 36-2588970
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure Payment Processing
                </h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.01 10.207h-.944l-.515 2.648h.838c.767 0 1.268-.41 1.268-1.157 0-.895-.651-1.491-1.647-1.491zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.615 14l-.132-.584c-.415.228-.916.399-1.442.399-1.131 0-1.96-.652-1.96-1.544 0-1.053.88-1.653 2.464-1.84.394-.046.551-.097.551-.274 0-.199-.155-.291-.469-.291-.715 0-1.262.229-1.753.486l-.264-1.198c.574-.257 1.278-.473 2.103-.473 1.272 0 1.905.522 1.905 1.593 0 .903-.57 1.395-1.93 1.618-.516.064-.714.165-.714.342 0 .173.184.267.445.267.499 0 .935-.136 1.295-.328L10.62 16zm4.42-.924h-1.311c-.09 0-.166-.065-.184-.153l-.048-.251-.076.102c-.236.313-.63.418-1.065.418-.994 0-1.843-.724-1.955-1.74-.061-.506.131-1.013.5-1.316.34-.279.776-.395 1.227-.395.435 0 .882.134 1.091.414l.066.09-.011-.058c0-.237.163-.42.389-.42h1.186c.143 0 .265.095.294.232l.551 3.424c.021.137-.09.264-.221.264h-1.313v.01zm3.674-.037h-1.316c-.104 0-.189-.077-.198-.179l-.799-5.188a.196.196 0 01.189-.233h1.252c.104 0 .189.077.197.179l.801 5.189a.197.197 0 01-.19.232h.064z"/>
                    </svg>
                    <span className="text-sm">PayPal</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 10-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 000-1.41c-.39-.39-1.03-.39-1.42 0z"/>
                    </svg>
                    <span className="text-sm">Credit Card</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">SSL Encrypted</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Your payment information is processed securely through Evangelical Media Ministries' 
                  certified payment gateway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#dea01e] to-[#c4901a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Every Story of Peace Begins With You
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in building bridges where walls once stood. Your generosity today 
            creates tomorrow's reconciliation stories.
          </p>
          <Link 
            href="http://emm.org/unexpectedpeace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 text-lg font-bold text-[#dea01e] bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Make Your Gift Now
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>
          <p className="mt-6 text-white/80 text-sm">
            Questions? Contact us at{' '}
            <a href="mailto:info@unexpectedpeace.com" className="text-white underline hover:no-underline">
              info@unexpectedpeace.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}