import { memo } from "react";
import { Text } from '@/components/Text/Text';

const cn = {
  container: [
      'flex',
      'flex-col',

      'space-y-2',
      'sm:space-y-4',

      'p-4',
      'sm:p-12',
    ],
};

interface CardHeaderProps {
  header: string;
  description?: string;
}

const CardHeaderRaw = ({ header, description }: CardHeaderProps) => (
  <header className={cn.container.join(' ')}>
    <div>
      <Text variant="h1">{header}</Text>
    </div>
    {description && (
      <div>
        <Text variant="text">{description}</Text>
      </div>
    )}
  </header>
);

export const CardHeader = memo(CardHeaderRaw);
