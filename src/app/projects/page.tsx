import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  return (
    <div
      className="min-h-screen flex flex-col bg-[#fcfbf8]"
      style={{ fontFamily: 'Plus Jakarta Sans, "Noto Sans", sans-serif' }}
    >
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0e7] px-10 py-3">
        <div className="flex items-center gap-4 text-[#1c180d]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M8.578 8.578a18 18 0 104.032 26.781L24 24 8.578 8.578z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0"><rect width="48" height="48" fill="white" /></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#1c180d] text-lg font-bold leading-tight tracking-[-0.015em]">Portfolio</h2>
        </div>
        <nav className="flex flex-1 justify-end gap-9 text-sm font-medium">
          <Link href="/about" className="text-[#1c180d]">About</Link>
          <Link href="/projects" className="text-[#1c180d]">Projects</Link>
          <Link href="/contact" className="text-[#1c180d]">Contact</Link>
        </nav>
      </header>
      <main className="flex-1 max-w-[960px] w-full mx-auto p-8 space-y-6">
        <h1 className="text-[32px] font-bold leading-tight tracking-light text-[#1c180d]">My Projects</h1>
        <p className="text-[#9c8749] text-sm">A selection of my most recent work.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const preview = project.readme || project.demoCode || ''
            const snippet = preview.split('\n').slice(0, 4).join('\n')
            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
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
          })}
        </div>
      </main>
      <footer className="flex flex-col items-center gap-6 px-5 py-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="text-[#9c8749] text-base">Privacy Policy</a>
          <a href="#" className="text-[#9c8749] text-base">Terms of Service</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="text-[#9c8749]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M247.39 68.94A8 8 0 00240 64h-30.43A48.66 48.66 0 00168.1 40a46.91 46.91 0 00-33.75 13.7A47.9 47.9 0 00120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 00-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a110.93 110.93 0 0021.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 00-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 001.73-8.72zM202.39 98.35a8 8 0 00-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08 11.51-6.25 27.56-17 37.88-32.48A8 8 0 0092 169.08c-.47-.27-43.91-26.34-44-96 16 13 45.25 33.17 78.67 38.79A8 8 0 00136 104V88a32 32 0 019.6-22.92A30.94 30.94 0 01167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 007.33 4.79h16z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-[#9c8749]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128 80a48 48 0 1048 48 48.05 48.05 0 00-48-48zm0 80a32 32 0 1132-32 32 32 0 01-32 32zm48-136H80A56.06 56.06 0 0024 80v96a56.06 56.06 0 0056 56h96a56.06 56.06 0 0056-56V80a56.06 56.06 0 00-56-56zm40 152a40 40 0 01-40 40H80a40 40 0 01-40-40V80A40 40 0 0180 40h96a40 40 0 0140 40zm-24-84a12 12 0 1112-12 12 12 0 01-12 12z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-[#9c8749]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216 24H40A16 16 0 0024 40v176a16 16 0 0016 16h176a16 16 0 0016-16V40a16 16 0 00-16-16zm0 192H40V40h176zm-120-104v64a8 8 0 01-16 0v-64a8 8 0 0116 0zm88 28v36a8 8 0 01-16 0v-36a20 20 0 00-40 0v36a8 8 0 01-16 0v-64a8 8 0 0115.79-1.78A36 36 0 01184 140zm-84-56a12 12 0 11-12-12 12 12 0 0112 12z" />
            </svg>
          </a>
        </div>
        <p className="text-[#9c8749] text-base">@2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}
