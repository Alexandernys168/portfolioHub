import Link from 'next/link'

/** Global header displayed on all pages */
export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0e7] px-10 py-3">
      <div className="flex items-center gap-4 text-[#1c180d]">
        <div className="size-4">
          {/* Logo icon */}
          <svg viewBox="0 0 48 48" fill="none"><g><path d="M8.578 8.578a18 18 0 104.032 26.781L24 24 8.578 8.578z" fill="currentColor" /></g></svg>
        </div>
        <h2 className="text-[#1c180d] text-lg font-bold leading-tight tracking-[-0.015em]">Portfolio</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9 text-sm font-medium">
          <Link href="/" className="text-[#1c180d]">Home</Link>
          <Link href="/projects" className="text-[#1c180d]">Projects</Link>
          <Link href="/about" className="text-[#1c180d]">About</Link>
          <Link href="/contact" className="text-[#1c180d]">Contact</Link>
        </nav>
        {/* Resume button now available globally */}
        <Link
          href="/resume"
          className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4c63d] text-[#1c180d] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Resume</span>
        </Link>
      </div>
    </header>
  )
}
