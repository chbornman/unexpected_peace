import Image from "next/image";

export default function MeetTheFilmmakers() {
  const filmmakers = [
    {
      name: "Dr. Jonathan Bornman",
      role: "Social Anthropologist / Producer",
      bio: "Dr. Bornman brings a unique perspective to filmmaking with his Mennonite background and PhD in Social Anthropology. His expertise in nonviolence and Christian-Muslim relations has shaped the narrative approach of Unexpected Peace, offering deep insights into cross-cultural understanding and conflict resolution.",
      expertise: ["Social Anthropology", "Nonviolence Studies", "Christian-Muslim Relations", "Documentary Production"],
      image: "/images/filmmakers-bornman.jpg"
    },
    {
      name: "Ehab Assal",
      role: "Cinematographer / Producer",
      bio: "With over 30 years of experience in filmmaking, Ehab Assal is a Palestinian cinematographer whose visual storytelling has captivated audiences worldwide. His work on the Oscar-nominated film 'Omar' and 'The Insider' demonstrates his ability to capture intimate human moments within larger political contexts.",
      expertise: ["Cinematography", "Documentary Film", "Visual Storytelling", "Cross-cultural Narratives"],
      image: "/images/filmmakers-assal.jpg"
    },
    {
      name: "D. Michael Hostetler",
      role: "Director / Producer",
      bio: "As a communications consultant specializing in cross-cultural storytelling, D. Michael Hostetler brings a strategic vision to documentary filmmaking. His directorial approach focuses on building bridges between diverse communities through authentic narrative and careful attention to cultural nuance.",
      expertise: ["Film Direction", "Cross-cultural Communication", "Story Development", "Documentary Production"],
      image: "/images/filmmakers-hostetler.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Meet the Filmmakers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              The creative minds behind Unexpected Peace bring together decades of experience 
              in documentary filmmaking, anthropology, and cross-cultural storytelling.
            </p>
          </div>

          {/* Filmmakers Grid */}
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {filmmakers.map((filmmaker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Filmmaker Portrait */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src={filmmaker.image}
                    alt={`${filmmaker.name} - ${filmmaker.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {filmmaker.name}
                  </h2>
                  <p className="text-lg text-[#dea01e] font-medium mb-4">
                    {filmmaker.role}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filmmaker.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {filmmaker.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            A Collaborative Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Together, our team brings a unique blend of academic insight, artistic vision, 
            and cultural sensitivity to tell stories that transcend boundaries. With backgrounds 
            spanning continents and faiths, we unite in our commitment to showcasing the 
            transformative power of peace and understanding.
          </p>
          <blockquote className="text-xl sm:text-2xl font-light italic text-gray-700">
            "Our diverse perspectives allow us to capture the universal human experiences 
            that connect us all, regardless of our differences."
          </blockquote>
        </div>
      </section>
    </>
  );
}