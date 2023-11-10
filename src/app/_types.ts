export type Project = {
    date: string;
    slug: string;
    id: string;
    image: Image;
    title: string;
    techstack: string[];
    steps: ProjectStep[];
    description: Description;
    smallDescription: string;
};

export type Image = {
    id: string;
    height: number;
    width: number;
    url: string;
    mimeType: string;
};

export type ProjectStep = {
    id: string;
    image: Image;
    title: string;
    description: Description;
    imageOnRight: boolean;
};

export type Description = {
    text: string;
    html: string;
};

export type Credit = {
    description: Description,
      endDate: string,
      id: string,
      image: Image,
      startDate: string,
      title: string,
      type: 'education' | 'experience'
}