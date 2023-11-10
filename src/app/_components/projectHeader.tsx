import { Patrick_Hand } from 'next/font/google';
import { Project } from '../_types';
import Image from 'next/image';
import Link from 'next/link';
import { Tags } from './tags';

export const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="rounded cursor-pointer flex flex-col lg:flex-row border-2 border-black bg-[#ffe280] lg:w-[600px] lg:max-h-[300px]">
                <Image
                    className="flex-shrink-0"
                    alt={project.title}
                    src={project.image.url}
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-4 p-4 px-8 w-full">
                    <span className={`text-xl font-bold`}>{project.title}</span>
                    <p className="">{project.smallDescription}</p>
                    <Tags
                        labels={project.techstack}
                        classname="text-sm px-1 border-solid border-[1px] border-black bg-white"
                    />
                </div>
            </div>
        </Link>
    );
};
