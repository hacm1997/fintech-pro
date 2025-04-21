import React from 'react';
import { Navbar } from './navbar';

/**
 * MainLayout component.
 * 
 * A layout component that wraps the main content of the page.
 * 
 * - Renders the `Navbar` component at the top.
 * - Displays the `children` content within a centered container.
 * 
 * @param children - The content to be displayed within the layout.
 * @returns A React element representing the main layout with the navbar and content area.
 */
export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center pt-14'>
                <div className='w-[90%] sm:w-[70%] py-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}
