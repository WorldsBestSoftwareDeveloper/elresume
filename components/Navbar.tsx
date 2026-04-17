import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="font-bold">YourName</h1>

      <div className="flex gap-4 items-center">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  )
}