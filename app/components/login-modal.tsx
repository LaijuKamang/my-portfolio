'use client'

import { useState } from 'react'
import { verifySecretCode } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const isValid = await verifySecretCode(code)

      if (isValid) {
        toast({
          title: 'Berhasil!',
          description: 'Kode benar, akses diberikan',
          variant: 'default',
        })
        setCode('')
        onSuccess()
        onClose()
      } else {
        toast({
          title: 'Gagal',
          description: 'Kode rahasia salah',
          variant: 'destructive',
        })
        setCode('')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Akses Menu Proyek</DialogTitle>
          <DialogDescription>
            Masukkan kode rahasia untuk melihat detail proyek
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium">
              Kode Rahasia
            </label>
            <Input
              id="code"
              type="password"
              placeholder="Masukkan kode rahasia"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" disabled={loading || !code.trim()}>
              {loading ? 'Loading...' : 'Verifikasi'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
