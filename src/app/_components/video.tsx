'use client';
import { Image } from '../_types';
import ReactPlayer from 'react-player';

export const Video = ({ video }: { video: Image }) => {
    return (
        <ReactPlayer
            width="100%"
            height="100%"
            config={{ file: { forceVideo: true } }}
            className="h-full lg:overflow-auto"
            url={video.url}
        />
    );
};
