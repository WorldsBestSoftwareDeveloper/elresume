'use client'

import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-10 w-[86px] items-center rounded-full border border-zinc-300 bg-zinc-100 p-1 text-xs font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
      suppressHydrationWarning
    >
      <span
        className={`grid h-8 w-10 place-items-center rounded-full bg-white shadow-sm transition dark:bg-zinc-950 ${
          isDark ? 'translate-x-9' : 'translate-x-0'
        }`}
      >
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
