import Link from "next/link";
interface LinkProps {
  href: string;
  children: string;
}

export default function BlueLink({ children, href }: LinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="font-mono text-blue-500 hover:bg-gradient-to-bl transition-all hover:from-sky-500 hover:to-blue-500 hover:text-white whitespace-nowrap"
    >
      {children}
    </Link>
  );
}