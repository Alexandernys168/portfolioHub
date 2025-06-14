import Header from '@/components/Header'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#fcfbf8]"
      style={{ fontFamily: 'Plus Jakarta Sans, "Noto Sans", sans-serif' }}
    >
      {/* Header with resume navigation */}
      <Header />
      <main className="flex flex-col items-center flex-1 p-4 gap-4 max-w-4xl w-full mx-auto">
        {/* Display CV PDF inline */}
        <object data="/cv.pdf" type="application/pdf" className="w-full h-[80vh]">
          <p>Your browser does not support PDFs. <Link href="/cv.pdf">Download PDF</Link>.</p>
        </object>
        {/* Download link below the viewer */}
        <a
          href="/cv.pdf"
          download
          className="flex items-center justify-center bg-[#f4c63d] text-[#1c180d] font-bold rounded-lg h-10 px-4"
        >
          Download PDF
        </a>
      </main>
    </div>
  )
}
