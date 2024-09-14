"use client";
import { memo } from "react";
import content from "@/content/actions.json";
import { NavbarButton } from "./NavbarButton";
import { usePathname } from "next/navigation";
import { joinStringArrays } from "@/utils";
import {
  faHouse,
  faUser,
  faPen,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cn = {
  navContainer: [
    "w-full",
    "max-w-4xl",
    "sticky",
    "top-0",
    "z-10",
    "bg-dark-500",
    "p-2",
    "bg-opacity-30",
  ],
  buttonsContainer: ["flex", "flex-wrap", "space-x-2", "justify-center"],
};

const NavbarRaw = () => {
  const pathname = usePathname();
  return (
    <nav className={joinStringArrays(cn.navContainer)}>
      <div className={joinStringArrays(cn.buttonsContainer)}>
        <NavbarButton
          href="/"
          isActive={pathname === "/"}
          icon={<FontAwesomeIcon icon={faHouse} />}
        >
          {content.home}
        </NavbarButton>
        <NavbarButton
          href="/traits"
          isActive={pathname === "/traits"}
          icon={<FontAwesomeIcon icon={faUser} />}
        >
          {content.aboutMe}
        </NavbarButton>
        <NavbarButton
          href="/skills"
          isActive={pathname === "/skills"}
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          {content.skills}
        </NavbarButton>
        <NavbarButton
          href="/blog"
          isActive={pathname === "/blog"}
          icon={<FontAwesomeIcon icon={faPen} />}
        >
          {content.blog}
        </NavbarButton>
      </div>
    </nav>
  );
};

export const Navbar = memo(NavbarRaw);
