import Footer from '@/components/footer/Footer'
import Header from '../components/header/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <article className="w-full min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      {children}
      <Footer />
    </article>
  )
}
