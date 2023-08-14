interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full px-5 xl:w-1/2 xl:px-0">{children}</div>
    </div>
  )
}
