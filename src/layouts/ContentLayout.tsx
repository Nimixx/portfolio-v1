interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="w-full">
      <div className="w-full xl:w-1/2 mx-auto px-5 xl:px-0">{children}</div>
    </div>
  )
}
