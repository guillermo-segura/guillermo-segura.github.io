import { memo } from "react";

export interface CardSectionProps {
  children: React.ReactNode;
  blue?: boolean
}

const cn = {
  container: ['flex', 'flex-col', 'p-6', 'sm:p-12', 'space-y-12'],
  blue: ['bg-blue-100'],
};

const CardSectionRaw = ({ children, blue = false }: CardSectionProps) => (
  <section className={(blue ? [...cn.container, ...cn.blue] : cn.container).join(' ')}>
    {children}
  </section>
);

export const CardSection = memo(CardSectionRaw);
