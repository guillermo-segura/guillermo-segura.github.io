import { memo } from "react";
import Link from "next/link";

import { Text } from "../Text/Text";

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
    'bg-gradient-to-t',
    'focus:shadow-inner',
    'active:shadow-inner',
    'outline-none',
    'transition-all',
    'duration-300',
  ],
  primary: [
    'from-gblue-500',
    'to-gblue-500',
    'outline-none',
    
    'hover:to-gblue-600',
    
    'focus:shadow-inner',
    'focus:from-gblue-600',
    'focus:to-gblue-700',

    'active:shadow-inner',
    'active:from-gblue-600',
    'active:to-gblue-700',
  ],
  secondary: [
    'from-transparent',
    'to-transparent',
    'outline-none',
    
    'hover:to-stone-100',
    
    'focus:shadow-inner',
    'focus:from-stone-100',
    'focus:to-stone-200',

    'active:shadow-inner',
    'active:from-stone-100',
    'active:to-stone-200',
  ],
}

const ButtonLinkRaw = ({ children, type = 'primary', href = '', onClick }: ButtonLinkProps) => {
  return (
    <Link className={[...cn.base, ...cn[type]].join(' ')} href={href} onClick={onClick}>
      {children && <Text variant="label" color={ type === 'primary' ? 'white' : 'black'}>{children}</Text>}
    </Link>
  );
}

export const ButtonLink = memo(ButtonLinkRaw);
