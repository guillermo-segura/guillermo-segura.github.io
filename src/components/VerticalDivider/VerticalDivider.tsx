import { memo } from "react";

const VerticalDividerRaw = () => {
  return (
    <div>
      <div className="w-1/2 border-r-4 sm:border-r-8 border-dotted border-stone-200 h-32 my-12"></div>
    </div>
  );
};

export const VerticalDivider = memo(VerticalDividerRaw);
