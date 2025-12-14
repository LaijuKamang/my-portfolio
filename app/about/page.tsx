// app/about/page.tsx
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 px-6 py-12">
      <section className="max-w-3xl mx-auto text-center">
        {/* Foto Profil */}
        <div className="mb-6">
          <Image
            src="/images/foto-saya.png"
            alt="Foto Hen Umbu Laiya"
            width={160}
            height={160}
            className="rounded-full mx-auto border dark:border-gray-700"
          />
        </div>

        {/* Deskripsi Profil */}
        <p className="text-lg mb-8">
          Saya adalah teknisi di PT Blue Ocean Heart. Saya bekerja di bidang layanan perangkat, operasional teknis, dan pemecahan masalah sistem ponsel. Saya memiliki semangat dalam bidang teknologi, perbaikan, dan membantu pengguna melalui dukungan yang andal.
        </p>

        {/* Ikon Media Sosial */}
        <div className="flex justify-center space-x-6 text-3xl text-blue-600 dark:text-blue-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-red-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/hen-umbu-laiya-sobang-26a911283/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-red-500 transition" />
          </a>
          <a
            href="mailto:tkjheans@gmail.com?subject=Halo%20Hen&body=Halo%20Hen%2C%0ASaya%20ingin%20menghubungi%20Anda%20terkait%20..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope className="hover:text-red-500 transition" />
          </a>
        </div>
      </section>
    </main>
  );
}
