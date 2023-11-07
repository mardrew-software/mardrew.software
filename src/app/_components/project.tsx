import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';
import Link from 'next/link';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Project = ({
    title,
    description,
    src
}: {
    title: string;
    description: string;
    src: string;
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 bg-[#E9B9BD] shadow-md rounded">
            <Image
                alt="project image"
                width={250}
                height={450}
                src={src}
                className="rounded shadow-md"
            />
            <div className="flex flex-col justify-between items-end">
                <div>
                    <div className={`text-2xl mb-4 ${patrickHand.className}`}>
                        {title}
                    </div>
                    <div className="max-w-[200px]">{description}</div>
                </div>

                <Link
                    href=""
                    className="rounded hover:underline text-right bg-white px-4 py-2 w-fit"
                >
                    read more
                </Link>
            </div>
        </div>
    );
};
