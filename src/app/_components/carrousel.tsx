'use client';
import { Project } from '../_types';
import { ProjectHeader } from './projectHeader';

export default function Carrousel({
    projects,
    index
}: {
    projects: Project[];
    index: number;
}) {
    return (
        <>
            <div className="hidden md:flex lg:max-w-[1000px] max-w-[800px] mx-auto">
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
            <div className="flex flex-col md:hidden w-full items-center">
                {projects.map((p, i: number) => {
                    return (
                        <div
                            key={p.id}
                            className="flex flex-col justify-center"
                        >
                            {index == i && <ProjectHeader project={p} />}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
