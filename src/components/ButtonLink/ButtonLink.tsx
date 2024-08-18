import { memo } from 'react';
import Link from 'next/link';
import { Text } from '@/components/Text/Text';
import { joinStringArrays } from '@/utils';

interface ButtonLinkProps {
  children: React.ReactNode;
  href?: string;
  type?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const cn = {
  base: [
    'px-4',
    'py-2.5',
    'rounded-lg',
    'cursor-pointer',
    'hover:shadow-inner',
    'focus:shadow-inner',
    'active:shadow-inner',
    'outline-none',
    'transition-all',
  ],
  primary: [
    'bg-primary-600',
    'hover:bg-primary-500',
    'focus:bg-primary-400',
    'active:bg-primary-400',
  ],
  secondary: [
    'bg-transparent',
    'hover:bg-stone-50',
    'focus:bg-stone-100',
    'active:bg-stone-100',
  ],
}

const ButtonLinkRaw = ({ children, type = 'primary', href = '', onClick }: ButtonLinkProps) => {
  return (
    <Link className={joinStringArrays(cn.base, cn[type])} href={href} onClick={onClick}>
      {children && <Text variant="label" color={type === 'primary' ? 'white' : 'black'}>{children}</Text>}
    </Link>
  );
}

export const ButtonLink = memo(ButtonLinkRaw);
