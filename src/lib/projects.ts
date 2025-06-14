import { promises as fs } from 'fs';
import path from 'path';

export interface ProjectMeta {
  name: string;
  description?: string;
}

export interface ProjectData extends ProjectMeta {
  slug: string;
  readme?: string;
  demoCode?: string;
}

const PROJECTS_DIR = path.join(process.cwd(), 'projects');

async function isDirectory(source: string) {
  return (await fs.stat(source)).isDirectory();
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    await fs.access(PROJECTS_DIR);
  } catch {
    return [];
  }
  const names = await fs.readdir(PROJECTS_DIR);
  const slugs: string[] = [];
  for (const name of names) {
    if (await isDirectory(path.join(PROJECTS_DIR, name))) {
      slugs.push(name);
    }
  }
  return slugs;
}

export async function getProjectMeta(slug: string): Promise<ProjectMeta> {
  const file = path.join(PROJECTS_DIR, slug, 'project.json');
  const raw = await fs.readFile(file, 'utf8');
  return JSON.parse(raw) as ProjectMeta;
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const slugs = await getProjectSlugs();
  const projects = await Promise.all(slugs.map((slug) => getProjectData(slug)));
  return projects.filter(Boolean) as ProjectData[];
}

export async function getProjectData(slug: string): Promise<ProjectData | null> {
  try {
    const meta = await getProjectMeta(slug);
    const readmePath = path.join(PROJECTS_DIR, slug, 'README.md');
    const demoPath = path.join(PROJECTS_DIR, slug, 'index.js');
    let readme: string | undefined = undefined;
    let demoCode: string | undefined = undefined;

    try {
      readme = await fs.readFile(readmePath, 'utf8');
    } catch {}

    try {
      demoCode = await fs.readFile(demoPath, 'utf8');
    } catch {}

    return {
      slug,
      ...meta,
      readme,
      demoCode,
    };
  } catch {
    // Return null if something goes wrong (e.g., project not found)
    return null;
  }
}
