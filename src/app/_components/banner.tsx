import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-16 py-16 px-8 lg:px-16 bg-[#ffe280]">
            <Image
                className="w-[90%]"
                alt="mardrew.software"
                src={'/logo_pink_rebranded.png'}
                width={500}
                height={500}
            />
            <div className="flex flex-col items-center lg:items-start">
                <p className="text-center text-3xl lg:text-4xl">
                    mariana martins
                </p>
                <p
                    className={`text-center lg:text-left mt-4 leading-none lg:text-[80px] text-[70px] text-stone-800 ${patrickHand.className}`}
                >
                    freelance software developer
                </p>
                <div className="mt-16 text-2xl flex flex-col gap-4">
                    <p className="bg-white shadow-lg py-2 px-4 lg:max-w-max rounded">
                        Hello. I am an artist and full-stack{' '}
                        <b>software developer</b>
                    </p>
                    <p className="bg-white shadow-md py-2 px-4 lg:max-w-max rounded">
                        working either <b>remotely</b> or in{' '}
                        <b>Rotterdam, the Netherlands</b>.
                    </p>
                </div>
            </div>
        </div>
    );
};
