import React from 'react';
import clsx from 'clsx';

export default function NavigationLink({ href, children, active = false, mobile = false, ...props }) {
  return (
    <a
      href={href}
      className={clsx('nav-link', { active, 'mobile-menu-link': mobile })}
      aria-current={active ? 'page' : undefined}
      tabIndex={0}
      {...props}
    >
      {children}
    </a>
  );
} 