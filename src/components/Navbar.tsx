import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-teal-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
          Wag On The Wild Side
        </span>
        <ul className="flex gap-4 md:gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-teal-200 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 