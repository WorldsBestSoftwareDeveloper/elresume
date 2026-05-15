type ProjectCardProps = {
  title: string
  desc: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export default function ProjectCard({ title, desc, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600">
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{desc}</p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold transition hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
