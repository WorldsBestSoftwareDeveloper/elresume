type ProjectCardProps = {
  title: string
  desc: string
  tags: string[]
  href?: string
}

export default function ProjectCard({ title, desc, tags, href }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600">
      <div>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {href ? (
            <a
              href={href}
              className="shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium transition group-hover:border-zinc-500 dark:border-zinc-800"
            >
              View
            </a>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{desc}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
