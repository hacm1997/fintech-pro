'use client'
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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
        <Logo>Fintech<span>Pro</span></Logo>
        <nav>
          <Menu>
            <Link href="/" aria-label="Inicio">Inicio</Link>
            <Link href="/contact" aria-label="Contacto">Contacto</Link>
          </Menu>
        </nav>
      </div>
    </div>
  );
}

// Styled Components

/**
 * Styled component for the logo.
 * 
 * - The main text is bold and sized at 1.5rem.
 * - The `span` inside the logo has a custom color for highlighting.
 */
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  span {
    color: #2563eb;
  }
`;

/**
 * Styled component for the navigation menu.
 * 
 * - Displays links with a gap of 1.5rem between them.
 * - Links are styled with white color and have a hover effect to change color.
 */
const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    font-weight: 500;
    color: #ffffff;
    &:hover {
      color: #2563eb;
    }
  }
`;
