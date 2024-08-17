import Link from "next/link";
interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const cn = {
  link: [
    "whitespace-wrap",
    "outline-none",

    "hover:bg-gradient-to-bl",
    "hover:from-sky-500",
    "hover:to-blue-500",
    "hover:text-white",

    "focus:bg-gradient-to-bl",
    "focus:from-sky-500",
    "focus:to-blue-500",
    "focus:text-white",
 ],
}

export default function BlueLink({ children, href }: LinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn.link.join(' ')}
    >
      {children}
    </Link>
  );
}