import Hero from './components/Hero';


export default function HomePage() {
return (
<div className="min-h-screen bg-gray-100">
<Hero />


      {/* Impact Stats */}
      <section className="bg-neutral-100 py-14 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-black tracking-tight">150+</h3>
            <p className="text-neutral-600 mt-2">Youth Engaged</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-black tracking-tight">3</h3>
            <p className="text-neutral-600 mt-2">Local Initiatives Supported</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-black tracking-tight">Senegal ↔ Iceland</h3>
            <p className="text-neutral-600 mt-2">Cultural Bridge Initiative</p>
          </div>
        </div>
      </section>


{/* Additional Media Section */}

</div>
);
}