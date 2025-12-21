import Hero from './components/Hero';
import PhotoGrid from './components/PhotoGrid';


export default function HomePage() {
return (
<div className="min-h-screen bg-gray-100">
<Hero />


{/* Featured Photos Section */}
<section className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-3xl font-bold mb-8">Featured Photos</h2>
<PhotoGrid />
</section>


{/* Additional Media Section */}
<section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
<div className="bg-white rounded-2xl shadow-lg h-64 flex items-center justify-center">Photo/Video</div>
<div className="bg-white rounded-2xl shadow-lg h-64 flex items-center justify-center">Photo/Video</div>
</section>
</div>
);
}