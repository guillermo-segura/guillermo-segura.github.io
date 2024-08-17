import { memo } from "react";

export type Variant = 'h1' | 'h2' | 'h3' | 'text' | 'subtext' | 'label'

export interface TextProps {
  children: React.ReactNode;
  variant?: Variant;
  textAlign?: 'center' | 'left' | 'right';
}

const cn = {
  h1: ['font-serif', 'font-bold', 'text-2xl', 'sm:text-6xl', 'text-slate-800'],
  h2: ['font-serif', 'font-semibold', 'text-1xl', 'sm:text-5xl', 'text-slate-800'],
  h3: ['font-serif', 'font-medium', 'text-xl', 'sm:text-4xl', 'text-slate-800'],
  subtext: ['text-md', 'sm:text-xl', 'font-light', 'text-slate-800'],
  label: ['text-sm', 'sm:text-md', 'font-bold', 'uppercase', 'tracking-wide', 'text-slate-800'],
  text: ['text-lg', 'sm:text-2xl', 'text-slate-800'],
  center: ['text-center'],
  left: ['text-left'],
  right: ['text-right'],
};

const TextRaw = ({ children, variant = 'text', textAlign = 'left' }: TextProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={[...cn.h1, ...cn[textAlign]].join(' ')}>{children}</h1>;
    case 'h2':
      return <h2 className={[...cn.h2, ...cn[textAlign]].join(' ')}>{children}</h2>;
    case 'h3':
      return <h3 className={[...cn.h3, ...cn[textAlign]].join(' ')}>{children}</h3>;
    case 'subtext':
      return <span className={[...cn.subtext, ...cn[textAlign]].join(' ')}>{children}</span>;
    case 'label':
      return <span className={[...cn.label, ...cn[textAlign]].join(' ')}>{children}</span>;
    default:
      return <span className={[...cn.text, ...cn[textAlign]].join(' ')}>{children}</span>;
  }
}

export const Text = memo(TextRaw);
