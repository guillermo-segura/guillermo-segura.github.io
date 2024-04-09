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

  'bg-gradient-to-tr',
  'from-blue-500',
  'to-sky-500',

  'hover:to-sky-700',
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
  'bg-white',
  'flex',
  'text-black',
  'border',
  'font-medium',
  'border-dashed',
  'border-black',
  'rounded-lg',
  'justify-center',
  'px-4 py-2.5',
  'relative',
  'text-center',
  'cursor-pointer',
  'shadow-md',
  'drop-shadow-lg',
  '-rotate-2',
  'transform-gpu',

  'hover:border-transparent',

  "after:content-['']",
  'after:absolute',
  'after:border',
  'after:border-black',
  'after:rounded-lg',
  'after:bottom-1',
  'after:left-1',
  'after:w-full',
  'after:h-full',

  'hover:after:bottom-0',
  'hover:after:left-0',
  'hover:after:shadow-lg',
  'hover:after:drop-shadow-xl',
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
