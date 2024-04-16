const classNames = {
  container: 'flex flex-col px-6 sm:px-12 pb-12 text-center text-base space-y-12',
  containerBlue: 'flex flex-col p-6 xs:p-12 bg-blue-100 text-left text-base md:text-lg space-y-12',
};

export default function CardBody ({ children, blue = false }: { children: React.ReactNode, blue?: boolean }) {
  return (
    <div className={blue ? classNames.containerBlue : classNames.container}>
      {children}
    </div>
  );
};
