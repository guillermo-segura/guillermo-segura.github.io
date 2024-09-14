import { memo } from "react";
import {
  PolaroidImg,
  PolaroidImgProps,
} from "@/components/PolaroidImg/PolaroidImg";
import { Text } from "@/components/Text/Text";
import { SlideProps } from "./Slide";

export interface RightSlideProps extends SlideProps {
  imgSrc: PolaroidImgProps["imgSrc"];
  imgAlt: PolaroidImgProps["imgAlt"];
}

const style = {
  container: "flex flex-row md:space-x-6 items-start",
  content: "w-full space-y-4",
  imgContainer: "hidden md:block",
};

const RightSlideRaw = ({
  imgSrc,
  imgAlt,
  header,
  children,
}: RightSlideProps) => {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <Text textAlign="right">{header}</Text>
        {children}
      </div>
      <div className={style.imgContainer}>
        <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" />
      </div>
    </article>
  );
};

export const RightSlide = memo(RightSlideRaw);
