export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-6 py-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">💻 Projects</h1>
        <ul className="space-y-4">
          <li>
            <h2 className="text-xl font-semibold">Project One</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tantangan 30 Hari Koding Python :
              <a
                href="https://drive.google.com/drive/folders/1jB1B6_VFVddYtTSJGudxW9bDWtSeJHNH?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline ml-1"
              >
                Drive Link
              </a>
            </p>
            {/* Penambahan Link Project Nomor Antrian */}
            <p className="text-gray-600 dark:text-gray-400">
              PDF Queue Number Generator :
              <a
                href="LINK_DRIVE_FOLDER_BARU_ANDA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline ml-1"
              >
                Drive Link
              </a>
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Project Two</h2>
            <p className="text-gray-600 dark:text-gray-400">Belum Ada..</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
