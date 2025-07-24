import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12 text-center">About Unexpected Peace</h1>
      
      {/* Introduction Section */}
      <section className="mb-16">
        <p className="text-lg leading-relaxed mb-6">
          When I graduated from college, I knew that at some point I wanted to make a documentary about humanity&apos;s 
          struggle to practice nonviolence. But what form would that take? Who would be the subjects? And what 
          would be the approach?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The idea for this documentary came to me in 2006, when I read a front-page article in the New York Times 
          about the Amish school shooting at Nickel Mines, Pennsylvania. A man had entered a one-room schoolhouse 
          and shot ten young girls, killing five. The response of the Amish community was immediate and stunning: 
          they forgave the shooter and reached out in love to his family.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This act of forgiveness captivated the world. But for me, it raised profound questions: How is such 
          forgiveness possible? What does it mean to forgive in the face of such horror? And what can we learn 
          from communities that choose the path of nonviolence?
        </p>
        <p className="text-lg leading-relaxed">
          – Jonathan Bornman, Director
        </p>
      </section>

      {/* Three Story Explorations */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Three Stories of Unexpected Peace</h2>
        
        {/* Amish School Shooting */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">The Amish School Shooting</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-gray-700 mb-4">
                <strong>Nickel Mines, Pennsylvania</strong> – On October 2, 2006, a gunman entered an Amish 
                schoolhouse and shot ten young girls, killing five. Within hours, members of the Amish community 
                were visiting the shooter&apos;s family, offering forgiveness and comfort.
              </p>
              <p className="text-gray-700">
                The Amish&apos;s immediate forgiveness shocked the world. How could they forgive so quickly? 
                What enabled this community to respond with love rather than hate? Their response challenges 
                our understanding of justice, revenge, and the possibility of peace.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/documentary-still-2a.jpg"
                alt="Amish community in Nickel Mines"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Murder of Senegalese Muslims */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Murder of Senegalese Muslims</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="relative h-64 rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/images/documentary-still-5a.jpg"
                alt="Senegalese Muslim community in Harlem"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 mb-4">
                <strong>Harlem, New York</strong> – In 2009, a deranged man entered a convenience store and 
                brutally murdered two Senegalese Muslim immigrants. The families of the victims, guided by their 
                Islamic faith and West African traditions, chose to forgive the killer.
              </p>
              <p className="text-gray-700">
                Their decision to forgive was rooted in both religious conviction and cultural wisdom. How did 
                their faith sustain them through grief? What role did their community play in supporting this 
                choice? Their story reveals the deep connections between faith, culture, and forgiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Muslim-Christian Conflict */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Muslim-Christian Conflict</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-gray-700 mb-4">
                <strong>Solo, Indonesia</strong> – In a city torn by religious violence between Muslims and 
                Christians, individuals from both communities are working to build bridges of understanding. 
                Former enemies are becoming friends, choosing dialogue over division.
              </p>
              <p className="text-gray-700">
                In the midst of ongoing tensions, these peacemakers show that reconciliation is possible. 
                How do they overcome years of mistrust? What motivates them to reach across religious divides? 
                Their courage offers hope for conflict resolution worldwide.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/documentary-still-7a.jpg"
                alt="Muslim-Christian dialogue in Solo, Indonesia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Questions Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Core Questions We Explore</h2>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>What makes forgiveness possible in the face of unspeakable violence?</strong>
          </p>
          <p className="text-lg">
            <strong>How do communities cultivate cultures of peace and nonviolence?</strong>
          </p>
          <p className="text-lg">
            <strong>What role do faith traditions play in shaping responses to conflict?</strong>
          </p>
          <p className="text-lg">
            <strong>Can the wisdom of these communities help heal our divided world?</strong>
          </p>
        </div>
      </section>

      {/* Sub-navigation */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Learn More</h2>
        <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            href="/about/the-film" 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">The Film</h3>
            <p className="text-sm text-gray-600">Details about the documentary</p>
          </Link>
          <Link 
            href="/about/meet-the-filmmakers" 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Meet the Filmmakers</h3>
            <p className="text-sm text-gray-600">About the creative team</p>
          </Link>
          <Link 
            href="/about/the-story" 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">The Story</h3>
            <p className="text-sm text-gray-600">Behind the scenes</p>
          </Link>
          <Link 
            href="/about/partners" 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Partners</h3>
            <p className="text-sm text-gray-600">Our supporting organizations</p>
          </Link>
          <Link 
            href="/about/advisory-council" 
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-1">Advisory Council</h3>
            <p className="text-sm text-gray-600">Expert guidance and support</p>
          </Link>
        </nav>
      </section>
    </div>
  )
}