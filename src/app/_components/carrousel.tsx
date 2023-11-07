'use client';
import { useEffect, useRef, useState } from 'react';
import { Project } from '../_types';
import { ProjectHeader } from './projectHeader';

export default function Carrousel({ projects }: { projects: Project[] }) {
    const indicatorWidthPercent =
        projects.length > 0 ? 100 / projects.length : 100;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderCurrent = sliderRef.current;

        if (!sliderCurrent) {
            return;
        }

        // Find all the slides inside of the slider
        const slides = (sliderCurrent as HTMLDivElement).querySelectorAll(
            'div'
        );
        const slidesArray = Array.from(slides);

        // Wait until a slide is 50% visible, then find it's index in the array of
        // all slides and update the currentSlideIndex
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slidesArray.indexOf(
                            entry.target as HTMLDivElement
                        );
                        setCurrentSlideIndex(index);
                    }
                });
            },
            {
                root: sliderCurrent,
                threshold: 0.5
            }
        );
        slides.forEach((slide) => observer.observe(slide));

        return () => slides.forEach((slide) => observer.unobserve(slide));
    }, []);

    return (
        <div className="w-full ">
            <div className="w-full h-0.5 relative bg-gray-300">
                <div
                    className="h-0.5 absolute top-0 left-0 bg-gray-500"
                    style={{
                        width: `${indicatorWidthPercent}%`,
                        left: `${indicatorWidthPercent * currentSlideIndex}%`,
                        transition: 'left 150ms ease-in-out'
                    }}
                />
            </div>
            <div
                className="w-full flex flex-row justify-center overflow-x-scroll snap-x snap-mandatory gap-4"
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
    );
}
