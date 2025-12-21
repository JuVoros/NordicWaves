import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    "/photos/sports1.jpg",
    "/photos/sports2.jpg",
    "/photos/sports3.jpg",
    "/photos/sports4.jpg",
    "/photos/sports5.jpg",
    "/photos/sports6.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {photos.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Sports photo ${i + 1}`}
              width={800}
              height={600}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
