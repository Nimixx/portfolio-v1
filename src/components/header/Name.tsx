import Social from './Social'

export default function Name() {
  return (
    <section className="flex items-center gap-5">
      <h1 className="text-xl font-bold uppercase text-zinc-950 dark:text-zinc-200 xl:text-2xl">
        Nimixx.dev
      </h1>
      <Social />
    </section>
  )
}
