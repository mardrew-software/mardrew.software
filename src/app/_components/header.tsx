import Image from 'next/image';
import Link from 'next/link';

export function Header({
    open,
    setOpen
}: {
    open: boolean;
    setOpen: () => void;
}) {
    return (
        <div
            className={`flex flex-col  ${
                open ? 'bg-[#E9B9BD]' : 'bg-[#ffe280]'
            }`}
        >
            <div className="flex flex-row w-full py-6 px-8 lg:px-16 items-center justify-between">
                <Image
                    alt="mardrew.software"
                    src={'/logo_text_rebranded.png'}
                    width={150}
                    height={150}
                />
                <div className="hidden lg:flex text-2xl flex-row gap-6">
                    <Link className="hover:underline" href={'#about'}>
                        ABOUT
                    </Link>
                    <Link className="hover:underline" href={'#projects'}>
                        PROJECTS
                    </Link>
                    <Link className="hover:underline" href={'#credibility'}>
                        CREDIBILITY
                    </Link>
                </div>
                <Image
                    onClick={setOpen}
                    className="z-20 flex lg:hidden"
                    alt="menu"
                    width={40}
                    height={40}
                    src={'/burger.png'}
                />
            </div>
            {open && (
                <div className="fixed w-full h-full z-10 mt-[92px] flex lg:hidden bg-[#E9B9BD] px-8 pb-8 pt-16 text-4xl flex-col items-center gap-6">
                    <Link
                        onClick={setOpen}
                        className="bg-white px-4 py-1 shadow-md hover:underline"
                        href={'#about'}
                    >
                        ABOUT
                    </Link>
                    <Link
                        onClick={setOpen}
                        className="bg-white px-4 py-1 shadow-md  hover:underline"
                        href={'#projects'}
                    >
                        PROJECTS
                    </Link>
                    <Link
                        onClick={setOpen}
                        className="bg-white px-4 py-1 shadow-md  hover:underline"
                        href={'#credibility'}
                    >
                        CREDIBILITY
                    </Link>
                </div>
            )}
        </div>
    );
}
