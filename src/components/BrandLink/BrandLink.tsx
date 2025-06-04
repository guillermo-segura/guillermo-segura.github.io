"use client";
import { memo, useCallback, useRef } from "react";
import Link from "next/link";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinStringArrays } from "@/utils";

interface BrandLinkProps {
  children: string;
  icon: IconDefinition;
  href?: string;
}

const cn = {
  base: [
    "p-0.5",
    "whitespace-nowrap",
    "outline-none",
    "transition-all",
    "text-md",
    "tracking-wide",
    "border-solid",
    "border-b",
    "border-dark-500",
    "text-dark-500",
    "cursor-pointer",
  ],
  hover: ["hover:text-primary-500", "hover:border-primary-500"],
  focus: ["focus:text-primary-500", "focus:border-primary-500"],
  iconContainer: ["hidden", "xs:inline"],
  icon: ["xs:mr-2"],
};

const BrandLinkRaw = ({ children, icon, href = "/" }: BrandLinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const onClick = useCallback(() => ref.current?.blur(), []);
  return (
    <Link
      ref={ref}
      className={joinStringArrays(cn.base, cn.hover, cn.focus)}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={joinStringArrays(cn.iconContainer)}>
        <FontAwesomeIcon icon={icon} className={joinStringArrays(cn.icon)} />
      </span>
      {children}
    </Link>
  );
};

export const BrandLink = memo(BrandLinkRaw);
