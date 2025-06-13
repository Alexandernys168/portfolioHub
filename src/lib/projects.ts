import fs from 'fs';
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

function isDirectory(source: string) {
  return fs.statSync(source).isDirectory();
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR).filter((name) =>
    isDirectory(path.join(PROJECTS_DIR, name))
  );
}

export function getProjectMeta(slug: string): ProjectMeta {
  const file = path.join(PROJECTS_DIR, slug, 'project.json');
  const raw = fs.readFileSync(file, 'utf8');
  return JSON.parse(raw) as ProjectMeta;
}

export function getAllProjects(): ProjectData[] {
  return getProjectSlugs().map((slug) => {
    const meta = getProjectMeta(slug);
    return { slug, ...meta } as ProjectData;
  });
}

export function getProjectData(slug: string): ProjectData {
  const meta = getProjectMeta(slug);
  const readmePath = path.join(PROJECTS_DIR, slug, 'README.md');
  const demoPath = path.join(PROJECTS_DIR, slug, 'index.js');
  const readme = fs.existsSync(readmePath)
    ? fs.readFileSync(readmePath, 'utf8')
    : undefined;
  const demoCode = fs.existsSync(demoPath)
    ? fs.readFileSync(demoPath, 'utf8')
    : undefined;
  return {
    slug,
    ...meta,
    readme,
    demoCode,
  };
}
