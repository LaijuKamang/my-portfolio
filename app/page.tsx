'use client'

import { useState } from 'react'
import { LoginModal } from '@/components/login-modal'
import { ProjectsCard } from '@/components/projects-card'

export default function Home() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleProjectsClick = () => {
    setShowLoginModal(true)
  }

  const handleLoginSuccess = () => {
    setIsProjectsVisible(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Hen Umbu Laiya Sobang
          </h1>
          <p className="text-lg text-gray-600">Developer & Creator</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Proyek Card - dengan Login */}
          <button
            onClick={handleProjectsClick}
            className="text-left rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">Proyek</h3>
            <p className="text-gray-600">Klik untuk melihat proyek saya</p>
            <p className="text-sm text-gray-500 mt-2">🔒 Perlu kode rahasia</p>
          </button>

          {/* Blog Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Blog</h3>
            <p className="text-gray-600">
              Artikel dan tulisan tentang web development
            </p>
          </div>

          {/* Presentasi Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Presentasi</h3>
            <p className="text-gray-600">
              Slide presentasi dari berbagai event
            </p>
          </div>

          {/* Tentang Saya Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Tentang Saya</h3>
            <p className="text-gray-600">
              Informasi singkat tentang latar belakang saya
            </p>
          </div>
        </div>

        {/* Proyek Content - Hidden by default */}
        {isProjectsVisible && (
          <div className="mt-12 pt-12 border-t border-gray-200">
            <ProjectsCard />
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
      />
    </main>
  )
}
