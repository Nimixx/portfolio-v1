import { Atom } from 'lucide-react'
import InteractiveStuck from './InteractiveStuck'

export default function TechStuck() {
  return (
    <section className="w-full flex flex-col items-start space-y-5 mt-14">
      <h2 className="text-2xl font-bold flex items-center space-x-2">
        <Atom className='text-purple-500 dark:text-purple-300' />
        <span>Technologie</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Rád se učím novým věcem a neustále se zdokonaluji v těch, které již znám. Většinu svého času trávím v <strong className='text-sky-400'>Reactu</strong>, ale nejsou mi cizí i další technologie, jako například <strong className='text-blue-500'>TypeScript</strong>, <strong className='text-pink-400'>Sass</strong>, <strong className='text-zinc-950 dark:text-white'>Next.js</strong>, <strong className='text-orange-500'>Astro</strong> a plno dalších. 
      </p>
      <InteractiveStuck />
    </section>
  )
}
