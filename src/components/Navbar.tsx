"use client"; // Ensures this component only runs on the client-side

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Control visibility of the navbar
  const pathname = usePathname();

  // Handle scroll logic for hiding/showing the navbar without referencing "window"
  useEffect(() => {
    let lastScrollY = 0; // Track the last scroll position locally within this effect

    const handleScroll = () => {
      const currentScrollY = document.documentElement.scrollTop; // Get current scroll position
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = currentScrollY; // Update scroll position
    };

    const scrollListener = () => requestAnimationFrame(handleScroll);

    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []); // No dependencies needed, local `lastScrollY` is used within the effect

  // Determine if the current route is active for highlighting links
  const isActive = (path: string) => {
    return pathname === path
      ? "bg-accent text-white px-4 py-2"
      : "text-white px-4 py-2 transition-colors hover:text-blue-300";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* Updated logo with font-weight and gradient on "Home" */}
            <Link href="/" className="text-2xl font-bold text-white">
              Buy
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Home
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
            <Link href="/property-listings" className={isActive("/property-listings")}>
              Properties
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-highlight focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile links */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 bg-black p-4 rounded-lg">
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
              <Link href="/about" className={isActive("/about")}>
                About
              </Link>
              <Link href="/property-listings" className={isActive("/property-listings")}>
                Properties
              </Link>
              <Link href="/contact" className={isActive("/contact")}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
