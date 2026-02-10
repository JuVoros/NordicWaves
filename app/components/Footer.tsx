import Link from "next/link";
import { FadeUp } from "../components/motion-wrapper";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <FadeUp>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">
                Nordic Waves Association
              </h3>
              <p className="max-w-sm text-sm text-neutral-400 leading-relaxed">
                Bridging sport, culture, and opportunity between communities
                through inclusive athletic programs and global partnerships.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <p className="font-medium text-black">Explore</p>
                <Link href="/about" className="block text-neutral-400 hover:text-[#FFDA03] transition">
                  About
                </Link>
                <Link href="/programs" className="block text-neutral-400 hover:text-[#FFDA03] transition">
                  Programs
                </Link>
                <Link href="/contact" className="block text-neutral-400 hover:text-[#FFDA03] transition">
                  Contact
                </Link>
              </div>

              <div className="space-y-3">
                <p className="font-medium text-black">Get Involved</p>
                <Link href="/donate" className="block text-neutral-400 hover:text-[#FFDA03] transition">
                  Donate
                </Link>
                <Link href="/volunteer" className="block text-neutral-400 hover:text-[#FFDA03] transition">
                  Volunteer
                </Link>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="font-medium text-black">Connect</p>
              <div className="flex gap-4 text-neutral-400">
                <a href="#" className="hover:text-[#FFDA03] transition">Instagram</a>
                <a href="#" className="hover:text-[#FFDA03] transition">LinkedIn</a>
                <a href="#" className="hover:text-[#FFDA03] transition">Email</a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 md:flex-row md:justify-between">
            <p className="text">© {new Date().getFullYear()} Nordic Waves Association</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#FFDA03] transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#FFDA03] transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
