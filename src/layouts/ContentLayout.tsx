interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <section className="w-full">
      <article className="mx-auto w-full px-5 xl:w-1/2 xl:px-0">{children}</article>
    </section>
  )
}
