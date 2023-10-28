import './globals.css';
import type { Metadata } from 'next';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';
import { Footer } from './_components/footer';
import { Header } from './_components/header';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });
const inclusiveSans = Inclusive_Sans({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'mardrew.software',
    description: 'freelance software developer'
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen flex flex-col justify-between ${patrickHand.className}`}
            >
                <div>
                    <Header />
                    <main className={`w-full ${inclusiveSans.className}`}>
                        {children}
                    </main>
                </div>

                <Footer />
            </body>
        </html>
    );
}
