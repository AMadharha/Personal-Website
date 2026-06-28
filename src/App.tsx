const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.15),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(2,6,23,1))]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/90">
            Personal Website
          </p>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-5xl font-semibold leading-none tracking-tight text-white sm:text-7xl">
              A portfolio scaffold ready for motion, depth, and clean navigation. BRUH
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              This branch is wired for a Vite + React + TypeScript app and can be started locally
              or inside Docker with one command.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Stack</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">React, TypeScript, Vite, Tailwind, Docker.</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/80">Layout</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Built as a foundation for the 3D-first homepage you described.</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Run</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Use Docker Compose for dev, or a production image with Nginx.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto w-full max-w-6xl px-6 pb-12 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Projects</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Use this section for featured work, live demos, and case studies.
            </p>
          </div>
          <div id="experience" className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Experience</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Add your timeline, roles, or a short narrative here as the site grows.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-2 text-sm text-slate-400 sm:px-10 lg:px-12">
        Contact details and social links can live here.
      </footer>
    </main>
  );
}