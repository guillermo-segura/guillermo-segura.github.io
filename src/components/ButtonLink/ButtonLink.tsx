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
    'hover:shadow-inner',
    'focus:shadow-inner',
    'active:shadow-inner',
    'outline-none',
    'transition-all',
  ],
  primary: [
    'bg-gblue-600',
    
    'hover:bg-gblue-500',
    
    'focus:bg-gblue-400',

    'active:bg-gblue-400',
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
    <Link className={[...cn.base, ...cn[type]].join(' ')} href={href} onClick={onClick}>
      {children && <Text variant="label" color={ type === 'primary' ? 'white' : 'black'}>{children}</Text>}
    </Link>
  );
}

export const ButtonLink = memo(ButtonLinkRaw);
