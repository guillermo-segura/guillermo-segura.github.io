import { memo, ReactNode } from "react";
import { joinStringArrays } from "@/utils";

type spaceY = 3 | 6 | 12;

export interface CardSectionProps {
  children: ReactNode;
  blue?: boolean;
  withShadow?: boolean;
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
  blue: ["bg-primary-100"],
  shadow: ["shadow-inner-xl"],
};

const CardSectionRaw = ({
  children,
  blue = false,
  withShadow = false,
  spaceY = 12,
}: CardSectionProps) => (
  <section
    className={joinStringArrays(
      style.container(spaceY),
      blue ? style.blue : [],
      withShadow ? style.shadow : [],
    )}
  >
    {children}
  </section>
);

export const CardSection = memo(CardSectionRaw);
