import { memo } from 'react';
import { Text } from '@/components/Text/Text';

const cn = {
  container: 'border-b-2 border-stone-100 py-2 mb-4',
};

export interface BodyHeaderProps {
  children: string | React.ReactNode;
  description?: string;
}

const BodyHeaderRaw = ({ children }: BodyHeaderProps) => {
  return (
    <div className={cn.container}>
      <Text variant="h3" textAlign="center">
        {children}
      </Text>
    </div>
  );
}

export const BodyHeader = memo(BodyHeaderRaw);
