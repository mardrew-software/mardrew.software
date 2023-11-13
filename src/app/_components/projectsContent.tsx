'use client';
import { Patrick_Hand } from 'next/font/google';
import Carrousel from './carrousel';
import { Project } from '../_types';
import Image from 'next/image';
import { useState } from 'react';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const ProjectsContent = ({ projects }: { projects: Project[] }) => {
    const [index, setIndex] = useState(0);
    const goNext = (up: boolean) => {
        if (up) {
            setIndex(index == projects.length - 1 ? 0 : index + 1);
        } else {
            setIndex(index == 0 ? projects.length - 1 : index - 1);
        }
    };

    return (
        <div
            id="projects"
            className="mt-8 lg:mt-16 flex flex-row justify-center px-4 lg:px-0"
        >
            <div className="flex flex-col items-center md:gap-0 gap-6">
                <h1
                    className={`hidden md:flex text-[50px] ${patrickHand.className}`}
                >
                    LATEST PROJECTS
                </h1>
                <div className="md:hidden flex flex-row gap-4 justify-between items-center min-w-[300px]">
                    <Image
                        className="cursor-pointer"
                        onClick={() => goNext(false)}
                        alt="arrow back"
                        src={'/slider_back.png'}
                        width={16}
                        height={10}
                    />
                    <h1 className={`text-[30px] ${patrickHand.className}`}>
                        LATEST PROJECTS
                    </h1>
                    <Image
                        onClick={() => goNext(true)}
                        className="cursor pointer transform rotate-180"
                        alt="arrow next"
                        src={'/slider_back.png'}
                        width={16}
                        height={10}
                    />
                </div>

                <Carrousel projects={projects} index={index} />
            </div>
        </div>
    );
};
