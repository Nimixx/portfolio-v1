import { Heart, Atom, Play } from 'lucide-react'
import Social from '../header/Social'
import Link from '../ui/link'
import { useToast } from '@/components/ui/use-toast'

const links = {
  Sleduji: [
    { text: 'Kevin Powell', url: 'https://www.youtube.com/@KevinPowell' },
    {
      text: 'Josh W Comeau',
      url: 'https://www.joshwcomeau.com/tutorials/',
    },
    { text: 'Theo T3', url: 'https://www.youtube.com/@t3dotgg' },
    {
      text: 'Linux Experiment',
      url: 'https://www.youtube.com/channel/UC5UAwBUum7CPN5buc-_N1Fw',
    },
    { text: 'System 79', url: 'https://pop.system76.com/' },
  ],
  Oblíbené: [
    { text: 'React', url: 'https://reactjs.org/' },
    { text: 'Next.js', url: 'https://nextjs.org/' },
    { text: 'Astro', url: 'https://astro.build/' },
    { text: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { text: 'Vite', url: 'https://vitejs.dev/' },
  ],
  Poslouchám: [
    { text: 'Chris Luno', url: 'https://www.youtube.com/@chrisluno' },
    {
      text: 'Nora En Puro',
      url: 'https://www.youtube.com/channel/UCdUXAN90UQV4sxNehj5Vflw',
    },
    { text: 'Flavour Trip', url: 'https://www.youtube.com/@flavourtrip' },
    { text: 'Sylvan Esso', url: 'https://www.youtube.com/@sylvanesso' },
    {
      text: 'Rachel K Collier',
      url: 'https://www.youtube.com/@RachelKCollierRKC',
    },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  const { toast } = useToast()

  const copyEmailToClipboard = () => {
    const email = 'nimixx.dev@proton.me'
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: 'Email zkopírován do schránky',
        description: email,
      })
    })
  }

  return (
    <footer className="mt-14 flex w-full items-center justify-center border-t border-zinc-200 bg-zinc-200/20 px-5 dark:border-zinc-900 dark:bg-zinc-900/10 xl:h-96 xl:px-0">
      <section className="mx-auto my-5 flex w-full flex-col items-start justify-between gap-5 lg:w-2/3 lg:flex-row xl:mt-14 2xl:w-1/2">
        <section className="flex w-20 flex-col items-center justify-center gap-5">
          <img
            className="avatar rounded-lg bg-zinc-200/50 shadow-inner dark:bg-zinc-700/50"
            src="logo.webp"
            alt="Creator draw avatar"
            width="100%"
            height="100%"
            loading="lazy"
            decoding="async"
          />
          <Social />
        </section>
        {Object.entries(links).map(([category, categoryLinks], index) => (
          <section key={index}>
            <h2 className="flex items-center gap-2 text-lg font-bold">
              {category}
              <span>
                {index === 0 ? (
                  <Heart className="h-4 w-4 fill-red-500 stroke-0" />
                ) : index === 1 ? (
                  <Atom className="h-4 w-4 fill-blue-500 stroke-0" />
                ) : (
                  <Play className="h-4 w-4 fill-green-500 stroke-0" />
                )}
              </span>
            </h2>
            <ul className="mt-2 flex flex-col gap-2 text-gray-600 dark:text-gray-400">
              {categoryLinks.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-300"
                    link={link.url}
                    target="_blank"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="flex  flex-col items-start justify-start gap-2">
          <button className="ext-gray-600 dark:text-gray-300" onClick={copyEmailToClipboard}>
            <strong>nimixx.dev@proton.me</strong>
          </button>
          <span className="flex gap-2 text-gray-400 dark:text-gray-500">
            <span>&copy;</span>
            {year} <strong className="font-medium">Nimixx.dev</strong>
          </span>

          <Link
            link="https://vercel.com/"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300"
          >
            Deploy on Vercel
          </Link>
        </section>
      </section>
    </footer>
  )
}
