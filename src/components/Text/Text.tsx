import { memo } from "react";

export type Variant = 'h1' | 'h2' | 'h3' | 'text' | 'subtext' | 'label' | 'link' | 'chip';

export interface TextProps {
  children: React.ReactNode;
  variant?: Variant;
  textAlign?: 'center' | 'left' | 'right';
  color?: 'white' | 'black';
}

const cn = {
  // variant
  h1: ['font-serif', 'font-bold', 'text-2xl', 'sm:text-6xl', 'drop-shadow-md'],
  h2: ['font-serif', 'font-semibold', 'text-1xl', 'sm:text-5xl', 'drop-shadow-md'],
  h3: ['font-serif', 'font-medium', 'text-xl', 'sm:text-4xl', 'drop-shadow-md'],
  subtext: ['text-md', 'sm:text-xl', 'font-light'],
  label: ['text-sm', 'sm:text-md', 'font-bold', 'uppercase', 'tracking-wide'],
  text: ['text-lg', 'sm:text-2xl'],
  link: ['text-sm', 'sm:text-lg', 'font-light', 'text-primary-600', 'hover:text-primary-500', 'hover:drop-shadow-md', 'transition-all', 'underline', 'underline-offset-8', 'decoration-dotted'],
  chip: ['font-mono', 'text-md'],
  // textAlign
  center: ['text-center'],
  left: ['text-left'],
  right: ['text-right'],
  // color
  black: ['text-dark-500'],
  white: ['text-white'],
};

const TextRaw = ({ children, variant = 'text', textAlign = 'left', color = 'black' }: TextProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={[...cn.h1, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</h1>;
    case 'h2':
      return <h2 className={[...cn.h2, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</h2>;
    case 'h3':
      return <h3 className={[...cn.h3, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</h3>;
    case 'subtext':
      return <p className={[...cn.subtext, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</p>;
    case 'label':
      return <p className={[...cn.label, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</p>;
    case 'chip':
      return <p className={[...cn.chip, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</p>;
    case 'link':
      return <p className={[...cn.link, ...cn[textAlign]].join(' ')}>{children}</p>;
    default:
      return <p className={[...cn.text, ...cn[textAlign], ...cn[color]].join(' ')}>{children}</p>;
  }
}

export const Text = memo(TextRaw);
