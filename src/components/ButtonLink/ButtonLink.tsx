import Link from "next/link";

import { primary, secondary } from "./classNames";
import { Text } from "../Text/Text";

interface ButtonLinkProps {
  children?: React.ReactNode;
  label?: string;
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

export default function ButtonLink({ children, label, type = 'primary', href = '', onClick }: ButtonLinkProps) {
  return (
    <Link className={[...cn.base, ...cn[type]].join(' ')} href={href} onClick={onClick}>
      {label && <Text variant="label" color="white">{label}</Text>}
      {children && <Text variant="label" color="white">{children}</Text>}
    </Link>
  );
}
