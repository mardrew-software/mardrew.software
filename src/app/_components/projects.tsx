import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Projects = () => {
    return (
        <div id="projects" className="py-16 flex flex-col items-center">
            <h1
                className={`text-[40px] text-stone-800 ${patrickHand.className} mb-8`}
            >
                ... the latest projects ...
            </h1>
            <div>in construction...</div>
        </div>
    );
};
