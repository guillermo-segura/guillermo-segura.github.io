import { joinStringArrays } from "@/utils";
import { memo } from "react";
import { Text } from "../Text/Text";
import { ButtonLink } from "../ButtonLink/ButtonLink";

const style = {
  container: [
    "flex",
    "flex-col",
    "items-right",
    "p-4",
    "w-full",
    "rounded-lg",
    "border",
    "border-dashed",
    "border-stone-300",
    "hover:bg-white",
    "hover:border-dark-500",
    "transition-all",
    "duration-300",
  ],
  title: ["border-b-2", "border-stone-100", "py-2", "mb-4"],
};

export interface BlogCardProps {
  title: string;
  description: string;
  url: string;
}

const BlogCardRaw = ({ title, description, url }: BlogCardProps) => {
  return (
    <article className={joinStringArrays(style.container)}>
      <div>
        <div className={joinStringArrays(style.title)}>
          <Text>{title}</Text>
        </div>
        <div>
          <Text variant="subtext">{description}</Text>
        </div>
      </div>
      <div className="flex flex-row mx-auto">
        <ButtonLink blank href={url} variant="secondary">
          Read more
        </ButtonLink>
      </div>
    </article>
  );
};

export const BlogCard = memo(BlogCardRaw);
