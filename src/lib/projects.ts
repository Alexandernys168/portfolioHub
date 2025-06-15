import { promises as fs } from 'fs';
import path from 'path';

export interface ProjectMeta {
  name: string;
  description?: string;
  external?: boolean;
  link?: string;
  demoImage?: string;
  tech?: string[];
  tags?: string[];
  featured?: boolean;
}

export interface ProjectData extends ProjectMeta {
  slug: string;
  readme?: string;
  demoCode?: string;
}

const PROJECTS_DIR = path.join(process.cwd(), 'projects');

async function exists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
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
    const full = path.join(PROJECTS_DIR, name);
    const stat = await fs.stat(full);
    if (stat.isDirectory()) {
      slugs.push(name);
    } else if (stat.isFile() && name.endsWith('.json')) {
      slugs.push(name.replace(/\.json$/, ''));
    }
  }
  return slugs;
}

export async function getProjectMeta(slug: string): Promise<ProjectMeta> {
  const dirFile = path.join(PROJECTS_DIR, slug, 'project.json');
  try {
    const raw = await fs.readFile(dirFile, 'utf8');
    return JSON.parse(raw) as ProjectMeta;
  } catch {}

  const file = path.join(PROJECTS_DIR, `${slug}.json`);
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
    const dir = path.join(PROJECTS_DIR, slug);
    let readme: string | undefined;
    let demoCode: string | undefined;

    if (await exists(dir)) {
      const readmePath = path.join(dir, 'README.md');
      const demoPath = path.join(dir, 'index.js');
      try {
        readme = await fs.readFile(readmePath, 'utf8');
      } catch {}
      try {
        demoCode = await fs.readFile(demoPath, 'utf8');
      } catch {}
    }

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
