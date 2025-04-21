'use client'
import Link from 'next/link';
import React from 'react';

/**
 * Navbar component.
 * 
 * A navigation bar that is fixed at the top of the page.
 * 
 * - Displays the logo and navigation menu with links.
 * - The logo is styled with a dynamic color for the "Pro" part.
 * - The menu has two links: "Inicio" (Home) and "Contacto" (Contact).
 * - The navbar has a background color and padding applied.
 * 
 * @returns A React element representing the navbar with links to home and contact.
 */
export const Navbar = () => {
  return (
    <div className='fixed w-full bg-[#131212] p-4'>
      <div className='flex items-center justify-around'>
        <div className='text-[24px]'>Fintech<span className='text-[#2563eb]'>Pro</span></div>
        <nav>
          <div className='flex gap-6 font-medium text-white hover:text-[#2563eb]'>
            <Link href="/" aria-label="Inicio">Inicio</Link>
            <Link href="/contact" aria-label="Contacto">Contacto</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
