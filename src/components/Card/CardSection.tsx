import { memo } from "react";

type spaceY = 3 | 6 | 12;

export interface CardSectionProps {
  children: React.ReactNode;
  blue?: boolean
  spaceY?: spaceY;
}

const cn = {
  container: (spaceY: spaceY) => ['flex', 'flex-col', 'p-6', 'sm:p-12', `space-y-${spaceY}`, 'overflow-hidden'],
  blue: ['bg-blue-100', 'shadow-inner-xl'],
};

const CardSectionRaw = ({ children, blue = false, spaceY = 12 }: CardSectionProps) => (
  <section className={(blue ? [...cn.container(spaceY), ...cn.blue] : cn.container(spaceY)).join(' ')}>
    {children}
  </section>
);

export const CardSection = memo(CardSectionRaw);
