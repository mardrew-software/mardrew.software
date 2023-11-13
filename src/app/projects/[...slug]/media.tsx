'use client';
import { Image as ProjectImage } from '@/app/_types';
import Image from 'next/image';

export const Media = ({
    image,
    title
}: {
    image: ProjectImage;
    title: string;
}) => {
    return (
        <>
            {image.mimeType.includes('video') ? (
                <video className='h-full lg:max-w-[40%]' controls autoPlay={true} muted playsInline >
                    <source src={image.url} type="video/mp4"/>                  
                </video>
            ) : (
                <Image
                    className="lg:max-w-[40%]"
                    alt={title}
                    src={image.url}
                    width={image.width}
                    height={image.height}
                />
            )}
        </>
    );
};
