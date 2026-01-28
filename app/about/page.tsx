import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold">About Nordic Waves</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering youth through sports, education, and health.
        </p>
      </div>

      {/* Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Nordic Waves Association exists to build a bridge between Iceland and Senegal through
            sports, health education, and cultural exchange. Beginning our work in Kebemer, Senegal,
            we aim to empower young people by giving them access to mentorship, life skills,
            and opportunities they otherwise cannot reach on their own.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Sports, especially football, have the power to inspire change, build discipline,
            and create healthier futures. Our programs focus on hygiene, nutrition, and mental
            well being while encouraging leadership, confidence, and personal ambition.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            With support from the community of Westfjords, Iceland, Nordic Waves is transforming
            that power into action, connecting two cultures and proving how opportunity can travel
            across borders.
          </p>
        </div>

        <Image
          src="/Photos/stockphoto5.jpg"
          alt="Team huddle"
          width={100}
          height={100}
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />
      </section>

      {/* Impact Stats */}
      <section className="bg-blue-50 py-12 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-[#FFDA03]">150+</h3>
            <p className="text-gray-700 mt-2">Youth Engaged</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#FFDA03]">3</h3>
            <p className="text-gray-700 mt-2">Local Initiatives Supported</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#FFDA03]">Senegal ↔ Iceland</h3>
            <p className="text-gray-700 mt-2">Cultural Bridge Initiative</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Story</h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Nordic Waves was inspired by a personal journey. I grew up in Kebemer, Senegal, where
          following a dream was not simple. Many children face challenges that make ordinary life
          difficult access to school, healthcare, safe play, or simply the chance to imagine a
          future beyond their village.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          With determination and resilience, I pursued football and eventually found my way to
          Iceland. This country welcomed me, helped me integrate, and gave me a sense of belonging.
          That experience showed me how powerful opportunity can be, and how many young people
          back home never get that chance.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Along that journey, I discovered the work of Amadou Gallo Fall, who created NBA Africa in
          1998. His legacy proved how sports can transform lives and open international pathways.
          While his mission began with basketball, my dream is to expand that vision across multiple
          sports, starting in rural communities like Kebemer, places full of talent waiting to be
          seen.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Today, the community of Ísafjörður has joined this mission with enthusiasm. Volunteers
          and neighbors have become partners in helping build Nordic Waves Association, connecting
          Africa and Iceland through support, shared values, and the belief that investing in
          young people can change worlds.
        </p>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
  <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Member 1 */}
    <div className="text-center space-y-3">
      <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
      <h3 className="font-semibold text-xl">Birta Lind Garöarsdóttir</h3>
      <p className="text-gray-600 text-sm">Chairman</p>
    </div>

    {/* Member 2 */}
    <div className="text-center space-y-3">
      <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
      <h3 className="font-semibold text-xl">Tinna Hrund Hlynsdóttir</h3>
      <p className="text-gray-600 text-sm">Board Member</p>
    </div>

    {/* Member 3 */}
    <div className="text-center space-y-3">
      <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
      <h3 className="font-semibold text-xl">Serigne Modou Fall</h3>
      <p className="text-gray-600 text-sm">Executive Director</p>
    </div>

  </div>
</section>

    </div>
  );
}
