import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  link?: string;
  target?: string;
  className?: string;
  ariaLabel?: string; // Add an ariaLabel prop
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, link, target, className, ariaLabel }, ref) => {
    return (
      <a
        className={className}
        href={link}
        target={target}
        rel="noopener noreferrer"
        ref={ref}
        aria-label={ariaLabel} // Set the aria-label attribute
      >
        {children}
      </a>
    );
  }
);

export default Link;
