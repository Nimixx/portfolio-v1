import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from '../ui/link'

export default function Social() {
  return (
    <ul className=" flex items-center gap-2 text-gray-500 dark:text-gray-400">
      <li>
        <Link link="https://github.com/Nimixx" target="_blank" ariaLabel="Visit Nimixx on GitHub">
          <Github className="h-5 w-5 ring-offset-white hover:text-zinc-950 dark:hover:text-white sm:h-5 sm:w-5 " />
        </Link>
      </li>
      <li>
        <Link
          link="https://twitter.com/NimixxDev"
          target="_blank"
          ariaLabel="Visit Nimixx on Twitter"
        >
          <Twitter className="h-5 w-5 hover:text-zinc-950 dark:hover:text-white sm:h-5 sm:w-5" />
        </Link>
      </li>
      <li>
        <Link
          link="https://www.linkedin.com/in/tadeasthelen/"
          target="_blank"
          ariaLabel="Visit Nimixx on LinkedIn"
        >
          <Linkedin className="h-5 w-5 hover:text-zinc-950 dark:hover:text-white sm:h-5 sm:w-5" />
        </Link>
      </li>
    </ul>
  )
}
