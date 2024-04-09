const classNames = {
  container: 'w-3/4 bg-white rounded-lg shadow-xl text-black drop-shadow-xl',
};

export default function Card({ children }: { children: React.ReactNode }) {
  return (
      <div className={classNames.container}>
        {children}
      </div>
  );
}