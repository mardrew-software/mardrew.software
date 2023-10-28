import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <div className="flex flex-row w-full py-6 px-16 items-center justify-between bg-[#ffe280]">
            <Image
                alt="mardrew.software"
                src={'/logo_text_rebranded.png'}
                width={150}
                height={150}
            />
            <div className="text-2xl flex flex-row gap-6">
                <Link href={'#about'}>ABOUT</Link>
                <Link href={''}>PROJECTS</Link>
                <Link href={''}>CREDIBILITY</Link>
            </div>
        </div>
    );
}
