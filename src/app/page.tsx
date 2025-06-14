import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#162013] overflow-x-hidden group/design-root"
      style={{ fontFamily: 'Manrope, \"Noto Sans\", sans-serif' }}
    >
      <div className="flex flex-1 justify-center py-5 px-4">
        <div className="flex flex-col w-full max-w-[960px] flex-1 layout-content-container">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzcY1P239GQQ1q03N1bckzYJELUCzls7AteDq--Mzcq0nj_pCiq7uBbUgc_WI9eNZhsPLn7NCQEd7LCGN87rGoAXf4VEbt9UgBM5tNE588LRFdMmnE0uyvzinKqK7xvM26q-AW72BTR_kUzaWIV9uO_BHKNshoHXUsJSboC2jofe16AH2PFmVtV8JY5p0Hz0WwpUmLP3iahBSf1vlE0iV-EsPxqHqTfw4BzhfJBea8qAkVroXuuL_Mzy_Dp4D3vnUm5HlbZ-Rkzyo5")',
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight">
                    Welcome to My Digital Garden
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                    Where technology meets the tranquility of nature.
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#53d22c] text-[#162013] text-sm font-bold @[480px]:text-base"
                >
                  <span className="truncate">Explore Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <Link href="/about" className="text-[#a2c398] text-base min-w-40">
                About
              </Link>
              <Link href="/contact" className="text-[#a2c398] text-base min-w-40">
                Contact
              </Link>
              <Link href="/projects" className="text-[#a2c398] text-base min-w-40">
                Projects
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" aria-label="Twitter" className="text-[#a2c398]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#a2c398]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-[#a2c398]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                </svg>
              </a>
            </div>
            <p className="text-[#a2c398] text-base">
              @2024 Digital Garden. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
