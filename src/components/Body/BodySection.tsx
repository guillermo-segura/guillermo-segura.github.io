const classNames = {
  container: 'text-center text-md mb-6',
};

export default function BodySection ({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames.container}>
      {children}
    </div>
  );
};
