export default function TheStory() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">The Story</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl mb-12 text-gray-700">
          These three stories from different corners of the world demonstrate the transformative power of forgiveness, 
          nonviolence, and community healing in the face of unimaginable tragedy.
        </p>

        {/* Nickel Mines Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Nickel Mines: The Amish Response to Tragedy
          </h2>
          <div className="space-y-4">
            <p>
              On October 2, 2006, a devastating shooting occurred at the West Nickel Mines School, 
              an Amish one-room schoolhouse in Lancaster County, Pennsylvania. A local milk truck driver 
              entered the school and shot ten young Amish girls, killing five of them before taking his own life.
            </p>
            <p>
              What happened next stunned the world. Within hours of the shooting, members of the Amish 
              community were visiting the shooter's widow, Amy Roberts, and her three young children. 
              They came not with anger or demands for justice, but with forgiveness and compassion.
            </p>
            <p>
              Marie Roberts, the shooter's mother, recalls the extraordinary moment when her Amish neighbor 
              came to their door. "He held out his hand to my husband and said, 'We forgive you.' It was 
              the most powerful moment of grace I have ever experienced."
            </p>
            <p>
              The Amish community's response went beyond words. They attended the shooter's funeral, 
              established a fund for his family, and consistently demonstrated that forgiveness is not 
              just a concept but a lived practice. Their actions showed that even in the darkest moments, 
              choosing forgiveness over revenge can break cycles of violence and begin the process of healing.
            </p>
            <p>
              This radical forgiveness didn't mean forgetting or minimizing the tragedy. The Amish mourned 
              deeply for their lost children. But they understood that harboring hatred would only create 
              more victims. Their faith taught them that forgiveness was not optional—it was essential 
              for their own spiritual wellbeing and for the healing of their community.
            </p>
          </div>
        </section>

        {/* Harlem Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Harlem: The Power of Nonviolent Resistance
          </h2>
          <div className="space-y-4">
            <p>
              In the heart of Harlem, New York, a remarkable story of nonviolent resistance unfolded 
              involving the Murid Muslim community. When faced with violence and persecution, this 
              West African Muslim community chose a path that would transform not only their neighborhood 
              but also challenge preconceptions about Islam and peace.
            </p>
            <p>
              Oustaz Mbay, a respected religious leader in the Murid community, became a pivotal figure 
              in this transformation. When members of his community faced harassment and violence, 
              including attacks on their businesses and places of worship, Oustaz Mbay drew upon both 
              Islamic teachings and the Murid tradition of peaceful resistance.
            </p>
            <p>
              "Violence only begets more violence," Oustaz Mbay taught his followers. "Our Prophet, 
              peace be upon him, showed us that true strength lies in restraint, in responding to 
              hatred with patience and understanding."
            </p>
            <p>
              The Murid community organized peaceful demonstrations, community dialogues, and interfaith 
              gatherings. They invited their neighbors—including those who had shown hostility—to share 
              meals and learn about their faith and culture. When their mosque was vandalized, instead 
              of seeking revenge, they organized a community cleanup where people of all backgrounds 
              worked side by side.
            </p>
            <p>
              This approach gradually transformed the neighborhood. Former adversaries became advocates, 
              and the Murid community's commitment to nonviolence became a model for conflict resolution 
              throughout Harlem. Their story demonstrates that nonviolence is not passive but requires 
              tremendous courage and discipline—and that it can achieve what violence never could: 
              lasting peace and mutual respect.
            </p>
          </div>
        </section>

        {/* Solo Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Solo, Indonesia: Building Bridges Between Faiths
          </h2>
          <div className="space-y-4">
            <p>
              In Solo (Surakarta), Indonesia, a city that had experienced significant religious tensions 
              and violence between Muslim and Christian communities, an unexpected partnership emerged 
              that would become a beacon of hope for interfaith reconciliation across the nation.
            </p>
            <p>
              Pastor Paulus Hartono, leader of a prominent Christian church, and Commander Yanni Rusmanto, 
              a Muslim military officer, found themselves at the center of efforts to heal their divided city. 
              Both men had witnessed the devastating effects of religious violence—burned churches and mosques, 
              families torn apart, and communities living in fear.
            </p>
            <p>
              Their collaboration began with a simple act: Pastor Hartono invited Commander Rusmanto to 
              visit his church, and in return, the Commander invited the Pastor to the mosque. These visits, 
              initially met with suspicion from both communities, gradually evolved into regular exchanges.
            </p>
            <p>
              "We realized that our fears were based on ignorance," Pastor Hartono reflected. "When we 
              sat together, shared meals, and talked about our families and hopes, we discovered how much 
              we had in common. We both wanted peace for our children, prosperity for our communities, 
              and the freedom to worship according to our faiths."
            </p>
            <p>
              Commander Rusmanto added a crucial security dimension to their peace-building efforts. 
              Using his military position, he established interfaith security teams where Muslims and 
              Christians worked together to protect each other's places of worship during religious 
              celebrations. This practical cooperation built trust in ways that words alone never could.
            </p>
            <p>
              Together, they established the Solo Peace Forum, bringing together religious leaders, 
              youth groups, and civil society organizations. They organized joint community service 
              projects, interfaith dialogues in schools, and economic cooperation initiatives that 
              gave people concrete reasons to work together.
            </p>
            <p>
              The transformation in Solo has been remarkable. Former hotspots of violence have become 
              models of coexistence. Young people who might have been recruited by extremist groups 
              now participate in interfaith youth programs. The city that was once synonymous with 
              religious conflict has become a destination for those seeking to learn about successful 
              reconciliation.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Common Thread</h2>
          <p className="mb-4">
            These three stories—from an Amish community in Pennsylvania, a Muslim neighborhood in Harlem, 
            and a diverse city in Indonesia—share profound lessons about the human capacity for healing 
            and transformation:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Forgiveness is not weakness but a powerful force for breaking cycles of violence</li>
            <li>Nonviolence requires tremendous courage and can achieve what force cannot</li>
            <li>Personal relationships and practical cooperation can bridge even the deepest divides</li>
            <li>Communities can choose healing over hatred, even in the face of terrible tragedy</li>
          </ul>
          <p className="font-medium">
            These are not just stories of exceptional individuals but examples of what becomes possible 
            when communities commit to the difficult but transformative work of peace.
          </p>
        </section>
      </div>
    </div>
  )
}