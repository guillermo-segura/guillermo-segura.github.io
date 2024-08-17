import { memo } from "react";
import { BodyHeader } from "./BodyHeader";
import { Text } from '@/components/Text/Text';

const cn = {
  listContainer: 'flex flex-wrap justify-start sm:justify-around',
  section: 'list-inside',
  article: 'w-max px-4 py-2',
};

export interface BodyListProps {
  header: string;
  description?: string;
  data: {
    [key: string]: string[];
  };
}

const BodyListRaw = ({ header, description, data }: BodyListProps) => {
  const renderData = (section: string) => {
    const items = data[section];
    const renderItem = (item: string) => (
      <li key={item}>
        <Text variant="subtext">
          {item}
        </Text>
      </li>
    );

    return (
      <article className={cn.article} key={section}>
        <Text variant="label">
          {section}
        </Text>
        <ul className={cn.section}>
          {items.map(renderItem)}
        </ul>
      </article>
    );
  };

  return (
    <>
      <BodyHeader description={description}>{header}</BodyHeader>
      <div className={cn.listContainer}>
        {Object.keys(data).map(renderData)}
      </div>
    </>
  );
}

export const BodyList = memo(BodyListRaw);
