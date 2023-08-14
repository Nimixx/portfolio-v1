import { Atom } from 'lucide-react'
import IconStuck from './IconStuck'

export default function TechStuck() {
  return (
    <section className="mt-14 flex w-full flex-col items-start space-y-5">
      <h2 className="flex items-center space-x-2 text-2xl font-bold">
        <Atom className="text-purple-500 dark:text-purple-300" />
        <span>Technologie</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Rád se učím novým věcem a neustále se zdokonaluji v těch, které již znám. Většinu svého času
        trávím v <strong className="text-sky-400">Reactu</strong>, ale nejsou mi cizí i další
        technologie, jako například <strong className="text-blue-500">TypeScript</strong>,{' '}
        <strong className="text-pink-400">Sass</strong>,{' '}
        <strong className="text-zinc-950 dark:text-white">Next.js</strong>,{' '}
        <strong className="text-orange-500">Astro</strong> a plno dalších.
      </p>
      <IconStuck />
    </section>
  )
}
