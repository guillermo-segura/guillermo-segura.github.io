import { memo } from 'react';
import { Text, TextProps } from '@/components/Text/Text';

const style = {
  container: 'border-b-2 border-stone-100 py-2 mb-4',
};

export interface BodyHeaderProps {
  children: string | React.ReactNode;
  textAlign?: TextProps['textAlign'];
  description?: string;
}

const BodyHeaderRaw = ({ children, textAlign = 'center' }: BodyHeaderProps) => (
  <div className={style.container}>
    <Text variant="h3" textAlign={textAlign}>
      {children}
    </Text>
  </div>
);

export const BodyHeader = memo(BodyHeaderRaw);
