'use client';
import { memo } from 'react';
import content from '@/content/actions.json'
import { NavbarButton } from './NavbarButton';
import { usePathname } from 'next/navigation';
import { joinStringArrays } from '@/utils';

const cn = {
  navContainer: [
    'w-full',
    'max-w-4xl',
    'sticky',
    'top-0',
    'z-10',
    'bg-dark-500',
    'p-2',
    'bg-opacity-30',
  ],
  buttonsContainer: [
    'flex',
    'flex-wrap',
    'space-x-2',
    'justify-center',
  ],
}

const NavbarRaw = () => {
  const pathname = usePathname();
  return (
    <nav className={joinStringArrays(cn.navContainer)}>
      <div className={joinStringArrays(cn.buttonsContainer)}>
        <NavbarButton href="/" isActive={pathname === '/'}>
          {content.home}
        </NavbarButton>
        <NavbarButton href="/traits" isActive={pathname === '/traits'}>
          {content.aboutMe}
        </NavbarButton>
        <NavbarButton href="/skills" isActive={pathname === '/skills'}>
          {content.skills}
        </NavbarButton>
        <NavbarButton href="/blog" isActive={pathname === '/blog'}>
          {content.blog}
        </NavbarButton>
      </div>
    </nav>
  );
}

export const Navbar = memo(NavbarRaw);
