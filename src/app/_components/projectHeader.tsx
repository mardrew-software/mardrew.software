import { Patrick_Hand } from 'next/font/google';
import { Project } from '../_types';
import Image from 'next/image';
import Link from 'next/link';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="rounded cursor-pointer flex flex-row border-2 border-black bg-[#ffe280] w-[600px] max-h-[300px]">
                <Image
                    className="flex-shrink-0"
                    alt={project.title}
                    src={project.image.url}
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-4 p-4 px-8 w-full">
                    <span className={`text-xl font-bold`}>{project.title}</span>
                    <p className="h-[250px] text-ellipsis overflow-hidden">
                        {project.description.text}
                    </p>
                </div>
            </div>
        </Link>
    );
};
