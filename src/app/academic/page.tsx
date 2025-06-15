import Header from '@/components/Header'
import AcademicCard from '@/components/AcademicCard'
import { getAcademicWorks, AcademicWork } from '@/lib/academic'

export default async function AcademicPage() {
  const works = await getAcademicWorks()
  const featured = works.filter((w) => w.featured)
  const others = works.filter((w) => !w.featured)

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: 'Plus Jakarta Sans, "Noto Sans", sans-serif' }}
    >
      <Header />
      <main className="flex-1 max-w-[960px] w-full mx-auto p-8 space-y-6">
        <h1 className="text-[32px] font-bold leading-tight tracking-light text-[#1c180d]">Academic Work</h1>
        {works.length === 0 && (
          <p className="text-[#9c8749]">Coming soon.</p>
        )}
        {featured.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Featured</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((work: AcademicWork) => (
                <AcademicCard key={work.name} work={work} />
              ))}
            </div>
          </section>
        )}
        {others.length > 0 && (
          <section className="space-y-4">
            {featured.length > 0 && <h2 className="text-xl font-bold">More Works</h2>}
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((work: AcademicWork) => (
                <AcademicCard key={work.name} work={work} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
