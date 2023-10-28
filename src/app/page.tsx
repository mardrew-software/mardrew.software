import Image from 'next/image';
import { Banner } from './_components/banner';
import { About } from './_components/about';
import { Projects } from './_components/projects';

export default function Home() {
    return (
        <div className="flex flex-col">
            <Banner />
            <About />
            <Projects />
        </div>
    );
}
