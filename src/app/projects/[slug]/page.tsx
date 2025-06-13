import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getProjectData, getProjectSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = getProjectData(params.slug);
  if (!project) return notFound();
  return (
    <main className="max-w-2xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      {project.description && <p>{project.description}</p>}
      {project.readme && (
        <div>
          <ReactMarkdown>{project.readme}</ReactMarkdown>
        </div>
      )}
      {project.demoCode && (
        <div>
          <h2 className="text-xl font-semibold">Demo</h2>
          <pre className="bg-gray-100 p-4 rounded">
            <code>{project.demoCode}</code>
          </pre>
        </div>
      )}
      <p>
        <Link href="/" className="text-blue-600 underline">
          ← Back
        </Link>
      </p>
    </main>
  );
}
