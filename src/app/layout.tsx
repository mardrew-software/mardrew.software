import { Body } from './body';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'mardrew.software - freelance software developer',
    description:
        'I am an artist and full-stack software developer based in Rotterdam. I like to create for small companies, thought-provoking grassroot or non-profit collectives, and individuals, from the very begining to the very end.',
    authors: [{ url: 'https://mardrew.software', name: 'Mariana Martins' }],
    robots: { index: true, follow: true },
    keywords: [
        'software development',
        'software',
        'software rotterdam',
        'zzp software developer',
        'full-stack developer',
        'web developer',
        'frontend developer',
        'backend developer',
        'software services rotterdam',
        'Mariana Martins',
        'Mariana Ribeiro dos Reis do Vale Martins',
        'mardrew.software',
        'mardrew'
    ]
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Body children={children} />
        </html>
    );
}
