import { getProject } from '@/app/_api/getProject';
import { Tags } from '@/app/_components/Tags';
import { DateTag } from '@/app/_components/dateTag';
import { ParsedText } from '@/app/_components/parsedText';
import { RedactedScript } from '@/app/_components/redactedScript';
import { ProjectStep } from '@/app/_types';
import { Patrick_Hand } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const patrickHand = Patrick_Hand({ weight: ['400'], subsets: ['latin'] });

export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug[0]);
    return (
        <div className="flex flex-col gap-8 p-8 pb-4 lg:p-16">
            <div className="flex flex-col gap-2">
                <Link
                    href={'/'}
                    className={`cursor-pointer flex gap-2 items-center text-xl ${patrickHand.className}`}
                >
                    <Image
                        alt="arrow back"
                        src={'/arrow_back.png'}
                        width={40}
                        height={20}
                    />
                    <span>back to home</span>
                </Link>
                <div className={`text-3xl ${patrickHand.className}`}>
                    {project.title}
                </div>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-center gap-8">
                <Image
                    className="lg:max-w-[40%]"
                    alt="arrow back"
                    src={project.image.url}
                    width={project.image.width}
                    height={project.image.height}
                />
                <div className="flex flex-col justify-between lg:w-[250px]">
                    <div className="flex flex-col gap-4">
                        <DateTag date={project.date} />
                        <Tags labels={project.techstack} />
                        <div className="text-justify">
                            <ParsedText html={project.description.html} />
                        </div>
                    </div>
                    <Image
                        className="mx-auto mt-8 animate-bounce"
                        alt="mardrew.software"
                        src={'/arrow_down.png'}
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className="px-16 flex flex-col gap-8">
                {project.steps.map((s: ProjectStep, index: number) => {
                    return (
                        <div
                            className={`flex flex-col gap-8 border-solid border-2 border-black p-8 shadow-[6px_6px_0px_0px_#ffe280] rounded-sm`}
                        >
                            <div
                                className={`underline underline-offset-8 text-xl`}
                            >
                                {s.title}
                            </div>
                            <div className="text-justify flex flex-row gap-8">
                                {!s.imageOnRight && s.image && (
                                    <Image
                                        className="max-w-[40%] max-h-[300px]"
                                        alt={s.title}
                                        src={s.image.url}
                                        width={s.image.width}
                                        height={s.image.height}
                                    />
                                )}

                                {s.description && (
                                    <ParsedText html={s.description.html} />
                                )}
                                {s.imageOnRight && s.image && (
                                    <Image
                                        className="max-w-[40%] max-h-[300px]"
                                        alt={s.title}
                                        src={s.image.url}
                                        width={s.image.width}
                                        height={s.image.height}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
