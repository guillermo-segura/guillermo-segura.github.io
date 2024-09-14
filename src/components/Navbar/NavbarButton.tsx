"use client";
import { memo, useCallback, useRef, ReactNode } from "react";
import Link from "next/link";
import { joinStringArrays } from "@/utils";

interface NavbarButtonProps {
  children: ReactNode;
  href?: string;
  isActive: boolean;
  icon?: ReactNode;
}

const cn = {
  base: [
    "px-4",
    "py-1",
    "my-1",
    "rounded-lg",
    "shadow-card",
    "whitespace-nowrap",
    "outline-none",
    "transition-all",
    "text-md",
    "sm:text-lg",
    "tracking-wide",
  ],
  active: ["bg-primary-500", "text-white", "cursor-default"],
  inctive: [
    "bg-white",
    "hover:bg-blue-100",
    "focus:bg-blue-100",
    "text-dark-500",
    "cursor-pointer",
  ],
  icon: ["mr-2.5"],
};

const NavbarButtonRaw = ({
  children,
  isActive,
  href = "",
  icon,
}: NavbarButtonProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const onClick = useCallback(() => ref.current?.blur(), []);
  return (
    <Link
      ref={ref}
      className={joinStringArrays(cn.base, isActive ? cn.active : cn.inctive)}
      href={href}
      onClick={onClick}
    >
      <span className={joinStringArrays(cn.icon)}>{icon}</span>
      {children}
    </Link>
  );
};

export const NavbarButton = memo(NavbarButtonRaw);
