interface ButtonLinkProps {
  label: string;
  href?: string;
  type?: 'primary' | 'secondary';
};

const twPrimaryClasses = [
  'flex',
  'justify-center',
  'text-white',
  'font-medium',
  'px-4 py-2.5',
  'relative',
  'rounded-lg',
  'text-center',
  'cursor-pointer',
  '-rotate-2',
  'transform-gpu',
  'max-h-12',
  'box-border',
  'bg-gradient-to-tr',
  'from-blue-500',
  'to-sky-500',
  'font-mono',

  'hover:to-sky-600',
  'hover:shadow-[-4px_4px_5px_rgba(0,0,0,0.3)]',

  "after:content-['']",
  'after:absolute',
  'after:border',
  'after:border-black',
  'after:rounded-lg',
  'after:bottom-0.5',
  'after:left-0.5',
  'after:w-full',
  'after:h-full',

  'hover:after:bottom-px',
  'hover:after:left-px',
];

const twSecondaryClasses = [
  'flex',
  'justify-center',
  'text-black',
  'font-medium',
  'px-4 py-2.5',
  'relative',
  'rounded-lg',
  'text-center',
  'cursor-pointer',
  '-rotate-2',
  'transform-gpu',
  'max-h-12',
  'box-border',
  'bg-gradient-to-tr',
  'from-white',
  'to-slate-100',
  'font-mono',
  
  'border',
  'border-dashed',
  'border-black',

  'hover:to-slate-200',
  'hover:shadow-[-4px_4px_5px_rgba(0,0,0,0.3)]',

  "after:content-['']",
  'after:absolute',
  'after:border',
  'after:border-black',
  'after:rounded-lg',
  'after:bottom-0.5',
  'after:left-0.5',
  'after:w-[101%]',
  'after:h-[101%]',

  'hover:after:bottom-0',
  'hover:after:left-0',
];

const classnames = {
  primary: twPrimaryClasses.join(' '),
  secondary: twSecondaryClasses.join(' '),
}

export default function ButtonLink({ label, type = 'primary', href = '' }: ButtonLinkProps) {
  return (
    <a href={href} className={classnames[type]}>
      {label}
    </a>
  );
}
