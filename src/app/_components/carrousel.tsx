'use client';
import { useEffect, useRef, useState } from 'react';
import { Project } from '../_types';
import { ProjectHeader } from './projectHeader';

export default function Carrousel({ projects }: { projects: Project[] }) {
    const indicatorWidthPercent =
        projects.length > 0 ? 100 / projects.length : 100;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    return (
        <div className="w-full max-w-[700px] mx-auto">
            <div className="p-8 w-full">
                <div className="w-full h-0.5 relative bg-gray-300">
                    <div
                        className="h-0.5 absolute top-0 left-0 bg-gray-500"
                        style={{
                            width: `${indicatorWidthPercent}%`,
                            left: `${
                                indicatorWidthPercent * currentSlideIndex
                            }%`,
                            transition: 'left 150ms ease-in-out'
                        }}
                    />
                </div>
                <div
                    className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory gap-4"
                    style={{
                        paddingBottom: '15px',
                        clipPath: 'inset(0 0 15px 0)'
                    }}
                >
                    {projects.map((p) => {
                        return (
                            <div
                                id={p.id}
                                className="w-full flex-shrink-0 snap-start mt-8"
                            >
                                <ProjectHeader project={p} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
