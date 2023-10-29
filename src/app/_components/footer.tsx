import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <div className="z-30 py-8 lg:py-6 px-16 w-full flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center bg-white lg:bg-transparent">
            <div className="flex flex-row gap-6">
                <Link target="_blank" href={'https://www.mardrew.art'}>
                    <Image
                        src={'/logo_pencil.png'}
                        width={50}
                        height={50}
                        alt="logo_pencil"
                    />
                </Link>
                <Link
                    target="_blank"
                    href={'https://www.linkedin.com/in/mrrvm/'}
                >
                    <Image
                        src={'/linkedin.png'}
                        width={50}
                        height={50}
                        alt="instagram"
                    />
                </Link>

                <Link target="_blank" href={'https://github.com/Mrrvm'}>
                    <Image
                        src={'/github.png'}
                        width={50}
                        height={50}
                        alt="github"
                    />
                </Link>
            </div>
            <Image
                className="min-h-[50px]"
                alt="mardrew.software"
                src={'/logo_text_rebranded.png'}
                width={170}
                height={50}
            />
            <Link
                className="text-xl lg:text-2xl underline hover:text-[#E9B9BD]"
                href={'/the-required-bureaucracy'}
            >
                the REQUIRED bureaucracy
            </Link>
        </div>
    );
}
