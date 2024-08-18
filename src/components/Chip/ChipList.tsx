import { memo, useCallback } from 'react';
import { Text } from '@/components/Text/Text';
import { Chip } from '@/components/Chip/Chip';
import { joinStringArrays } from '@/utils';

export interface ChipListProps {
  labelColor: 'green' | 'blue' | 'yellow';
  label: string;
  items: string[];
}

const style = {
  header: ['max-w-max', 'mx-auto', 'p-0.5', 'mb-2'],
  headerColors: {
    green: ['bg-green-100'],
    blue: ['bg-blue-100'],
    yellow: ['bg-yellow-100'],
  },
  tagsContainer: ['flex', 'flex-wrap', 'justify-center'],
}

const ChipListRaw = ({ labelColor, label, items }: ChipListProps) => {
  const mapSkills = useCallback((skill: string) => (<Chip label={skill} key={skill}/>), []);
  return (
    <article>
      <div className={joinStringArrays(style.header, style.headerColors[labelColor])}>
        <Text variant="label">
          {label}
        </Text>
      </div>
      <div className={joinStringArrays(style.tagsContainer)}>
        {items.map(mapSkills)}
      </div>
    </article>
  );
}

export const ChipList = memo(ChipListRaw);
