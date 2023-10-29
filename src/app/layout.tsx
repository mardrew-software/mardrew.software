import { Body } from './body';
import './globals.css';
import type { Metadata } from 'next';

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
            <Body children={children} />
        </html>
    );
}
