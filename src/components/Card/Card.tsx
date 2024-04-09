const classNames = {
  container: 'w-3/4 max-w-4xl bg-gradient-to-bl from-white to-stone-100 rounded-lg shadow-xl text-black drop-shadow-xl',
};

export default function Card({ children }: { children: React.ReactNode }) {
  return (
      <div className={classNames.container}>
        {children}
      </div>
  );
}