const classNames = {
  bodySeparator: 'text-center border-b-2 border-neutral-100 py-2 mb-4',
  header: 'font-mono text-lg font-bold',
  description: 'text-stone-500 text-base',
};

export interface BodyHeaderProps {
  children: string | React.ReactNode;
  description?: string;
}

export default function BodyHeader ({ children, description }: BodyHeaderProps) {
  return (
    <div className={classNames.bodySeparator}>
      <h2 className={classNames.header}>{children}</h2>
      {description && <p className={classNames.description}>{description}</p>}
    </div>
  );
}
