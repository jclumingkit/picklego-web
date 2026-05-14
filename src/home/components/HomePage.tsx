import '../styles/home.css'

const APP_URL = 'https://picklego.app/'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jaycee2426.pickleballmatchfinder'

const styleRole = {
  primaryCta:
    'inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4ff00] to-[#b8de00] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#1f3041] shadow-[0_0_36px_rgba(212,255,0,0.45)] transition hover:scale-[1.01]',
  secondaryCta:
    'inline-flex items-center justify-center rounded-2xl bg-[#d9eaff] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#1f3041] transition hover:bg-[#cfe5ff]',
  sectionLabel:
    'text-sm font-black uppercase tracking-[0.2em] text-[#4c5d70]',
  sectionLabelOnDark:
    'text-sm font-black uppercase tracking-[0.2em] text-[#d4ff00]',
  card:
    'rounded-[2rem] bg-white p-7 shadow-[0_24px_60px_rgba(31,48,65,0.1)]',
} as const

const featureCards = [
  {
    tag: 'Find',
    title: 'Nearby matches',
    copy: 'Browse games around you, filter by skill level, and see open slots before joining.',
    muted: true,
  },
  {
    tag: 'Host',
    title: 'Create a match',
    copy: 'Set the court, time, skill level, and number of players. PickleGo helps players find your game.',
    muted: false,
  },
  {
    tag: 'Chat',
    title: 'Coordinate fast',
    copy: 'Use in-match chat to confirm details, update players, and keep everyone in the loop.',
    muted: true,
  },
]

const promoEntries = [
  { label: 'Join a match', points: '+1', dark: false },
  { label: 'Create a match', points: '+1', dark: false },
  { label: 'Attend a match', points: '+1', dark: false },
  { label: 'Host a full match', points: '+3', dark: true },
]

const showcaseScreens = [
  {
    src: '/picklego-screens/explore_matches_screen.png',
    alt: 'PickleGo nearby matches screen showing open games around the player.',
  },
  {
    src: '/picklego-screens/match_details_creator_view.png',
    alt: 'PickleGo match details screen for hosts managing game setup and player slots.',
  },
]

const highlights = [
  {
    src: '/picklego-screens/create_match_screen.png',
    alt: 'Create match screen where players set schedule, court, and skill level.',
    caption: 'Create match flow',
  },
  {
    src: '/picklego-screens/match_channel_screen.png',
    alt: 'In-match chat channel used by players to coordinate logistics quickly.',
    caption: 'Match chat flow',
  },
]

function ScreenImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(event) => {
        event.currentTarget.closest('.screen-wrap')?.classList.add('screen-missing')
      }}
    />
  )
}

export function HomePage() {
  return (
    <>
      <main className="pg-home overflow-hidden bg-[#f3f7ff] text-[#1f3041] antialiased">
        <section className="relative isolate min-h-screen bg-[#f3f7ff]">
          <div className="bg-grid absolute inset-0 -z-10 opacity-60"></div>
          <div className="absolute right-[-12rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#d4ff00] opacity-40 blur-3xl"></div>
          <div className="absolute bottom-[-12rem] left-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#cfe5ff] opacity-80 blur-3xl"></div>

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            <a href="#" className="flex items-center gap-3" aria-label="PickleGo home">
              <img
                src="/icon.png"
                alt="PickleGo logo mark"
                className="h-11 w-11 rounded-2xl object-cover shadow-[0_0_36px_rgba(212,255,0,0.45)]"
              />
              <span className="text-xl font-black italic tracking-[-0.05em]">PickleGo</span>
            </a>

            <a href={PLAY_STORE_URL} className={`${styleRole.primaryCta} hidden sm:inline-flex`}>
              Get Android App
            </a>
          </nav>

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-14">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_24px_60px_rgba(31,48,65,0.1)]">
                <span className="h-3 w-3 rounded-full bg-[#d4ff00] shadow-[0_0_36px_rgba(212,255,0,0.45)]"></span>
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4c5d70]">
                  Philippines · Android First
                </span>
              </div>

              <h1 className="max-w-3xl text-6xl font-black uppercase italic leading-[0.88] tracking-[-0.07em] text-[#1f3041] sm:text-7xl lg:text-8xl">
                Find matches.<br />Meet players.<br />Play more.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4c5d70]">
                PickleGo helps local pickleball players discover nearby matches, create games,
                coordinate in chat, and find courts without the back-and-forth.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={PLAY_STORE_URL} className={styleRole.primaryCta}>
                  Download on Play Store
                </a>
                <a href="#how-it-works" className={styleRole.secondaryCta}>
                  See how it works
                </a>
              </div>

              <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
                {['Create', 'Join', 'Chat'].map((label, index) => (
                  <div key={label} className={styleRole.card}>
                    <div className="text-3xl font-black tracking-[-0.05em]">{`0${index + 1}`}</div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[#4c5d70]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[34rem] lg:min-h-[43rem]">
              <div className="absolute left-4 top-14 hidden h-36 w-36 rounded-[2rem] bg-[#d4ff00] opacity-90 blur-sm lg:block"></div>
              <div className="absolute right-3 top-4 h-[30rem] w-[20rem] rotate-6 rounded-[3rem] bg-[#1f3041] opacity-10"></div>

              <div className="phone-frame screen-wrap absolute left-2 top-12 w-[43%] -rotate-6 shadow-[0_24px_60px_rgba(31,48,65,0.1)] sm:left-10 lg:left-8 lg:top-20">
                <ScreenImage src={showcaseScreens[0].src} alt={showcaseScreens[0].alt} className="w-full" />
              </div>
              <div className="phone-frame screen-wrap absolute right-2 top-0 w-[47%] rotate-3 shadow-[0_24px_60px_rgba(31,48,65,0.1)] sm:right-12 lg:right-10">
                <ScreenImage src={showcaseScreens[1].src} alt={showcaseScreens[1].alt} className="w-full" />
              </div>
              <div className="absolute bottom-8 left-1/2 w-[70%] -translate-x-1/2 rounded-[2.25rem] bg-white/80 p-4 shadow-[0_24px_60px_rgba(31,48,65,0.1)] backdrop-blur-md sm:w-[58%]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4c5d70]">
                      Live Match Pulse
                    </p>
                    <p className="mt-1 text-2xl font-black tracking-[-0.05em]">3 / 4 Players</p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d4ff00] text-2xl font-black text-[#1f3041]">
                    +
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#d9eaff]">
                  <div className="h-full w-3/4 rounded-full bg-[#d4ff00] shadow-[0_0_36px_rgba(212,255,0,0.45)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-[#1f3041] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className={styleRole.sectionLabelOnDark}>Built for the local court loop</p>
              <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                Less planning. More playing.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.tag}
                  className={`rounded-[2rem] p-7 ${
                    card.muted ? 'bg-white/10 backdrop-blur-md' : 'bg-white text-[#1f3041]'
                  }`}
                >
                  <div
                    className={`mb-8 inline-flex rounded-2xl px-3 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                      card.muted ? 'bg-[#d4ff00] text-[#1f3041]' : 'bg-[#d9eaff] text-[#1f3041]'
                    }`}
                  >
                    {card.tag}
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{card.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${card.muted ? 'text-white/70' : 'text-[#4c5d70]'}`}>
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#f3f7ff] px-6 py-20 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-28 bg-[#1f3041]"></div>
          <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-[0_24px_60px_rgba(31,48,65,0.1)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[2rem] bg-[#d9eaff] p-8">
              <div>
                <p className={styleRole.sectionLabel}>Launch Raffle</p>
                <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] tracking-[-0.06em] sm:text-5xl">
                  Play more. Earn entries.
                </h2>
                <p className="mt-6 text-[#4c5d70]">
                  During launch, active users can earn raffle entries by joining, creating, and
                  attending matches.
                </p>
              </div>

              <div className="mt-9 grid gap-3">
                {promoEntries.map((entry) => (
                  <div
                    key={entry.label}
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 ${
                      entry.dark ? 'bg-[#1f3041] text-white' : 'bg-white text-[#1f3041]'
                    }`}
                  >
                    <span className="font-bold">{entry.label}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-black ${
                        entry.dark ? 'bg-[#d4ff00] text-[#1f3041]' : 'bg-[#d4ff00] text-[#1f3041]'
                      }`}
                    >
                      {entry.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:items-start">
              <div className="flex justify-center sm:translate-y-10">
                <figure className="phone-frame screen-wrap mx-auto w-full max-w-[18rem] shadow-[0_24px_60px_rgba(31,48,65,0.1)]">
                  <ScreenImage
                    src={highlights[1].src}
                    alt={highlights[1].alt}
                    className="h-auto w-full"
                  />
                  <figcaption className="sr-only">{highlights[1].caption}</figcaption>
                </figure>
              </div>

              <div className="flex justify-center">
                <figure className="phone-frame screen-wrap mx-auto w-full max-w-[18rem] shadow-[0_24px_60px_rgba(31,48,65,0.1)]">
                  <ScreenImage
                    src={highlights[0].src}
                    alt={highlights[0].alt}
                    className="h-auto w-full"
                  />
                  <figcaption className="sr-only">{highlights[0].caption}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f7ff] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className={styleRole.sectionLabel}>Court discovery</p>
                <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                  Know where you&apos;re going.
                </h2>
                <p className="mt-6 max-w-xl text-[#4c5d70]">
                  Search courts, check directions, and coordinate with the players joining your
                  match. PickleGo keeps court discovery and match planning in one flow.
                </p>
              </div>
              <div className="screen-wrap rounded-[2.5rem] bg-white p-5 shadow-[0_24px_60px_rgba(31,48,65,0.1)]">
                <ScreenImage
                  src="/picklego-screens/match_routing.png"
                  alt="PickleGo court route screen showing directions to the selected court."
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#1f3041] px-6 py-20 text-white lg:px-8">
          <div className="absolute right-[-10rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[#d4ff00] opacity-30 blur-3xl"></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className={styleRole.sectionLabelOnDark}>Download PickleGo</p>
              <h2 className="mt-4 text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                Your next match is closer than you think.
              </h2>
              <p className="mt-6 max-w-xl text-white/70">
                Available first on Android through Google Play. Tap the button to download and get
                into your next local game.
              </p>
              <a href={PLAY_STORE_URL} className={`${styleRole.primaryCta} mt-9`}>
                Open Play Store
              </a>
            </div>

            <div className="rounded-[2.25rem] bg-white p-6 text-[#1f3041] shadow-[0_24px_60px_rgba(31,48,65,0.1)]">
              <div className="mx-auto grid w-full max-w-[22rem] aspect-[16/10] place-items-center rounded-[1.75rem] bg-[#d9eaff] p-4 sm:p-5">
                <img
                  src="/picklego-screens/other-promo-imgs/picklego-promo-banner.png"
                  alt="PickleGo promotional banner art"
                  className="h-full w-full rounded-xl object-contain"
                />
              </div>
              <p className="mt-5 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-[#4c5d70]">
                Trusted by local players
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f3041] px-6 pb-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PickleGo. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-[#d4ff00]">
              Privacy Policy
            </a>
            <a href={`${APP_URL}terms`} className="hover:text-[#d4ff00]">
              Terms
            </a>
            <a href={`${APP_URL}contact`} className="hover:text-[#d4ff00]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
