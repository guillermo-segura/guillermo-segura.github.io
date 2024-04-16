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
      className="font-mono text-blue-500 hover:bg-gradient-to-bl hover:from-sky-500 hover:to-blue-500 hover:text-white whitespace-wrap outline-none focus:bg-gradient-to-bl focus:from-sky-500 focus:to-blue-500 focus:text-white"
    >
      {children}
    </Link>
  );
}