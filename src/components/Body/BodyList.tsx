import BodyHeader from "./BodyHeader";

const classNames = {
  listContainer: 'flex flex-col xs:flex-row justify-around space-y-6 xs:space-y-0',
  sectionHeader: 'font-bold text-md',
  section: 'list-inside text-center xs:text-left',
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
      <div className={classNames.listContainer}>
        {Object.keys(data).map(renderData)}
      </div>
    </div>
  );
}
