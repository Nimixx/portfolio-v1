interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <section className="w-full">
      <article className="mx-auto w-full px-5 lg:w-1/2 lg:px-0 mt-5">{children}</article>
    </section>
  )
}
