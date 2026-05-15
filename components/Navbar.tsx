import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <a href="#top" className="text-sm font-bold tracking-wide">
          ElResume
        </a>

        <div className="flex items-center gap-2 text-sm">
          <a className="hidden rounded-full px-3 py-2 text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white sm:inline-flex" href="#skills">
            Skills
          </a>
          <a className="rounded-full px-3 py-2 text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white" href="#projects">
            Projects
          </a>
          <a className="rounded-full px-3 py-2 text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white" href="#contact">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
