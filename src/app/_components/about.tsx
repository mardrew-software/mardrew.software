import Image from 'next/image';
import { RedactedScript } from './redactedScript';

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
            <div className="py-6 flex flex-col px-8 lg:px-0 max-w-[100%] lg:max-w-[70%] items-start gap-4 lg:gap-6">
                <p className="text-3xl">
                    I am an artist and full-stack software developer based in
                    Rotterdam.
                </p>
                <p className="text-xl text-right lg:text-left">
                    I like to create for small companies, thought-provoking
                    grassroot or non-profit collectives, and individuals, from
                    the very beggining to the very end.
                </p>
                <RedactedScript text="xdewdeukyufwefwe...wqefwfdewnjkdfnewoifne.........cdsfwf..........." />
                <p className="text-xl lg:text-2xl">
                    I charge fair prices according to your location and
                    financial needs.
                </p>
                <p className="text-xl lg:text-2xl leading-loose">
                    I work with{' '}
                    <span className="rounded text-2xl lg:text-3xl px-2 shadow-sm border-solid border-[#ffe280] border-2">
                        illustrations
                    </span>
                    ,{' '}
                    <span className="rounded text-2xl lg:text-3xl px-2 border-solid border-[#E9B9BD] border-2 shadow-sm">
                        web design
                    </span>
                    ,{' '}
                    <span className="rounded text-2xl lg:text-3xl px-2 bg-[#E9B9BD] shadow-sm border-solid border-[#E9B9BD] border-2">
                        web development
                    </span>
                    , backend -{' '}
                    <span className="rounded text-2xl lg:text-3xl px-2 bg-[#ffe280]  border-solid border-[#ffe280] border-2 shadow-sm">
                        server and database
                    </span>{' '}
                    - development, at a small scale.
                </p>
            </div>
        </div>
    );
};
