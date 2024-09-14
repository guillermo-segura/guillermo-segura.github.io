import { memo, ReactNode } from "react";
import { joinStringArrays } from "@/utils";

const style = {
  container: [
    "w-full",
    "max-w-4xl",

    "bg-gradient-to-b",
    "from-white",
    "to-stone-100",

    "rounded-lg",
    "shadow-card",
    "text-black",
  ],
};

const CardRaw = ({ children }: { children: ReactNode }) => {
  return <div className={joinStringArrays(style.container)}>{children}</div>;
};

export const Card = memo(CardRaw);
