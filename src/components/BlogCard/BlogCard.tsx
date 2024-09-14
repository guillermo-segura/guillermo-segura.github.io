import { joinStringArrays } from "@/utils";
import { memo } from "react";
import { Text } from "../Text/Text";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const style = {
  container: [
    "flex",
    "flex-col",
    "p-4",
    "w-full",
    "rounded-lg",
    "border",
    "border-dashed",
    "border-dark-100",
    "transition-all",
    "cursor-pointer",

    "hover:bg-white",
    "hover:border-dark-500",
  ],
  content: ["space-y-2"],
};

export interface BlogCardProps {
  title: string;
  description: string;
  time: string;
  href: string;
}

const BlogCardRaw = ({ title, description, time, href }: BlogCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={joinStringArrays(style.container)}
    >
      <Text>
        <FontAwesomeIcon icon={faMedium} />
        &nbsp;
        {title}
      </Text>
      <div className={joinStringArrays(style.content)}>
        <Text variant="label">{time}</Text>
        <Text variant="subtext">{description}</Text>
      </div>
    </Link>
  );
};

export const BlogCard = memo(BlogCardRaw);
