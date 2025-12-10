export function ProjectsCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">Proyek Saya</h3>
      <p className="text-gray-600 mb-4">
        Berikut adalah beberapa proyek yang telah saya kerjakan:
      </p>

      <ul className="space-y-3">
        <li className="text-sm">
          <span className="font-medium">1. Project Website Portfolio</span>
          <p className="text-gray-500">Dibuat dengan Next.js dan Tailwind CSS</p>
        </li>
        <li className="text-sm">
          <span className="font-medium">2. Mobile App Todo</span>
          <p className="text-gray-500">Aplikasi manajemen tugas dengan React Native</p>
        </li>
        <li className="text-sm">
          <span className="font-medium">3. E-Commerce Platform</span>
          <p className="text-gray-500">Full-stack dengan Node.js dan MongoDB</p>
        </li>
      </ul>
    </div>
  )
}
