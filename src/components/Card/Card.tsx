const classNames = {
  container: [
    'w-full', 
    'max-w-4xl', 

    'bg-gradient-to-bl', 
    'from-white', 
    'to-stone-100',

    'rounded-lg', 
    'shadow-lg', 
    'text-black',
    'drop-shadow-xl',
  ].join(' '),
};

export default function Card({ children }: { children: React.ReactNode }) {
  return (
      <div className={classNames.container}>
        {children}
      </div>
  );
}