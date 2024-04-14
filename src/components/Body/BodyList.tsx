import BodyHeader from "./BodyHeader";

const classNames = {
  listContainer: 'flex flex-row justify-around',
  listContainerV: 'flex flex-col justify-around px-12 space-y-4',
  sectionHeader: 'font-bold text-md',
  section: 'list-inside',
};

export interface BodyListProps {
  header: string;
  description?: string;
  vertical?: boolean
  data: {
    [key: string]: string[];
  };
}

export default function BodyList ({ header, description, data, vertical = false }: BodyListProps) {
  const renderData = (section: string) => {
    const items = data[section];
    const renderItem = (item: string) => (<li key={item}>{item}</li>);

    return (
      <div key={section}>
        <span className={classNames.sectionHeader}>
          {section}
        </span>
        <ul className={classNames.section}>
          {items.map(renderItem)}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <BodyHeader description={description}>{header}</BodyHeader>
      <div className={vertical ? classNames.listContainerV : classNames.listContainer}>
        {Object.keys(data).map(renderData)}
      </div>
    </div>
  );
}
