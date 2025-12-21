import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      title: "Youth Charity Football Tournament",
      date: "March 12, 2025",
      description:
        "A community-driven event focused on raising funds for youth sports programs.",
      image: "/photos/sports1.jpg",
    },
    {
      title: "Community Running Challenge",
      date: "April 19, 2025",
      description:
        "A 5K and 10K race supporting mental and physical health initiatives for kids.",
      image: "/photos/sports2.jpg",
    },
    {
      title: "Summer Basketball Camp",
      date: "June 5, 2025",
      description:
        "A free basketball camp providing training, mentorship, and fun for young athletes.",
      image: "/photos/sports3.jpg",
    },

    
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>

      <div className="grid gap-10 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <Image
              src={event.image}
              alt={event.title}
              width="50"
              height="50"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {event.date}
              </span>

              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>

              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
