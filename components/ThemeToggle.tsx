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
      className="grid size-10 place-items-center rounded-full border border-zinc-200 text-sm font-semibold transition hover:border-zinc-500 dark:border-zinc-800"
      suppressHydrationWarning
    >
      {isDark ? 'L' : 'D'}
    </button>
  )
}
