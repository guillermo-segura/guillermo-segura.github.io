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
    'bg-blue-500',
    // 'bg-gradient-to-tr',
    // 'from-blue-500',
    // 'to-sky-500',
    // 'outline-none',

    // 'hover:to-sky-600',
    // 'hover:shadow-[-4px_4px_5px_rgba(0,0,0,0.3)]',
    // 'focus:to-sky-600',
    // 'focus:shadow-[-4px_4px_5px_rgba(0,0,0,0.3)]',
  ],
  primary: [

  ],
  secondary: [

  ],
}

const ButtonLinkRaw = ({ children, type = 'primary', href = '', onClick }: ButtonLinkProps) => {
  return (
    <Link className={[...cn.base, ...cn[type]].join(' ')} href={href} onClick={onClick}>
      {children && <Text variant="label" color="white">{children}</Text>}
    </Link>
  );
}

export const ButtonLink = memo(ButtonLinkRaw);
