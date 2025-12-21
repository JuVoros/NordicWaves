import Image from "next/image";

export default function Hero() {
  // ----- Editable Small Event Cards -----
  const smallCards = [
    { title: "Soccer Camp", img: "", alt:"" },
    { title: "Youth Running Club", img: "", alt:"" },
    { title: "Basketball Clinic", img: "", alt:"" },
    { title: "Community Tournament", img: "", alt:"" },
  ];

  // ----- Editable Big Content Cards -----
  const bigCards = [
    {
      title: "Upcoming Event",
      description: "Join our winter charity sports day! Open to all ages.",
      img: "/Photos/stockphoto4.webp",
    },
    {
      title: "Support Our Mission",
      description: "We provide free coaching, equipment, and mentorship.",
      img: "/Photos/stockphoto3.avif",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-6">
          Nordic Waves
        </h1>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Large Main Image Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/Photos/stockphoto5.jpg"
              alt="Main hero"
              width={800}
              height={500}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold">Building Strong Futures</h2>
              <p className="text-gray-600 mt-2">
                Empowering youth through sports, teamwork, and community.
              </p>
            </div>
          </div>

          {/* Sidebar Donate Block */}
          <div className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Support Our Mission</h3>
              <p className="text-gray-600">
                Your contribution helps provide equipment, coaching, and safe
                athletic opportunities.
              </p>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              DONATE
            </button>
          </div>
        </div>

        {/* Small Event Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {smallCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden h-40"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-24 object-cover"
              />
              <div className="p-2 text-center font-semibold">
                {card.title}
              </div>
            </div>
          ))}
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {bigCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
