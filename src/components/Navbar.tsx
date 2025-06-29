"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-teal-600 text-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white nav-link" tabIndex={0} aria-label="Home">
          Wag On The Wild Side
        </Link>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={handleMenuToggle}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-4 md:gap-8 text-base font-semibold" id="main-menu">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "nav-link text-white border-b-4 border-white px-3 py-1 rounded transition-colors font-bold"
                      : "nav-link text-white hover:underline px-3 py-1 rounded transition-colors"
                  }
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={0}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Mobile nav menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-teal-600 text-base font-semibold" id="main-menu">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "nav-link text-white border-b-4 border-white px-3 py-2 rounded transition-colors font-bold block"
                      : "nav-link text-white hover:underline px-3 py-2 rounded transition-colors block"
                  }
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={0}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
} 