import { memo, useCallback } from "react";
import { BodyList } from "./BodyList";
import { joinStringArrays } from "@/utils";

const style = {
  listContainer: ["flex", "flex-col", "justify-around", "items-center", "md:flex-row", "space-y-4", "md:space-y-0"],
};

export interface BodyListProps {
  data: {
    [key: string]: string[];
  };
}

const BodyListGroupRaw = ({ data }: BodyListProps) => {
  const renderData = useCallback(
    (section: string) => (
      <BodyList label={section} items={data[section]} key={section} />
    ),
    [data],
  );

  return (
    <div className={joinStringArrays(style.listContainer)}>
      {Object.keys(data).map(renderData)}
    </div>
  );
};

export const BodyListGroup = memo(BodyListGroupRaw);
