'use server'

export async function verifySecretCode(code: string): Promise<boolean> {
  const secretCode = process.env.SECRET_PROJECT_CODE

  if (!secretCode) {
    console.error('[v0] SECRET_PROJECT_CODE tidak di-set di environment variables')
    return false
  }

  // Simple string comparison
  const isValid = code.trim() === secretCode.trim()

  return isValid
}
