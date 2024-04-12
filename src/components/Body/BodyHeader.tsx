const classNames = {
  bodySeparator: 'text-center border-b-2 border-stone-200 py-2 mb-4',
  header: 'font-mono text-2xl',
  description: 'text-stone-500',
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
