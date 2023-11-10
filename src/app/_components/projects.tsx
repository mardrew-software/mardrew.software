import { Patrick_Hand } from 'next/font/google';
import { getProjects } from '../_api/getProjects';
import Carrousel from './carrousel';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Projects = async () => {
    const projects = await getProjects();
    return (
        <div
            id="projects"
            className="pt-16 flex flex-row justify-center px-8 lg:px-0"
        >
            <div className="flex flex-col items-center">
                <h1 className={`text-[50px] ${patrickHand.className}`}>
                    LATEST PROJECTS
                </h1>

                <Carrousel projects={projects} />
            </div>
        </div>
    );
};
