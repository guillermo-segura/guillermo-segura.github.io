import { memo } from "react";
import { joinStringArrays } from "@/utils";

const style = {
  divider: [
    "w-1/2",
    "border-r-4",
    "sm:border-r-8",
    "border-dotted",
    "border-stone-200",
    "h-32",
    "my-12",
  ],
};

const VerticalDividerRaw = () => {
  return (
    <div>
      <div className={joinStringArrays(style.divider)}></div>
    </div>
  );
};

export const VerticalDivider = memo(VerticalDividerRaw);
