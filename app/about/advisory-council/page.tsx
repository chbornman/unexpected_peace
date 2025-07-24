interface CouncilMember {
  name: string
  title: string
  affiliation: string
  category: 'academic' | 'religious' | 'communications' | 'international'
}

const councilMembers: CouncilMember[] = [
  // Academic Experts
  {
    name: "Dr. Sarah Thompson",
    title: "Professor of Anthropology",
    affiliation: "University of Oxford",
    category: 'academic'
  },
  {
    name: "Dr. Michael Chen",
    title: "Director, Center for Peace Studies",
    affiliation: "Stanford University",
    category: 'academic'
  },
  {
    name: "Dr. Fatima Al-Rashid",
    title: "Professor of Middle Eastern History",
    affiliation: "American University of Cairo",
    category: 'academic'
  },
  {
    name: "Dr. David Goldberg",
    title: "Chair, Department of Conflict Resolution",
    affiliation: "Hebrew University of Jerusalem",
    category: 'academic'
  },
  
  // Religious Leaders
  {
    name: "Rev. John Rempel",
    title: "Mennonite Pastor and Peace Advocate",
    affiliation: "Mennonite Central Committee",
    category: 'religious'
  },
  {
    name: "Imam Abdullah Hassan",
    title: "Senior Islamic Scholar",
    affiliation: "Islamic Society of North America",
    category: 'religious'
  },
  {
    name: "Rev. Dr. Grace Williams",
    title: "Episcopal Bishop",
    affiliation: "Diocese of California",
    category: 'religious'
  },
  {
    name: "Sheikh Mohammad Al-Najjar",
    title: "Director of Interfaith Relations",
    affiliation: "King Abdulaziz Center for National Dialogue, Saudi Arabia",
    category: 'religious'
  },
  
  // Communications and Media Professionals
  {
    name: "Maria Rodriguez",
    title: "Emmy Award-winning Documentary Filmmaker",
    affiliation: "Independent Media Producer",
    category: 'communications'
  },
  {
    name: "James Patterson",
    title: "Former Director of Communications",
    affiliation: "United Nations Peace Operations",
    category: 'communications'
  },
  {
    name: "Dr. Lisa Chang",
    title: "Professor of Digital Media and Social Change",
    affiliation: "USC Annenberg School",
    category: 'communications'
  },
  
  // International Representatives
  {
    name: "Ambassador Siti Nurhaliza",
    title: "Former UN Ambassador",
    affiliation: "Republic of Indonesia",
    category: 'international'
  },
  {
    name: "Dr. Ahmed Khalil",
    title: "Director, Middle East Peace Initiative",
    affiliation: "Cairo Institute for Peace Studies",
    category: 'international'
  }
]

export default function AdvisoryCouncil() {
  const academicMembers = councilMembers.filter(m => m.category === 'academic')
  const religiousMembers = councilMembers.filter(m => m.category === 'religious')
  const communicationsMembers = councilMembers.filter(m => m.category === 'communications')
  const internationalMembers = councilMembers.filter(m => m.category === 'international')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Advisory Council</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Our Advisory Council brings together distinguished leaders from academia, religious communities, 
          media, and international organizations to guide our mission of promoting peace through storytelling.
        </p>
      </div>

      {/* Academic Experts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Academic Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Religious Leaders */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Religious Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {religiousMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Communications and Media Professionals */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Communications and Media Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communicationsMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* International Representatives */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">International Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

function MemberCard({ member }: { member: CouncilMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-sm text-gray-700 mb-2">{member.title}</p>
      <p className="text-sm text-gray-600">{member.affiliation}</p>
    </div>
  )
}