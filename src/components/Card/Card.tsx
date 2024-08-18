import { joinStringArrays } from '@/utils';
import { memo } from 'react';

const style = {
  container: [
    'w-full', 
    'max-w-4xl', 

    'bg-gradient-to-t', 
    'from-white', 
    'to-stone-100',

    'rounded-lg', 
    'shadow-card', 
    'text-black',
  ],
};

const CardRaw = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className={joinStringArrays(style.container)}>
        {children}
      </div>
  );
}

export const Card = memo(CardRaw);
