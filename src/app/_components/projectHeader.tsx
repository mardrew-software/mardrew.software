import { Project } from '../_types';
import Image from 'next/image';
import Link from 'next/link';
import { TechTags } from './techTags';

export const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="shadow-md rounded cursor-pointer flex flex-col md:flex-row border-2 border-black bg-[#ffe280] md:max-w-[1000px] md:h-[350px] ">
                <Image
                    className="md:flex-shrink-0 hover:opacity-90 min-w-[100%] md:min-w-[350px]"
                    alt={project.title}
                    src={project.image.url}
                    width={350}
                    height={350}
                />
                <div className="flex flex-col justify-between p-4 md:p-8 h-full w-full gap-8 md:gap-0">
                    <div className="flex flex-col gap-4 w-full">
                        <span className={`text-xl font-bold`}>
                            {project.title}
                        </span>
                        <p className="">{project.smallDescription}</p>
                        <TechTags
                            labels={project.techstack}
                            classname="text-md px-1 border-solid border-[1px] border-black bg-white"
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <span className="hover:bg-white hover:text-black px-2 py-1 text-white bg-black border-solid border-2 border-black max-w-fit rounded">
                            read more
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
