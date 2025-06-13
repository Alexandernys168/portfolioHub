import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();
  return (
    <main className="max-w-2xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="text-blue-600 underline">
              {project.name}
            </Link>
            {project.description && <p>{project.description}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
