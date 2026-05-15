import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Responsive UI',
  'Performance',
  'Accessibility',
  'Git',
]

const projects = [
  {
    title: 'Resume Portfolio',
    desc: 'A fast personal portfolio built with the App Router, dark mode, responsive sections, and clear project storytelling.',
    tags: ['Next.js', 'Tailwind', 'Dark mode'],
  },
  {
    title: 'Business Landing Page',
    desc: 'A conversion-focused website concept with reusable sections, mobile-first layout, and polished calls to action.',
    tags: ['React', 'UI Design', 'Responsive'],
  },
  {
    title: 'Dashboard Interface',
    desc: 'A clean admin-style interface for tracking metrics, organizing actions, and presenting dense information clearly.',
    tags: ['TypeScript', 'Components', 'UX'],
  },
]

const stats = [
  ['8+', 'Core skills'],
  ['3', 'Featured projects'],
  ['100%', 'Responsive layout'],
]

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1.35fr_0.65fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Frontend Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
            Building clean, modern web experiences that feel easy to use.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            I create responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS, focusing on clarity,
            performance, and thoughtful details that make products feel finished.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:border-zinc-600 dark:border-zinc-700 dark:hover:border-zinc-400"
            >
              Download Resume
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Currently focused on</p>
            <p className="mt-2 text-xl font-semibold">Polished frontend systems and portfolio-ready web apps.</p>
          </div>
          <dl className="mt-5 grid gap-4">
            {stats.map(([value, label]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">{label}</dt>
                <dd className="text-2xl font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section id="skills" className="border-y border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Skills</p>
              <h2 className="mt-2 text-2xl font-semibold">Tools I use to ship clean interfaces</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Practical frontend skills with an eye for layout, speed, and maintainable components.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium dark:border-zinc-800 dark:bg-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold">Selected work</h2>
          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            A focused set of projects that show responsive layout, component thinking, and polish. Replace these with
            live links as your portfolio grows.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Approach</p>
            <h2 className="mt-2 text-3xl font-semibold">How I build</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Mobile-first layouts', 'Readable components', 'Fast, accessible pages'].map((item) => (
              <div key={item} className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col gap-6 rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold">Ready to build something polished?</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">Update this email with your real contact address.</p>
          </div>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            your@email.com
          </a>
        </div>
      </section>
    </main>
  )
}
