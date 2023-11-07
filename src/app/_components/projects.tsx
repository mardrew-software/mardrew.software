import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';
import { Project } from './project';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Projects = () => {
    return (
        <div
            id="projects"
            className="py-16 flex flex-row justify-center px-8 lg:px-0"
        >
            <div className="flex flex-col items-center">
                <h1
                    className={`underline decoration-wavy decoration-3 underline-offset-8 decoration-[#E9B9BD] text-[50px] ${patrickHand.className}`}
                >
                    LATEST PROJECTS
                </h1>

                <div className="flex flex-row gap-8 p-8">
                    <Project
                        title="RRR admin dashboard"
                        description="Reading Room Rotterdam (RRR) is a nomadic roaming library that
                functions as a gathering agent for communities to entangle with
                one another. The objective for this project was to create an
                admin dashboard so that RRR is able to manage the state of
                rented out books."
                        src="https://ik.imagekit.io/mardrewsoftware/mardrew.software/Screenshot%202023-10-29%20at%2011.37.24.png?updatedAt=1698835869516"
                    />
                    <Project
                        title="nelsondeus.com"
                        description="Nelson Deus is a musician, fleshy doodler, collage crafter, writer and performance artist. In this project, we designed together to create a portfolio website that would represent him as accurately as possible during the small time frame we had available."
                        src="https://ik.imagekit.io/mardrewsoftware/mardrew.software/Screenshot%202023-11-01%20at%2012.19.16.png?updatedAt=1698837571613"
                    />
                </div>
            </div>
        </div>
    );
};
