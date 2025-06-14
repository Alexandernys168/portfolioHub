import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getAllProjects() // ← Du måste hämta projekten först!
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold text-center">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const preview = project.readme || project.demoCode || ''
          const snippet = preview.split('\n').slice(0, 4).join('\n')
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="block p-4 border rounded shadow bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-700"
            >
              <h2 className="text-xl font-semibold mb-1">{project.name}</h2>
              {project.description && <p className="mb-2 text-sm">{project.description}</p>}
              {snippet && (
                <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded whitespace-pre-wrap">
                  <code>{snippet}</code>
                </pre>
              )}
            </Link>
          )
        })}
      </div>
    </main>
  )
}
