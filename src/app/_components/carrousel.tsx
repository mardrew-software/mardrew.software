import { Project } from '../_types';
import { ProjectHeader } from './projectHeader';
import Image from 'next/image';
export default function Carrousel({ projects }: { projects: Project[] }) {
    return (
        <div className="p-4 w-full max-w-[800px] mx-auto">
            <div
                className="scrollbar w-full flex flex-row overflow-x-scroll snap-x snap-mandatory gap-4"
                style={{
                    paddingBottom: '25px'
                }}
            >
                {projects.map((p) => {
                    return (
                        <div
                            key={p.id}
                            className="w-full flex flex-row flex-shrink-0 snap-start mt-8 justify-center"
                        >
                            <ProjectHeader project={p} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
