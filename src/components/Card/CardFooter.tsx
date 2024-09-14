import { memo, useCallback } from "react";
import {
  faMediumM,
  faGithub,
  faLinkedinIn,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { BrandLink } from "@/components/BrandLink/BrandLink";
import { Text } from "@/components/Text/Text";
import { joinStringArrays } from "@/utils";
import content from "@/content/home.json";

const style = {
  container: [
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "space-y-4",
    "p-6",
    "sm:px-12",
  ],
  iconsContainer: ["flex", "flex-row", "space-x-6"],
};

interface BrandItem {
  path: string;
  icon: IconDefinition;
  label: string;
}

const brandItems: BrandItem[] = [
  {
    path: "https://www.linkedin.com/in/g-segura/",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    path: "https://github.com/guillermo-segura",
    icon: faGithub,
    label: "GitHub",
  },
  {
    path: "https://medium.com/@viltran.co",
    icon: faMediumM,
    label: "Medium",
  },
];

const CardFooterRaw = () => {
  const mapItemButtons = useCallback(
    (item: BrandItem) => (
      <BrandLink key={item.label} href={item.path} icon={item.icon}>
        {item.label}
      </BrandLink>
    ),
    [],
  );
  return (
    <footer className={joinStringArrays(style.container)}>
      <div>
        <Text variant="subtext">{content.reachOut}</Text>
      </div>
      <div className={joinStringArrays(style.iconsContainer)}>
        {brandItems.map(mapItemButtons)}
      </div>
    </footer>
  );
};

export const CardFooter = memo(CardFooterRaw);
