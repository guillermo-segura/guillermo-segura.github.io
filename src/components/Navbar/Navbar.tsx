"use client";
import { memo, useCallback } from "react";
import content from "@/content/actions.json";
import { NavbarButton } from "./NavbarButton";
import { usePathname } from "next/navigation";
import { joinStringArrays } from "@/utils";
import {
  faHouse,
  faUser,
  faPen,
  faCode,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { container, buttons } from "./classnames";

interface NavItem {
  path: string;
  icon: IconDefinition;
  label: string;
}

const navItems: NavItem[] = [
  {
    path: "/",
    icon: faHouse,
    label: content.home,
  },
  {
    path: "/traits",
    icon: faUser,
    label: content.aboutMe,
  },
  {
    path: "/skills",
    icon: faCode,
    label: content.skills,
  },
  {
    path: "/blog",
    icon: faPen,
    label: content.blog,
  },
];

const NavbarRaw = () => {
  const pathname = usePathname();
  const mapItemButtons = useCallback(
    (item: NavItem) => (
      <NavbarButton
        key={item.label}
        href={item.path}
        isActive={pathname === item.path}
        icon={item.icon}
      >
        {item.label}
      </NavbarButton>
    ),
    [pathname],
  );
  return (
    <nav className={joinStringArrays(container)}>
      <div className={joinStringArrays(buttons)}>
        {navItems.map(mapItemButtons)}
      </div>
    </nav>
  );
};

export const Navbar = memo(NavbarRaw);
