import { memo } from 'react';
import { Text } from '@/components/Text/Text';
import { joinStringArrays, getRandomValue } from '@/utils';

const style = {
  container: [
    'px-1.5',
    'py-0.5',
    'w-max',
    'rounded-lg',
    'border',
    'border-dashed',
    'border-stone-300',
    'm-0.5',
    'bg-white',
    'transition-all',
    'duration-500',
    'hover:border-dark-500',
    'cursor-pointer',
  ],
  hoverBg: [
    'hover:bg-blue-100',
    'hover:bg-green-100',
    'hover:bg-red-100',
    'hover:bg-orange-100',
    'hover:bg-pink-100',
    'hover:bg-purple-100',
    'hover:bg-yellow-100',
  ]
};

export interface ChipProps {
  label: string;
}

const ChipRaw = ({ label }: ChipProps) => (
  <div className={joinStringArrays(style.container, [getRandomValue(style.hoverBg)])} key={label}>
    <Text variant="chip">
      {label}
    </Text>
  </div>
);

export const Chip = memo(ChipRaw);
