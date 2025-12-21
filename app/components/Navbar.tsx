import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
return (
<nav className="w-full py-4 bg-white shadow-sm">
<div className="max-w-6xl mx-auto flex justify-between items-center px-4">
<Link href="/" className="flex items-center gap-2">
<Image 
src="/public/Photos/NW-Logo.JPG"
alt="Logo"
width={150}
height={50}
/>
<span className="font-bold text-xl">Nordic Waves</span>
</Link>


<div className="flex gap-6 text-lg">
<Link href="/about" className="hover:text-blue-600">About</Link>
<Link href="/events" className="hover:text-blue-600">Events</Link>
<Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
</div>
</div>
</nav>
);
}