import React from 'react'

interface LinkProps {
  children?: React.ReactNode
  link?: string
  target?: string
  className?: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, link, target, className }, ref) => {
    return (
      <a className={className} href={link} target={target} rel="noopener noreferrer" ref={ref}>
        {children}
      </a>
    )
  },
)

export default Link
