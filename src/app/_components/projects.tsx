import { Patrick_Hand } from 'next/font/google';
import { getProjects } from '../_api/getProjects';
import Carrousel from './carrousel';
import { ProjectsContent } from './projectsContent';

export const Projects = async () => {
    const projects = await getProjects();
    return <ProjectsContent projects={projects} />;
};
