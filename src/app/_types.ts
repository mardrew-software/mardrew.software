export type Project = {
    date: string;
    slug: string;
    id: string;
    image: ProjectImage;
    title: string;
    techstack: string[];
    steps: ProjectStep[];
    description: ProjectDescription;
    smallDescription: string;
};

export type ProjectImage = {
    id: string;
    height: number;
    width: number;
    url: string;
    mimeType: string;
};

export type ProjectStep = {
    id: string;
    image: ProjectImage;
    title: string;
    description: ProjectDescription;
    imageOnRight: boolean;
};

export type ProjectDescription = {
    text: string;
    html: string;
};
