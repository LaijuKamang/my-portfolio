import "./globals.css";
export const metadata = {
  title: 'Hen Umbu Laiya Sobang',
  description: 'Portofolio',
  icons: {
    icon: '/images/foto-saya.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
