import { memo, ReactNode } from "react";
import { Text } from "@/components/Text/Text";

export interface SlideProps {
  header: string;
  children: ReactNode;
}

const style = {
  container: "flex flex-col items-center w-full space-y-4",
};

const SlideRaw = ({ header, children }: SlideProps) => {
  return (
    <article className={style.container}>
      <Text textAlign="center">{header}</Text>
      {children}
    </article>
  );
};

export const Slide = memo(SlideRaw);
