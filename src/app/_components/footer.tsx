import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './modal';

export function Footer({
    menuOpen,
    showModal,
    setShowModal
}: {
    menuOpen: boolean;
    showModal: boolean;
    setShowModal: (val: boolean) => void;
}) {
    return (
        <div
            className={`z-30 mt-8 lg:mt-16 py-8 lg:py-6 px-16 w-full flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center bg-white lg:bg-transparent ${
                menuOpen ? 'fixed bottom-0' : ''
            }`}
        >
            <div className="flex flex-row gap-6">
                {/* <Link target="_blank" href={'https://www.mardrew.art'}>
                    <Image
                        src={'/logo_pencil.png'}
                        width={50}
                        height={50}
                        alt="logo_pencil"
                    />
                </Link> */}
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
            <Link className="hidden lg:flex" href={'/'}>
                <Image
                    className="min-h-[50px]"
                    alt="mardrew.software"
                    src={'/logo_text_rebranded.png'}
                    width={170}
                    height={50}
                />
            </Link>
            <div
                className="hidden lg:flex cursor-pointer text-xl lg:text-2xl hover:text-[#E9B9BD]"
                onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                }}
            >
                CONTACT & BUREAUCRACY
            </div>
            {showModal && (
                <Modal
                    title="CONTACT & BUREAUCRACY"
                    closeModal={() => setShowModal(false)}
                >
                    <div className="flex flex-col p-8 gap-4">
                        <div className="flex gap-4 items-center">
                            <span className="font-bold text-xl">email via</span>
                            <span>mariana@mardrew.software</span>
                        </div>
                        <hr />
                        <div className="flex gap-4 items-center">
                            <span className="font-bold text-xl">
                                company name
                            </span>
                            <span>mardrew</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="font-bold text-xl">
                                trade names
                            </span>
                            <span>mardrew software, mardrew art</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="font-bold text-xl">
                                kvk-nummer
                            </span>
                            <span>84172649</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="font-bold text-xl">btw-id</span>
                            <span>NL003922870B12</span>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
