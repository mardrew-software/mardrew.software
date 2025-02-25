import Image from 'next/image';
import Link from 'next/link';
import Modal from './modal';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import { Inclusive_Sans } from 'next/font/google';

const inclusiveSans = Inclusive_Sans({ weight: ['400'], subsets: ['latin'] });

export function Footer({
    menuOpen,
    showModal,
    setShowModal
}: {
    menuOpen: boolean;
    showModal: boolean;
    setShowModal: (val: boolean) => void;
}) {
    const [copied, setCopied] = useState(false);
    return (
        <div
            className={`z-30 mt-8 lg:mt-16 py-8 lg:py-6 px-16 w-full flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center bg-white lg:bg-transparent ${
                menuOpen ? 'fixed bottom-0' : ''
            }`}
        >
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

                <div
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(true);
                    }}
                >
                    <Image
                        src={'/legal.png'}
                        width={50}
                        height={50}
                        alt="legal"
                    />
                </div>
            </div>
            <Link className="flex" href={'/'}>
                <Image
                    className="min-h-[40px]"
                    alt="mardrew.software"
                    src={'/logo_text.png'}
                    width={170}
                    height={50}
                />
            </Link>

            {!copied ? (
                <div
                    onClick={() => {
                        navigator.clipboard.writeText(
                            'mariana@mardrew.software'
                        );
                        setCopied(true);
                    }}
                    className={`flex justify-center text-center cursor-pointer text-md md:text-xl hover:text-[#E9B9BD] ${inclusiveSans.className}`}
                >
                    mariana@mardrew.software
                </div>
            ) : (
                <a
                    onMouseLeave={() => setCopied(false)}
                    data-tooltip-id="copied-tooltip"
                    data-tooltip-content="COPIED"
                    className={`flex justify-center text-center cursor-pointer text-md md:text-xl hover:text-[#E9B9BD] ${inclusiveSans.className}`}
                >
                    mariana@mardrew.software
                </a>
            )}

            <Tooltip
                id="copied-tooltip"
                style={{ backgroundColor: '#E9B9BD' }}
            />

            {showModal && (
                <Modal
                    title="LEGAL INFORMATION"
                    closeModal={() => setShowModal(false)}
                >
                    <div className="flex flex-col p-8 gap-4">
                        <div className="flex gap-2 lg:gap-4  items-center">
                            <span className="font-bold lg:text-xl">email</span>
                            <span>mariana@mardrew.software</span>
                        </div>
                        <hr />
                        <div className="flex gap-2 lg:gap-4  items-center">
                            <span className="font-bold lg:text-xl">
                                company name
                            </span>
                            <span>mardrew</span>
                        </div>

                        <div className="flex gap-2 lg:gap-4  items-center">
                            <span className="font-bold lg:text-xl">
                                kvk-nummer
                            </span>
                            <span>84172649</span>
                        </div>
                        <div className="flex gap-2 lg:gap-4 items-center">
                            <span className="font-bold lg:text-xl">btw-id</span>
                            <span>NL003922870B12</span>
                        </div>
                        <div
                            className="flex gap-2 lg:gap-4 items-center
                        "
                        >
                            <span className="font-bold lg:text-xl min-w-[100px]">
                                trade names
                            </span>
                            <span>mardrew software, mardrew art</span>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
