import Image from "next/image";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are grateful for the support and collaboration of these organizations 
            in bringing Unexpected Peace to life.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Eastern Mennonite Missions Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-8">
              {/* EMM Logo */}
              <div className="relative h-32 w-full rounded-lg mb-6">
                <Image
                  src="/images/logo-emm.png"
                  alt="Eastern Mennonite Missions Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Partner Info */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Eastern Mennonite Missions
              </h2>
              <p className="text-gray-600 mb-4">
                A non-profit organization supporting the documentary through their commitment 
                to peace-building and reconciliation efforts worldwide.
              </p>
              
              {/* Website Link */}
              <a 
                href="https://www.emm.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#dea01e] hover:text-[#c48a08] font-medium"
              >
                Visit Website
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Peace and Reconciliation Network Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-8">
              {/* PRN Logo */}
              <div className="relative h-32 w-full rounded-lg mb-6">
                <Image
                  src="/images/logo-prn.png"
                  alt="Peace and Reconciliation Network Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Partner Info */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Peace and Reconciliation Network
              </h2>
              <p className="text-gray-600 mb-4">
                Part of the World Evangelical Alliance, PRN is dedicated to promoting 
                peace and reconciliation as integral aspects of the gospel message.
              </p>
              
              {/* Website Link */}
              <a 
                href="https://www.reconciledworld.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#dea01e] hover:text-[#c48a08] font-medium"
              >
                Visit Website
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interested in Partnering?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              If your organization shares our vision for peace and reconciliation, 
              we'd love to explore partnership opportunities.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#dea01e] text-white px-6 py-3 rounded-md font-medium hover:bg-[#c48a08] transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}