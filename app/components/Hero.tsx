import Image from "next/image";

export default function Hero() {
  // ----- Editable Small Event Cards -----
  const smallCards = [
    { title: "Soccer Camp", img: "/Photos/ProkebsCamp-5.jpg", alt:"Event Image" },
    { title: "Youth Running Club", img: "/Photos/ProkebsCamp-6.jpg", alt:"Event Image" },
    { title: "Basketball Clinic", img: "/Photos/ProkebsCamp-3.jpg", alt:"Event Image" },
    { title: "Community Tournament", img: "/Photos/ProkebsCamp-20.jpg", alt:"Event Image" },
  ];

  // ----- Editable Big Content Cards -----
  const bigCards = [
    {
      title: "Upcoming Event",
      description: "Join our winter charity sports day! Open to all ages.",
      img: "/Photos/ProkebsCamp-16.jpg",
    },
    {
      title: "Support Our Mission",
      description: "We provide free coaching, equipment, and mentorship.",
      img: "/Photos/ProkebsCamp-15.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
    

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-6">
          Nordic Waves
        </h1>

 {/* Main Hero Grid */}
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">

  {/* Large Main Image Card */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <Image
      src="/Photos/ProkebsCamp-27.jpg"
      alt="Main hero"
      width={800}
      height={1000}
      className="w-full h-96 object-cover"
    />
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Building Strong Futures</h2>
      <p className="text-gray-600 mt-2">
        Empowering youth through sports, education, and health.
      </p>
    </div>
  </div>

  {/* Compact Donate Sidebar */}
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 max-w-sm mx-auto">
    <h3 className="text-lg font-bold text-center">Support Our Mission</h3>
    <p className="text-gray-600 text-center text-sm">
      Your contribution helps provide equipment, mentorship, and safe play opportunities.
    </p>
    <button className="mt-2 w-full bg-[#FFDA03] text-black py-2.5 rounded-xl font-semibold hover:bg-black hover:text-[#FFDA03] transition">
      DONATE
    </button>
  </div>

</div>


    {/* Small Event Cards */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
  {smallCards.map((card, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="aspect-[4/3] w-full relative">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-3 text-center font-semibold text-sm">
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
                className="object-center object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
}
