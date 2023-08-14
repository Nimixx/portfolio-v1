interface LinkProps {
  children?: React.ReactNode
  link?: string
  target?: string
  className?: string
}

export default function Link({ children, link, target, className }: LinkProps) {
  return (
    <a className={className} href={link} target={target} rel="noopener noreferrer">
      {children}
    </a>
  )
}
