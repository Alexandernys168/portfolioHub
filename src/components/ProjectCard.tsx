import Link from 'next/link'
import Image from 'next/image'
import { ProjectData } from '@/lib/projects'

export default function ProjectCard({ project }: { project: ProjectData }) {
  const preview = project.readme || project.demoCode || ''
  const snippet = preview.split('\n').slice(0, 4).join('\n')

  if (project.external) {
    return (
      <div className="block p-4 border rounded-lg shadow bg-white/70" key={project.slug}>
        {project.demoImage && (
          <div className="mb-2">
            <Image src={project.demoImage} alt="demo" width={400} height={200} className="w-full h-48 object-cover rounded" />
          </div>
        )}
        <h2 className="text-base font-medium text-[#1c180d] mb-1">{project.name}</h2>
        {project.description && <p className="mb-2 text-sm text-[#9c8749]">{project.description}</p>}
        {project.tech && (
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs bg-gray-200 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded"
          >
            Visit
          </a>
        )}
      </div>
    )
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block p-4 border rounded-lg shadow bg-white/70 hover:bg-white"
    >
      <h2 className="text-base font-medium text-[#1c180d] mb-1">{project.name}</h2>
      {project.description && <p className="mb-2 text-sm text-[#9c8749]">{project.description}</p>}
      {snippet && (
        <pre className="text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap">
          <code>{snippet}</code>
        </pre>
      )}
    </Link>
  )
}
