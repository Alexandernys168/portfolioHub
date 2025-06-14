import Link from 'next/link'

export default function About() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fcfbf8] overflow-x-hidden"
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
        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9 text-sm font-medium">
            <Link href="/" className="text-[#1c180d]">Home</Link>
            <Link href="/projects" className="text-[#1c180d]">Projects</Link>
            <Link href="/about" className="text-[#1c180d]">About</Link>
            <Link href="/contact" className="text-[#1c180d]">Contact</Link>
          </nav>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4c63d] text-[#1c180d] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Resume</span>
          </button>
        </div>
      </header>
      <main className="flex flex-1 justify-center py-5 px-40">
        <div className="flex flex-col max-w-[960px] flex-1 layout-content-container">
          <div className="flex p-4 @container">
            <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
              <div className="flex gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0AYQlK0s40ALA3xcbwQ6_mCZX353vjoMAbfsn1xxsAKNTqX1XIUGEplzXHdwFFyzaSrmEkthywS2umkOqwcvK-9gdLmVhWHrdyQ5azq_dVIIOaafrsxlMW41QvubZ_A5pE13L71j_HMMBnxr5KOfLOLMDtTmX_RzRmZL2Eq9AwF0LPhZ8AgmHdbiUU5K7FWIBLHncrbJArFErW85xKqGnMyvFYqFV2ZDjozgY4LS4hxPcMnN1NAloqYCJhsVwpKqf5DWbyaE_htJn")' }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em]">Liam Harper</p>
                  <p className="text-[#9c8749] text-base font-normal leading-normal">Software Engineer | Nature Enthusiast</p>
                  <p className="text-[#9c8749] text-base font-normal leading-normal">
                    Passionate about crafting innovative solutions and exploring the great outdoors. Experienced in full-stack development with a focus on creating user-centric applications. Let&apos;s connect and build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {['JavaScript','React','Node.js','Python','Django','SQL','Git','HTML','CSS','UI/UX Design'].map(skill => (
              <div key={skill} className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0e7] pl-4 pr-4">
                <p className="text-[#1c180d] text-sm font-medium leading-normal">{skill}</p>
              </div>
            ))}
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact</h2>
          <div className="flex items-center gap-4 bg-[#fcfbf8] px-4 min-h-14">
            <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10" data-icon="Envelope" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224 48H32a8 8 0 00-8 8v136a16 16 0 0016 16h184a16 16 0 0016-16V56a8 8 0 00-8-8zm-96 85.15L52.57 64h150.86zM98.71 128L40 181.81V74.19zm11.84 10.85l12 11.05a8 8 0 0010.82 0l12-11.05 58 53.15H52.57zm46.74-10.85L216 74.18v107.64z" />
              </svg>
            </div>
            <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">liam.harper@email.com</p>
          </div>
          <div className="flex items-center gap-4 bg-[#fcfbf8] px-4 min-h-14">
            <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216 24H40A16 16 0 0024 40v176a16 16 0 0016 16h176a16 16 0 0016-16V40a16 16 0 00-16-16zm0 192H40V40h176zm-120-104v64a8 8 0 01-16 0v-64a8 8 0 0116 0zm88 28v36a8 8 0 01-16 0v-36a20 20 0 00-40 0v36a8 8 0 01-16 0v-64a8 8 0 0115.79-1.78A36 36 0 01184 140zm-84-56a12 12 0 11-12-12 12 12 0 0112 12z" />
              </svg>
            </div>
            <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">linkedin.com/in/liam-harper</p>
          </div>
          <div className="flex items-center gap-4 bg-[#fcfbf8] px-4 min-h-14">
            <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10" data-icon="GithubLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208.31 75.68A59.78 59.78 0 00202.93 28a8 8 0 00-6.93-4 59.75 59.75 0 00-48 24H124A59.75 59.75 0 0076 24a8 8 0 00-6.93 4 59.78 59.78 0 00-5.38 47.68A58.14 58.14 0 0056 104v8a56.06 56.06 0 0048.44 55.47A39.8 39.8 0 0096 192v8H72a24 24 0 01-24-24A40 40 0 008 136a8 8 0 000 16 24 24 0 0124 24 40 40 0 0040 40H96v16a8 8 0 0016 0V192a24 24 0 0148 0v40a8 8 0 0016 0V192a39.8 39.8 0 00-8.44-24.53A56.06 56.06 0 00216 112v-8a58.14 58.14 0 00-7.69-28.32zM200 112a40 40 0 01-40 40H112a40 40 0 01-40-40v-8a41.74 41.74 0 016.9-22.48A8 8 0 0080 73.83a43.81 43.81 0 01.79-33.58 43.88 43.88 0 0132.32 20.06A8 8 0 00119.82 64h32.35a8 8 0 006.74-3.69 43.87 43.87 0 0132.32-20.06A43.81 43.81 0 01192 73.83a8.09 8.09 0 001 7.65A41.72 41.72 0 01200 104z" />
              </svg>
            </div>
            <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">github.com/liam-harper</p>
          </div>
        </div>
      </main>
    </div>
  )
}
