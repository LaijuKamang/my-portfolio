"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-4 py-4 relative">
      {/* Tombol Mode */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="border px-3 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? "☀️ Terang" : "🌙 Gelap"}
        </button>
      </div>

      {/* Konten Tengah */}
      <section className="h-screen flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
        {/* Nama + Garis Merah */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Hen Umbu Laiya Sobang</h1>
          <div className="h-[3px] w-[260px] bg-red-600 mx-auto mt-1 rounded-full" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Link href="/projects" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h2 className="text-base font-semibold mb-1">💻 Proyek</h2>
            <p className="text-sm">Jelajahi alat layanan teknis, catatan perbaikan, dan otomatisasi yang saya kembangkan.</p>
          </Link>

          <Link href="/blog" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h2 className="text-base font-semibold mb-1">📝 Blog</h2>
            <p className="text-sm">Baca pengalaman saya, tips layanan, dan pembaruan di lapangan.</p>
          </Link>

          <Link href="/talks" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h2 className="text-base font-semibold mb-1">🎤 Presentasi</h2>
            <p className="text-sm">Workshop dan diskusi yang pernah saya bawakan tentang perbaikan dan perawatan perangkat.</p>
          </Link>

          <Link href="/about" className="block p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h2 className="text-base font-semibold mb-1">👋 Tentang Saya</h2>
            <p className="text-sm">Kenali lebih lanjut tentang perjalanan, latar belakang teknis, dan karier saya.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
