'use client';
import { memo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { joinStringArrays } from '@/utils';

interface NavbarButtonProps {
  children: React.ReactNode;
  href?: string;
  isActive: boolean;
};

const cn = {
  base: [
    'px-4',
    'py-1',
    'my-1',
    'rounded-lg',
    'shadow-card',
    'whitespace-nowrap',
    'outline-none',
    'transition-all',
    'text-sm',
    'sm:text-md',
    'font-bold',
    'uppercase',
    'tracking-wide',
  ],
  active: [
    'bg-primary-600',
    'text-white',
    'cursor-default',
  ],
  inctive: [
    'bg-white',
    'hover:bg-primary-500',
    'focus:bg-primary-500',
    'hover:text-white',
    'focus:text-white',
    'text-dark-500',
    'cursor-pointer',
  ],
}

const NavbarButtonRaw = ({ children, isActive, href = '' }: NavbarButtonProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const onClick = useCallback(() => ref.current?.blur(), []);
  return (
    <Link
      ref={ref}
      className={joinStringArrays(cn.base, isActive ? cn.active : cn.inctive)}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export const NavbarButton = memo(NavbarButtonRaw);
