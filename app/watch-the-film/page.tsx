export default function WatchTheFilm() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main heading and intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Watch the Film
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Peace is a moment when we stop long enough to see and recognize the humanity 
            in others. Unexpected Peace is a film about looking beyond differences and 
            finding connection. Host a screening to spark conversations about peace in 
            your community.
          </p>
        </div>

        {/* Rental Information Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Individual Viewing
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Watch Unexpected Peace from the comfort of your home through Kinema.com. 
            Perfect for personal viewing or small family gatherings.
          </p>
          <div className="text-center">
            <a
              href="https://www.kinema.com/films/unexpected-peace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#dea01e] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#c89018] transition-colors duration-200"
            >
              Watch Now Rental
            </a>
          </div>
        </div>

        {/* Community Screening Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Community Screening Options
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Virtual Screening
              </h3>
              <p className="text-gray-700">
                Host an online screening for your community. Perfect for remote 
                groups and international audiences.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                On-Demand Screening
              </h3>
              <p className="text-gray-700">
                Set up a screening window where participants can watch at their 
                convenience within a specified timeframe.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                In-Person Screening
              </h3>
              <p className="text-gray-700">
                Bring your community together for a traditional theater or venue 
                screening experience.
              </p>
            </div>
          </div>
        </div>

        {/* 10-Step Screening Setup Guide */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            How to Host a Screening: 10 Simple Steps
          </h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Choose Your Screening Type
                </h3>
                <p className="text-gray-700">
                  Decide whether you want to host a virtual, on-demand, or in-person screening 
                  based on your community's needs and location.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Set Your Date and Time
                </h3>
                <p className="text-gray-700">
                  Pick a date that works for your community. Consider time zones for virtual 
                  screenings and venue availability for in-person events.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Register Your Screening
                </h3>
                <p className="text-gray-700">
                  Contact us to register your screening event. We'll provide you with promotional 
                  materials and screening guidelines.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure Your Venue or Platform
                </h3>
                <p className="text-gray-700">
                  Book your physical venue or set up your virtual screening platform. Test 
                  technology in advance for online events.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Promote Your Event
                </h3>
                <p className="text-gray-700">
                  Use the promotional materials we provide to spread the word through social 
                  media, email, and community networks.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Manage Registrations
                </h3>
                <p className="text-gray-700">
                  Set up a registration system to track attendance and communicate with 
                  participants before the event.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Prepare Discussion Questions
                </h3>
                <p className="text-gray-700">
                  Download our discussion guide to facilitate meaningful conversations after 
                  the screening about peace and understanding.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Host Your Screening
                </h3>
                <p className="text-gray-700">
                  Welcome your participants, introduce the film, and create a comfortable 
                  environment for viewing and discussion.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                9
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Facilitate Post-Screening Discussion
                </h3>
                <p className="text-gray-700">
                  Lead a thoughtful conversation using the discussion guide, encouraging 
                  participants to share their reflections and insights.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 bg-[#dea01e] text-white rounded-full flex items-center justify-center font-bold">
                10
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Share Your Experience
                </h3>
                <p className="text-gray-700">
                  Send us feedback about your screening and share photos or testimonials. 
                  Your experience helps inspire others to host screenings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Host a Screening?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us for screening licenses, promotional materials, and support.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#dea01e] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#c89018] transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}