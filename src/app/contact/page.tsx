import Header from '@/components/Header';

export default function Contact() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#fcfbf8] overflow-x-hidden"
      style={{ fontFamily: 'Plus Jakarta Sans, "Noto Sans", sans-serif' }}
    >
      {/* Reusable header with Resume link */}
      <Header />
      <main className="flex flex-1 justify-center py-5 px-40">
        <div className="flex flex-col max-w-[960px] flex-1 layout-content-container">
          <div className="flex p-4 @container">
            <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
              <div className="flex gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                  style={{ backgroundImage: 'url("/images/bioImage.png")' }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em]">Alexander Nyström</p>
                  <p className="text-[#9c8749] text-base font-normal leading-normal">
                    {/** Kort om din roll och intressen här, t.ex.: */}
                    Programmerare & AI-intresserad, med erfarenhet av både mjukvaruutveckling och ledarskap.
                  </p>
                  <p className="text-[#9c8749] text-base font-normal leading-normal">
                    Kontakta mig gärna för projekt, samarbeten eller bara ett teknikprat!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Kontaktuppgifter</h2>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex items-center gap-4 min-h-14">
              <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10">
                {/* E-post ikon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                  </svg>
              </div>
              <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">alexander.nystrom1@hotmail.com</p>
            </div>
            <div className="flex items-center gap-4 min-h-14">
              <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10">
                {/* Telefon ikon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.91-.27 11.36 11.36 0 003.58.57 1 1 0 011 1v3.11a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-1h3.09a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27.91l-2.2 2.2z"/></svg>
              </div>
              <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">070 825 67 49</p>
            </div>
            <div className="flex items-center gap-4 min-h-14">
              <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10">
                {/* LinkedIn ikon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M7 8v8" />
                  <circle cx="7" cy="7" r="1" />
                  <path d="M11 16v-4a2 2 0 0 1 4 0v4" />
                </svg>

              </div>
              <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">{/* LinkedIn-url här om du vill */}linkedin.com/</p>
            </div>
            <div className="flex items-center gap-4 min-h-14">
              <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10">
                {/* GitHub ikon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.429 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482
                    0-.238-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608
                    1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.34-2.221-.253-4.555-1.112-4.555-4.951
                    0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.273.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844
                    c.85.004 1.705.115 2.504.337 1.91-1.295 2.748-1.025 2.748-1.025.545 1.383.202 2.403.1 2.656.64.7 1.028 1.595
                    1.028 2.688 0 3.847-2.337 4.695-4.566 4.943.359.309.679.917.679 1.85 0 1.335-.012 2.415-.012 2.744 0 .268.18.58.688.482
                    A10.025 10.025 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z" />
                </svg>

              </div>
              <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">{/* GitHub-url här om du vill */}github.com/</p>
            </div>
            <div className="flex items-center gap-4 min-h-14">
              <div className="text-[#1c180d] flex items-center justify-center rounded-lg bg-[#f4f0e7] shrink-0 size-10">
                {/* Adress ikon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              </div>
              <p className="text-[#1c180d] text-base font-normal leading-normal flex-1 truncate">Oxelvägen 84, 146 52 Tullinge</p>
            </div>
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Språk & IT</h2>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {['Svenska (flytande)', 'Engelska (flytande)', 'Ryska (grundläggande)', 'GitHub', 'Photoshop', 'Videoredigering', 'B-körkort', 'AM-körkort'].map(skill => (
              <div key={skill} className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0e7] pl-4 pr-4">
                <p className="text-[#1c180d] text-sm font-medium leading-normal">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
