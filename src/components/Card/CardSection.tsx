import { memo } from "react";

export interface CardSectionProps {
  children: React.ReactNode;
  blue?: boolean
  inset?: boolean
}

const cn = {
  container: ['flex', 'flex-col', 'p-6', 'sm:p-12', 'space-y-12', 'overflow-hidden'],
  blue: ['bg-blue-100', 'shadow-inner-xl'],
};

const CardSectionRaw = ({ children, blue = false, inset = false }: CardSectionProps) => (
  <section className={(blue ? [...cn.container, ...cn.blue] : cn.container).join(' ')}>
    {children}
  </section>
);

export const CardSection = memo(CardSectionRaw);
