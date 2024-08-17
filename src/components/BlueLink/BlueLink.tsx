import { memo } from 'react';
import Link from 'next/link';
import { Text } from '@/components/Text/Text';

interface LinkProps {
  href: string;
  children: string;
}

const cn = {
  link: [
    'whitespace-wrap',
    'outline-none',
    'w-max',
 ],
}

const BlueLinkRaw = ({ children, href }: LinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn.link.join(' ')}
    >
      <Text variant="link">
        {children}
      </Text>
    </Link>
  );
}

export const BlueLink = memo(BlueLinkRaw);
