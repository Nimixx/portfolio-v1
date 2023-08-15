interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <section className="w-full">
      <article className="mx-auto mt-5 w-full px-5 lg:w-2/3 lg:px-0 2xl:w-1/2">{children}</article>
    </section>
  )
}
