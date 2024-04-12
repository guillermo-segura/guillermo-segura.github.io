const classNames = {
  container: 'flex flex-col px-12 pb-12',
};

export default function CardBody ({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames.container}>
      {children}
    </div>
  );
};
