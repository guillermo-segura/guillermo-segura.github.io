import { memo, ReactNode } from "react";
import { joinStringArrays } from "@/utils";

type spaceY = 3 | 6 | 12;

export interface CardSectionProps {
  children: ReactNode;
  blue?: boolean;
  spaceY?: spaceY;
}

const style = {
  container: (spaceY: spaceY) => [
    "flex",
    "flex-col",
    "p-6",
    "sm:p-12",
    `space-y-${spaceY}`,
    "overflow-hidden",
  ],
  blue: ["bg-primary-100", "shadow-inner-xl"],
};

const CardSectionRaw = ({
  children,
  blue = false,
  spaceY = 12,
}: CardSectionProps) => (
  <section
    className={joinStringArrays(
      style.container(spaceY),
      blue ? style.blue : [],
    )}
  >
    {children}
  </section>
);

export const CardSection = memo(CardSectionRaw);
