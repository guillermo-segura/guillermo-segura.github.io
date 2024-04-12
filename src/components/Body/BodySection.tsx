const classNames = {
  container: 'text-center text-xl mb-6',
};

export default function BodySection ({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames.container}>
      {children}
    </div>
  );
};
