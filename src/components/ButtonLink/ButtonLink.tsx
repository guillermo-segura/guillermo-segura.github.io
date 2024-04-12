import Link from "next/link";

import { primary, secondary } from "./classNames";

interface ButtonLinkProps {
  label: string;
  href?: string;
  type?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const classNames = { primary, secondary };

export default function ButtonLink({ label, type = 'primary', href = '', onClick }: ButtonLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={classNames[type]}>
      {label}
    </Link>
  );
}
