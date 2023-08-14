import { Contact2 } from "lucide-react"

export default function Contacts() {
  return (
    <section className="w-full flex flex-col items-start space-y-5 mt-14">
    <h2 className="text-2xl font-bold flex items-center space-x-2">
      <Contact2 className="text-sky-500 dark:text-sky-300" />
      <span>Kontakty</span>
    </h2>
    <p className="text-gray-600 dark:text-gray-400">
        Pokud byste se mnou chtěli něco probrat, nebo máte nějaký nápad na spolupráci, neváhejte mě kontaktovat na <strong className='text-zinc-950 dark:text-white'>Emailu</strong> nebo pomocí <strong className='text-blue-500 dark:text-blue-400'>LinkedIn</strong>. Aktuálně hledám práci jako <strong className='text-amber-500 dark:text-amber-300'>Frontend Developer</strong>
    </p>
  </section>
  )
}
