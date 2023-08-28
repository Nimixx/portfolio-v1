import { Contact2 } from 'lucide-react'
import Link from '../ui/link'
import useCopyEmail from '@/hooks/useCopyEmail'

export default function Contacts() {
  const copyEmailToClipboard = useCopyEmail();

  const handleCopyEmail = () => {
    copyEmailToClipboard('tadeasthelen@proton.me');
  };

  return (
    <section className="mt-14 flex w-full flex-col items-start space-y-5">
      <h2 className="flex items-center space-x-2 text-2xl font-bold">
        <Contact2 className="text-sky-500 dark:text-sky-300" />
        <span>Kontakty</span>
      </h2>
      <span className="text-gray-600 dark:text-gray-400">
        Pokud byste se mnou chtěli něco probrat, nebo máte nějaký nápad na spolupráci, neváhejte mě
        kontaktovat na{' '}
        <button className="text-zinc-950 dark:text-white" onClick={handleCopyEmail}>
          <strong>Emailu</strong>
        </button>{' '}
        nebo pomocí{' '}
        <strong className="text-blue-500 dark:text-blue-400">
          <Link
            link="https://www.linkedin.com/in/tadeasthelen/"
            target="_blank"
            ariaLabel="My LinkedIn profile link"
          >
            LinkedIn
          </Link>
        </strong>
        . Aktuálně hledám práci jako{' '}
        <strong className="text-amber-500 dark:text-amber-300">Frontend Developer</strong>.
      </span>
    </section>
  )
}

