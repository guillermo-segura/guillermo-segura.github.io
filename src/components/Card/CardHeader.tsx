import { memo } from "react";
import { Text } from "@/components/Text/Text";
import { joinStringArrays } from "@/utils";

const style = {
  container: [
    "flex",
    "flex-col",

    "space-y-2",
    "sm:space-y-4",

    "p-4",
    "sm:p-12",
  ],
};

interface CardHeaderProps {
  header: string;
  description?: string;
}

const CardHeaderRaw = ({ header, description }: CardHeaderProps) => (
  <header className={joinStringArrays(style.container)}>
    <Text variant="h1">{header}</Text>
    {description && <Text variant="text">{description}</Text>}
  </header>
);

export const CardHeader = memo(CardHeaderRaw);
