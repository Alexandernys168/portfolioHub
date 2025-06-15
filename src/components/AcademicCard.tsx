import Image from 'next/image'
import { AcademicWork } from '@/lib/academic'

export default function AcademicCard({ work }: { work: AcademicWork }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white/70 hover:bg-white transition" key={work.name}>
      {work.demoImage && (
        <div className="mb-2">
          <Image src={work.demoImage} alt="thumbnail" width={400} height={200} className="w-full h-48 object-cover rounded" />
        </div>
      )}
      <h2 className="text-base font-medium text-[#1c180d] mb-1">{work.name}</h2>
      {work.description && <p className="mb-2 text-sm text-[#9c8749]">{work.description}</p>}
      {work.tech && (
        <div className="flex flex-wrap gap-2 mb-2">
          {work.tech.map((t) => (
            <span key={t} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      )}
      {work.link && (
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded"
        >
          Read More
        </a>
      )}
      {work.pdf && (
        <a
          href={work.pdf}
          download
          className="inline-block mt-2 ml-2 px-3 py-1 bg-green-600 text-white rounded"
        >
          Download PDF
        </a>
      )}
    </div>
  )
}
