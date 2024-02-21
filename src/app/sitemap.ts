import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://mardrew.software',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: 'https://mardrew.software/projects/rrr-admin',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://mardrew.software/projects/nelsondeuscom',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://mardrew.software/projects/ledordszine',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://mardrew.software/projects/invoice-qr-code-reader',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://mardrew.software/projects/fenna-van-breda',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ];
}
