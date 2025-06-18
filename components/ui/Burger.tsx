'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Burger() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="group h-20 w-20 rounded-lg border-2 border-black flex items-center justify-center"
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-black transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`h-1 w-8 rounded-full bg-black transition-all duration-300 ${
              open ? 'scale-x-0' : ''
            }`}
          />
          <span
            className={`h-1 w-8 rounded-full bg-black transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </div>
      </button>

      {open && (
        <nav className="absolute top-full left-0 w-screen bg-white flex flex-col items-center py-6 gap-4 transition-all duration-300">
          {['Product', 'Pricing', 'Locations', 'FAQ', 'Contacts'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xl font-bold text-black hover:text-blue-600"
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}