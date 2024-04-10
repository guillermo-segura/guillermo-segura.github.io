interface LinkProps {
  href: string;
  children: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="font-mono text-blue-500 hover:bg-gradient-to-bl transition-all hover:from-sky-500 hover:to-blue-500 hover:text-white"
    >
      {children}
    </a>
  );
}