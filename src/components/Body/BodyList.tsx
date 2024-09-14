import { memo, useCallback } from "react";
import { Text } from "@/components/Text/Text";
import { joinStringArrays } from "@/utils";

const style = {
  section: ["list-inside", "space-y-1"],
  article: [
    "w-max",
    "p-4",
    "border-dashed",
    "border",
    "border-dark-100",
    "rounded-lg",
    "hover:bg-white",
    "hover:border-dark-500",
    "space-y-2",
    "transition-all",
  ],
};

export interface BodyListProps {
  label: string;
  items?: string[];
}

const BodyListRaw = ({ label, items = [] }: BodyListProps) => {
  const renderItem = useCallback(
    (item: string) => (
      <li key={item}>
        <Text variant="subtext">{item}</Text>
      </li>
    ),
    [],
  );

  return (
    <article className={joinStringArrays(style.article)} key={label}>
      <Text variant="label">{label}</Text>
      <ul className={joinStringArrays(style.section)}>
        {items.map(renderItem)}
      </ul>
    </article>
  );
};

export const BodyList = memo(BodyListRaw);
