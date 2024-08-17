import { memo } from "react";

const cn = {
  container: [
    'w-full', 
    'max-w-4xl', 

    'bg-gradient-to-tr', 
    'from-white', 
    'to-stone-100',

    'rounded-lg', 
    'shadow-lg', 
    'text-black',
    'drop-shadow-xl',
  ],
};

const CardRaw = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className={cn.container.join(' ')}>
        {children}
      </div>
  );
}

export const Card = memo(CardRaw);
