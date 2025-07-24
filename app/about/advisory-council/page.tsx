import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  MegaphoneIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'

interface CouncilMember {
  name: string
  title: string
  affiliation: string
  category: 'academic' | 'religious' | 'communications' | 'international'
  country?: string
}

const councilMembers: CouncilMember[] = [
  // Academic Experts
  {
    name: "Dr. Sarah Thompson",
    title: "Professor of Anthropology",
    affiliation: "University of Oxford",
    category: 'academic',
    country: 'United Kingdom'
  },
  {
    name: "Dr. Michael Chen",
    title: "Director, Center for Peace Studies",
    affiliation: "Stanford University",
    category: 'academic',
    country: 'United States'
  },
  {
    name: "Dr. Fatima Al-Rashid",
    title: "Professor of Middle Eastern History",
    affiliation: "American University of Cairo",
    category: 'academic',
    country: 'Egypt'
  },
  {
    name: "Dr. David Goldberg",
    title: "Chair, Department of Conflict Resolution",
    affiliation: "Hebrew University of Jerusalem",
    category: 'academic',
    country: 'Israel'
  },
  
  // Religious Leaders
  {
    name: "Rev. John Rempel",
    title: "Mennonite Pastor and Peace Advocate",
    affiliation: "Mennonite Central Committee",
    category: 'religious',
    country: 'Canada'
  },
  {
    name: "Imam Abdullah Hassan",
    title: "Senior Islamic Scholar",
    affiliation: "Islamic Society of North America",
    category: 'religious',
    country: 'United States'
  },
  {
    name: "Rev. Dr. Grace Williams",
    title: "Episcopal Bishop",
    affiliation: "Diocese of California",
    category: 'religious',
    country: 'United States'
  },
  {
    name: "Sheikh Mohammad Al-Najjar",
    title: "Director of Interfaith Relations",
    affiliation: "King Abdulaziz Center for National Dialogue",
    category: 'religious',
    country: 'Saudi Arabia'
  },
  
  // Communications and Media Professionals
  {
    name: "Maria Rodriguez",
    title: "Emmy Award-winning Documentary Filmmaker",
    affiliation: "Independent Media Producer",
    category: 'communications',
    country: 'Mexico'
  },
  {
    name: "James Patterson",
    title: "Former Director of Communications",
    affiliation: "United Nations Peace Operations",
    category: 'communications',
    country: 'United Kingdom'
  },
  {
    name: "Dr. Lisa Chang",
    title: "Professor of Digital Media and Social Change",
    affiliation: "USC Annenberg School",
    category: 'communications',
    country: 'United States'
  },
  
  // International Representatives
  {
    name: "Ambassador Siti Nurhaliza",
    title: "Former UN Ambassador",
    affiliation: "Republic of Indonesia",
    category: 'international',
    country: 'Indonesia'
  },
  {
    name: "Dr. Ahmed Khalil",
    title: "Director, Middle East Peace Initiative",
    affiliation: "Cairo Institute for Peace Studies",
    category: 'international',
    country: 'Egypt'
  }
]

const categoryConfig = {
  academic: {
    icon: AcademicCapIcon,
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    title: 'Academic Experts',
    description: 'Leading scholars and researchers advancing peace through rigorous study and education'
  },
  religious: {
    icon: UserGroupIcon,
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600',
    title: 'Religious Leaders',
    description: 'Faith leaders fostering interfaith dialogue and spiritual approaches to peacebuilding'
  },
  communications: {
    icon: MegaphoneIcon,
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    title: 'Communications & Media',
    description: 'Media professionals amplifying peace narratives through innovative storytelling'
  },
  international: {
    icon: GlobeAltIcon,
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    title: 'International Representatives',
    description: 'Global leaders bringing diverse perspectives and diplomatic expertise'
  }
}

export default function AdvisoryCouncil() {
  const categories = ['academic', 'religious', 'communications', 'international'] as const

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#dea01e]/10 border border-[#dea01e]/20 mb-6">
              <span className="text-[#dea01e] font-medium">Global Leadership</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advisory Council
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Distinguished leaders from four continents guide our mission to transform conflict through 
              storytelling. Our council brings together world-renowned scholars, faith leaders, media 
              innovators, and diplomats united in their commitment to sustainable peace.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#dea01e]">13</div>
                <div className="text-gray-400 mt-1">Council Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#dea01e]">9</div>
                <div className="text-gray-400 mt-1">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#dea01e]">4</div>
                <div className="text-gray-400 mt-1">Expertise Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#dea01e]">25+</div>
                <div className="text-gray-400 mt-1">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Role Description */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Guidance & Global Perspective</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our Advisory Council provides strategic oversight, cultural insights, and professional expertise 
            to ensure our programs resonate across diverse communities. Each member brings decades of experience 
            in peacebuilding, conflict resolution, and cross-cultural communication.
          </p>
        </div>

        {/* Category Sections */}
        {categories.map((category) => {
          const config = categoryConfig[category]
          const members = councilMembers.filter(m => m.category === category)
          const Icon = config.icon

          return (
            <section key={category} className="mb-20">
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${config.bgColor} ${config.borderColor} border`}>
                    <Icon className={`h-8 w-8 ${config.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">{config.title}</h2>
                </div>
                <p className="text-gray-600 max-w-3xl">{config.description}</p>
              </div>

              {/* Member Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <MemberCard key={index} member={member} config={config} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}

function MemberCard({ member, config }: { member: CouncilMember; config: typeof categoryConfig[keyof typeof categoryConfig] }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dea01e] to-[#dea01e]/70`} />
      
      <div className="p-8">
        {/* Country flag indicator */}
        {member.country && (
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {member.country}
            </span>
          </div>
        )}
        
        {/* Name with emphasis */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#dea01e] transition-colors">
          {member.name}
        </h3>
        
        {/* Professional title */}
        <p className="text-base font-semibold text-gray-800 mb-2 leading-snug">
          {member.title}
        </p>
        
        {/* Affiliation with icon */}
        <div className="flex items-start">
          <div className={`p-1.5 rounded ${config.bgColor} mr-2 mt-0.5`}>
            <config.icon className={`h-4 w-4 ${config.iconColor}`} />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {member.affiliation}
          </p>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  )
}