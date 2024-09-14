import { memo } from "react";
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { LeftSlideProps } from "@/components/Slide/LeftSlide";

export interface LeftImgSlideProps extends LeftSlideProps {}

const style = {
  container: "flex flex-row my-6 md:space-x-6 items-center",
  content: "w-full md:w-1/2 space-y-4",
  imgContainer: "w-1/2 h-72 relative shadow-polaroid hidden md:block",
};

const LeftImgSlideRaw = ({
  imgSrc,
  imgAlt,
  header,
  children,
}: LeftImgSlideProps) => {
  return (
    <article className={style.container}>
      <div className={style.imgContainer}>
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>
      <div className={style.content}>
        <Text>{header}</Text>
        {children}
      </div>
    </article>
  );
};

export const LeftImgSlide = memo(LeftImgSlideRaw);
