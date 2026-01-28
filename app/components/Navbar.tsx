import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-3 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/Photos/logo.png"
            alt="Logo"
            width={110}  // smaller + better fit
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-lg">Nordic Waves</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-lg">

          <Link href="/about" className="hover:text-[#FFDA03]">
            About
          </Link>
          <Link href="/events" className="hover:text-[#FFDA03]">
            Events
          </Link>
          <Link href="/gallery" className="hover:text-[#FFDA03]">
            Gallery
          </Link>

          {/* Divider */}
          <span className="text-gray-300 select-none">|</span>

          {/* Donate CTA */}
          <button className="bg-[#FFDA03] text-black py-1 px-8 rounded-lg font-semibold hover:bg-black hover:text-[#FFDA03] transition">
            DONATE
          </button>

        </div>
      </div>
    </nav>
  );
}
