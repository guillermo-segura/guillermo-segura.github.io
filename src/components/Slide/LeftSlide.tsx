import { memo } from "react";
import {
  PolaroidImg,
  PolaroidImgProps,
} from "@/components/PolaroidImg/PolaroidImg";
import { Text } from "@/components/Text/Text";
import { SlideProps } from "./Slide";

export interface LeftSlideProps extends SlideProps {
  imgSrc: PolaroidImgProps["imgSrc"];
  imgAlt: PolaroidImgProps["imgAlt"];
}

const style = {
  container: "flex flex-row md:space-x-6 items-start",
  content: "w-full space-y-4",
  imgContainer: "hidden md:block",
};

const LeftSlideRaw = ({ imgSrc, imgAlt, header, children }: LeftSlideProps) => {
  return (
    <article className={style.container}>
      <div className={style.imgContainer}>
        <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" />
      </div>
      <div className={style.content}>
        <Text>{header}</Text>
        {children}
      </div>
    </article>
  );
};

export const LeftSlide = memo(LeftSlideRaw);
