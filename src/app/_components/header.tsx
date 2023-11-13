import Image from 'next/image';
import Link from 'next/link';

export function Header({
    menuOpen,
    setMenuOpen
}: {
    menuOpen: boolean;
    setMenuOpen: () => void;
}) {
    return (
        <div
            className={`flex flex-col  ${
                menuOpen ? 'bg-[#E9B9BD]' : 'bg-[#ffe280]'
            }`}
        >
            <div className="flex flex-row w-full py-6 px-8 lg:px-16 items-center justify-between">
                <Link href={'/'}>
                    <Image
                        alt="mardrew.software"
                        src={'/logo_text_rebranded.png'}
                        width={150}
                        height={150}
                    />
                </Link>
                <div className="hidden lg:flex text-2xl flex-row gap-6">
                    <Link className="hover:underline" href={'/#about'}>
                        ABOUT
                    </Link>
                    <Link className="hover:underline" href={'/#projects'}>
                        PROJECTS
                    </Link>
                    <Link className="hover:underline" href={'/#credibility'}>
                        CREDIBILITY
                    </Link>
                </div>
                <Image
                    onClick={setMenuOpen}
                    className="z-20 flex lg:hidden"
                    alt="menu"
                    width={30}
                    height={30}
                    src={'/burger.png'}
                />
            </div>
            {menuOpen && (
                <div className="fixed w-full h-screen z-10 mt-[92px] flex lg:hidden bg-[#E9B9BD] px-8 pb-8 pt-16 text-4xl flex-col items-center gap-6">
                    <Link
                        onClick={setMenuOpen}
                        className="bg-white px-4 py-1 shadow-md hover:underline"
                        href={'#about'}
                    >
                        ABOUT
                    </Link>
                    <Link
                        onClick={setMenuOpen}
                        className="bg-white px-4 py-1 shadow-md  hover:underline"
                        href={'#projects'}
                    >
                        PROJECTS
                    </Link>
                    <Link
                        onClick={setMenuOpen}
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
