import Header from '@/components/Header';

export default function About() {
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
                    Datateknik | Fullstack-utvecklare | AI & Maskininlärning
                  </p>
                  <p className="text-[#9c8749] text-base font-normal leading-normal">
                    Driven och handlingskraftig programmerare med 4 års erfarenhet inom kodning och fullstackutveckling. Brinner för att skapa innovativa, användarfokuserade lösningar och har ett särskilt intresse för AI och maskininlärning. Jag gillar att samarbeta tvärfunktionellt, ta ansvar i projekt och utvecklas inom nya tekniker.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {['React', 'JavaScript', 'TypeScript', 'CSS', 'Next.js', 'Java', 'C#', 'Python', 'MySQL', 'MongoDB', 'Spring Boot', 'ASP.NET', 'AI / ML', 'GitHub', 'Photoshop', 'Videoredigering'].map(skill => (
              <div key={skill} className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-[#f4f0e7] pl-4 pr-4">
                <p className="text-[#1c180d] text-sm font-medium leading-normal">{skill}</p>
              </div>
            ))}
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Utbildning</h2>
          <div className="flex flex-col gap-2 px-4">
            <p className="text-[#1c180d] text-base">Masterprogram, datavetenskap — Linköpings Universitet, Linköping <span className="text-[#9c8749]">2024 - 2026</span></p>
            <p className="text-[#1c180d] text-base">Högskoleingenjör, datateknik — KTH, Flemingsberg <span className="text-[#9c8749]">2021 - 2024</span></p>
          </div>
          <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projekt & Erfarenheter</h2>
          <div className="flex flex-col gap-2 px-4">
            <p className="text-[#1c180d] text-base">
              <span className="font-semibold">TELE2-projekt (2023):</span> Utvecklade en fullstack-applikation för realtidsvisualisering av transaktionsstatistik. Ansvarade för att ta fram nya funktioner som förbättrade användarupplevelse och funktionalitet.
            </p>
            <p className="text-[#1c180d] text-base">
              <span className="font-semibold">Examensarbete, AIK Ungdomsfotboll (2024):</span> Implementerade bayesianska nätverksmodeller för att identifiera nyckelfaktorer i spelarprestationer och stödja träningsbeslut.
            </p>
            <p className="text-[#1c180d] text-base">
              <span className="font-semibold">Badmintontränare, Bromma Badmintonklubb:</span> Fem års erfarenhet av tränarrollen har utvecklat min kommunikationsförmåga och gett mig stor vana av planering, samarbete och ledarskap.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
