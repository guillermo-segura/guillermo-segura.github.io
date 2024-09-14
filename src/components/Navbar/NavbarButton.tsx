"use client";
import { memo, useCallback, useRef, ReactNode } from "react";
import Link from "next/link";
import { joinStringArrays } from "@/utils";

interface NavbarButtonProps {
  children: string;
  icon: ReactNode;
  isActive?: boolean;
  href?: string;
}

const cn = {
  base: [
    "px-4",
    "py-1",
    "rounded-lg",
    "shadow-md",
    "whitespace-nowrap",
    "outline-none",
    "transition-all",
    "text-lg",
    "tracking-wide",
  ],
  active: ["bg-primary-500", "text-white", "cursor-default"],
  inctive: [
    "bg-white",
    "hover:bg-primary-100",
    "focus:bg-primary-100",
    "hover:shadow-lg",
    "text-dark-500",
    "cursor-pointer",
  ],
  icon: ["sm:mr-2.5"],
  label: ["hidden", "sm:inline"],
};

const NavbarButtonRaw = ({
  children,
  icon,
  isActive = false,
  href = "/",
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
      <span className={joinStringArrays(cn.label)}>{children}</span>
    </Link>
  );
};

export const NavbarButton = memo(NavbarButtonRaw);
