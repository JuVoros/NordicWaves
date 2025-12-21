import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold">About Nordic Waves</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering youth through sports, community, and opportunity.
        </p>
      </div>

      {/* Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
           Duis eu nibh at nulla finibus rutrum. Fusce vitae elit in ex imperdiet rhoncus nec vel diam.
            Etiam placerat quis massa sed tincidunt. Suspendisse lacinia non nisi et tincidunt. Nam lorem leo, 
            ornare eget gravida sit amet, gravida non nisi. Vestibulum cursus ligula vitae fermentum finibus.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            From soccer camps to wellness workshops, our programs are designed 
            to remove financial barriers and make sports accessible to every child.
          </p>
        </div>

        <Image
          src="/Photos/stockphoto5.jpg"
          alt="Team huddle"
          width="100"
          height="100"
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />
      </section>

      {/* Impact Stats */}
      <section className="bg-blue-50 py-12 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600">800+</h3>
            <p className="text-gray-700 mt-2">Youth Reached</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600">120</h3>
            <p className="text-gray-700 mt-2">Community Events Hosted</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600">15+</h3>
            <p className="text-gray-700 mt-2">Partner Organizations</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac mi vestibulum,
           aliquet massa in, blandit nulla. Sed condimentum metus ut arcu congue cursus. Phasellus quis finibus nibh. Quisque euismod 
           risus rutrum egestas sodales. Cras interdum nulla vitae turpis pharetra placerat. Nam risus sem, imperdiet at interdum vitae, 
        </p>
        <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
          Vivamus congue tincidunt mauris, nec cursus libero sagittis non. 
          Mauris tellus lectus, accumsan eget aliquet non, malesuada sed odio. Proin viverra nibh vitae semper tempor.
        </p>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
              <h3 className="font-semibold text-xl">Team Member {i}</h3>
              <p className="text-gray-600 text-sm">
                Short bio goes here. Dedicated volunteer and community leader.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
