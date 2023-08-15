import Footer from '@/components/footer/Footer'
import Header from '../components/header/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <article className="scrollbar-light min-h-screen w-full  text-zinc-900  dark:scrollbar-dark  dark:text-zinc-100">
      <Header />
      {children}
      <Footer />
    </article>
  )
}
