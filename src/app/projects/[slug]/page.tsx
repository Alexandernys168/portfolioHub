import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Header from '@/components/Header'
import { getProjectData, getProjectSlugs } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: { params: any }) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  if (!project) return notFound();
  return (
    <div
      className="min-h-screen bg-[#fcfbf8] flex flex-col items-center"
      style={{ fontFamily: 'Plus Jakarta Sans, "Noto Sans", sans-serif' }}
    >
      {/* Reusable header with Resume link */}
      <Header />
    <main className="max-w-2xl p-8 space-y-6">
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
        <Link href="/projects" className="text-blue-600 underline">
          ← Back to projects
        </Link>
      </p>
    </main>
    </div>
  )
}
