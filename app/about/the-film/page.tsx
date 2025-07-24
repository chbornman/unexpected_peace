import Image from "next/image";

export default function TheFilm() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        The Film
      </h1>

      {/* Film Synopsis Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          About the Documentary
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Unexpected Peace is a feature-length documentary that explores profound alternatives to violence 
          in the face of conflict. Through intimate storytelling and compelling interviews, the film 
          presents a transformative vision for addressing the challenges that divide our communities and world.
        </p>
      </section>

      {/* Central Figure Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Dr. Bornman: The Central Figure
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Placeholder for portrait */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
              <span className="text-gray-500 text-sm">Dr. Bornman Portrait</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At the heart of Unexpected Peace is Dr. Bornman, whose groundbreaking work and personal 
              journey illuminate the possibilities for transforming conflict through understanding, 
              compassion, and innovative approaches to peacebuilding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Bornman's experiences and insights form the narrative backbone of the documentary, 
              offering viewers a deeply personal yet universally relevant perspective on the nature 
              of conflict and the pathways to lasting peace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Theme Section */}
      <section className="mb-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Core Theme: Alternatives to Violence
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Unexpected Peace challenges conventional responses to conflict by presenting concrete, 
          practical alternatives to violence. The film demonstrates how communities and individuals 
          can break cycles of retaliation and build bridges across even the deepest divides.
        </p>
        
        {/* Key Quote */}
        <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-white rounded-r-lg">
          <p className="text-xl italic text-gray-800 font-medium">
            "Amidst difference, scarcity, and injustice, fear divides. Anger boils. Conflict erupts."
          </p>
          <p className="text-base text-gray-600 mt-3">
            This powerful observation frames the documentary's exploration of how we can transform 
            these natural human responses into opportunities for growth and understanding.
          </p>
        </blockquote>
      </section>

      {/* Production Info Section */}
      <section className="border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Production Company
            </h3>
            {/* Dove Tale Productions logo */}
            <div className="relative h-20 w-48 mx-auto md:mx-0 mb-2">
              <Image
                src="/images/logo-dove-tale.png"
                alt="Dove Tale Productions Logo"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
            <p className="text-gray-700">
              Dove Tale Productions LLC
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Expected Release
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              2025
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center bg-blue-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Stay Connected
        </h3>
        <p className="text-gray-700 mb-6">
          Be the first to know about screenings, release dates, and special events.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Join Our Mailing List
        </button>
      </section>
    </div>
  )
}