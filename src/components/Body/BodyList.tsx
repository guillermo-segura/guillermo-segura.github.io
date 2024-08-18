import { memo, useCallback } from 'react';
import { Text } from '@/components/Text/Text';

const style = {
  section: 'list-inside',
  article: 'w-max px-4 py-2',
};

export interface BodyListProps {
  label: string;
  items?: string[];
}

const BodyListRaw = ({ label, items = [] }: BodyListProps) => {
  const renderItem = useCallback((item: string) => (
    <li key={item}>
      <Text variant="subtext">
        {item}
      </Text>
    </li>
  ), []);

  return (
    <article className={style.article} key={label}>
      <Text variant="label">
        {label}
      </Text>
      <ul className={style.section}>
        {items.map(renderItem)}
      </ul>
    </article>
  );
}

export const BodyList = memo(BodyListRaw);
