import { memo, useCallback } from "react";
import { BodyList } from "./BodyList";

const style = {
  listContainer: "flex flex-wrap justify-start sm:justify-around",
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
    <div className={style.listContainer}>
      {Object.keys(data).map(renderData)}
    </div>
  );
};

export const BodyListGroup = memo(BodyListGroupRaw);
