import BodyHeader from "./BodyHeader";

const classNames = {
  listContainer: 'flex flex-row justify-around mt-4',
  sectionHeader: 'font-mono font-bold',
  section: 'list-disc',
};

export interface BodyListProps {
  header: string;
  description?: string;
  data: {
    [key: string]: string[];
  };
}

export default function BodyList ({ header, description, data }: BodyListProps) {
  const renderData = (section: string) => {
    const items = data[section];
    const renderItem = (item: string) => (<li key={item}>{item}</li>);

    return (
      <div>
        <span className={classNames.sectionHeader}>
          {section}
        </span>
        <ul className={classNames.section} style={{ columnCount: Math.floor(items.length / 3), columnGap: '56px' }}>
          {items.map(renderItem)}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <BodyHeader description={description}>{header}</BodyHeader>
      <div className={classNames.listContainer}>
        {Object.keys(data).map(renderData)}
      </div>
    </div>
  );
}
