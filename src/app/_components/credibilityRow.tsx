import { Credit } from '../_types';
import Image from 'next/image';
import { ParsedText } from './parsedText';
import { DateTag } from './dateTag';

export const CredibilityRow = ({ credit }: { credit: Credit }) => {
    return (
        <div className="flex flex-row gap-4">
            <Image
                className="w-auto h-auto max-h-[70px] max-w-[70px] py-1"
                src={credit.image.url}
                width={credit.image.width}
                height={credit.image.height}
                alt={credit.title}
            />
            <div className="flex flex-col">
                <span>
                    {credit.endDate && credit.startDate && (
                        <>
                            <DateTag date={credit.endDate} />
                            {' - '}
                            <DateTag date={credit.startDate} />
                        </>
                    )}
                    {!credit.endDate && credit.startDate && (
                        <>
                            <DateTag date={credit.startDate} />
                            {' - now'}
                        </>
                    )}
                    {credit.endDate && !credit.startDate && (
                        <DateTag date={credit.endDate} />
                    )}
                </span>
                <div className="font-bold text-xl">{credit.title}</div>
                <ParsedText html={credit.description.html} />
            </div>
        </div>
    );
};
