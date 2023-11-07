const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    nextConfig,
    withNextVideo,
    images: {
        domains: ['ik.imagekit.io', 'media.graphassets.com']
    }
};
