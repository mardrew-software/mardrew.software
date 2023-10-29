'use client';

import './globals.css';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { useState } from 'react';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });
const inclusiveSans = Inclusive_Sans({ weight: ['400'], subsets: ['latin'] });

export const Body = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <body
            className={`min-h-screen flex flex-col justify-between ${
                patrickHand.className
            } ${open ? 'overflow-hidden' : ''}`}
        >
            <div>
                <Header open={open} setOpen={() => setOpen(!open)} />
                {!open && (
                    <main className={`w-full ${inclusiveSans.className}`}>
                        {children}
                    </main>
                )}
            </div>
            <Footer />
        </body>
    );
};
