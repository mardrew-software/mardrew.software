import Image from 'next/image';
import { Patrick_Hand, Inclusive_Sans } from 'next/font/google';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-16 py-16 px-16 bg-[#ffe280]">
                <Image
                    alt="mardrew.software"
                    src={'/logo_pink_rebranded.png'}
                    width={500}
                    height={500}
                />
                <div className="flex flex-col">
                    <p className="text-4xl">mariana martins</p>
                    <p
                        className={`w-full mt-4 leading-none text-[80px] text-stone-800 ${patrickHand.className}`}
                    >
                        freelance software developer
                    </p>
                    <div className="mt-16 text-2xl flex flex-col gap-4">
                        <p className="bg-white shadow-lg py-2 px-4 max-w-max">
                            Hello. I am a full-stack <b>software developer</b>
                        </p>
                        <p className="bg-white shadow-md py-2 px-4 max-w-max">
                            working either <b>remotely</b> or in{' '}
                            <b>Rotterdam, the Netherlands</b>.
                        </p>
                    </div>
                </div>
            </div>
            <div id="about" className="flex flex-col items-center">
                <Image
                    className="animate-bounce"
                    alt="mardrew.software"
                    src={'/arrow_down.png'}
                    width={50}
                    height={50}
                />
                <div>
                    <p>... in construction</p>
                </div>
            </div>
        </div>
    );
}
