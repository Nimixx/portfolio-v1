import { User } from 'lucide-react'

export default function Bio() {
  return (
    <section className="flex w-full flex-col items-start space-y-5">
      <h2 className="flex items-center space-x-2 text-2xl font-bold">
        <User className="text-amber-500 dark:text-amber-300" />
        <span>O mně</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
          Jmenuji se <strong className="text-blue-600 dark:text-indigo-400">Tadeáš</strong> a
          ve volném čase vytvářím webové stránky a aplikace. Rozhodl jsem se konečně svůj koníček,
          který je pro mě vším, posunout na úroveň, na které jej budu moct provozovat na{' '}
          <strong className="text-rose-500 dark:text-purple-500">full time</strong>. Rád bych se dostal do kolektivu, kde budou mít lidé kolem mě
          stejnou vášeň a já se budu moct v kódování posunout zas o kus dál.
      </p>
    </section>
  )
}
