const classNames = {
  bodySeparator: 'text-center border-b-2 border-stone-200 pt-4 pb-2',
  header: 'font-mono text-2xl',
  description: 'text-stone-500',
};

export interface BodyHeaderProps {
  children: string;
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
