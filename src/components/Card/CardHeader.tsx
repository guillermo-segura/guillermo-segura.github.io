const classNames = {
  container: [
      'flex',
      'flex-col',

      'space-y-4',
      'md:space-y-6',

      'p-6',
      'xs:p-12',
    ].join(' '),
  header: ['font-mono', 'font-bold', 'text-4xl', 'md:text-6xl'].join(' '),
  description: 'text-xl md:text-2xl',
};

interface CardHeaderProps {
  header: string;
  description?: string;
}

export default function CardHeader({ header, description }: CardHeaderProps) {
  return (
    <div className={classNames.container}>
      <div className={classNames.header}>
        {header}
      </div>
      {description && (
        <div className={classNames.description}>
          {description}
        </div>
      )}
    </div>
  );
}