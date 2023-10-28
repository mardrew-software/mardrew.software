import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const About = () => {
    return (
        <div id="about" className="flex flex-col items-center">
            <Image
                className="animate-bounce"
                alt="mardrew.software"
                src={'/arrow_down.png'}
                width={50}
                height={50}
            />
            <div className="py-6 pb-16 flex flex-col max-w-[70%] items-start gap-6">
                <p className="text-xl">
                    I am an artist and full-stack software developer based in
                    Rotterdam.
                </p>
                <p className="text-xl">
                    I like to create for small companies, interesting grassroot
                    or non-profit organisations, or individuals, from the very
                    beggining to the very end.
                </p>
                <p className="text-xl">
                    I charge fair prices according to your location and
                    financial needs.
                </p>
                <p className="text-xl">
                    I work with illustrations, web design, web development,
                    backend - server and database - development.
                </p>
            </div>
        </div>
    );
};
