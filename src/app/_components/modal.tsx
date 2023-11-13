import { Inclusive_Sans } from 'next/font/google';
import React, { ReactElement } from 'react';
const inclusiveSans = Inclusive_Sans({ weight: ['400'], subsets: ['latin'] });

export default function Modal({
    title,
    closeModal,
    children
}: {
    title: string;
    closeModal: () => void;
    children: ReactElement;
}) {
    return (
        <>
            <div className="mx-2 lg:mx-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                        <div className="bg-[#E9B9BD] flex items-start justify-between pl-8 pr-4 py-4 rounded-t">
                            <h3 className="text-xl lg:text-2xl font-semibold">
                                {title}
                            </h3>
                            <div
                                className="cursor-pointer p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={closeModal}
                            >
                                <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    X
                                </span>
                            </div>
                        </div>
                        <div className={`${inclusiveSans.className}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
