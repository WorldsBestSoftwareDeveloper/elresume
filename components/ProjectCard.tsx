export default function ProjectCard({ title, desc }: any) {
  return (
    <div className="border rounded-2xl p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm opacity-70">{desc}</p>
    </div>
  )
}