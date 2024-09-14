import { memo } from "react";
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { RightSlideProps } from "@/components/Slide/RightSlide";

export interface RightImgSlideProps extends RightSlideProps {}

const style = {
  container: "flex flex-row my-6 md:space-x-6 items-center",
  content: "w-full md:w-1/2 space-y-4",
  imgContainer: "w-1/2 h-72 relative shadow-polaroid hidden md:block",
};

const RightImgSlideRaw = ({
  imgSrc,
  imgAlt,
  header,
  children,
}: RightImgSlideProps) => {
  return (
    <article className={style.container}>
      <div className={style.content}>
        <Text textAlign="right">{header}</Text>
        {children}
      </div>
      <div className={style.imgContainer}>
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>
    </article>
  );
};

export const RightImgSlide = memo(RightImgSlideRaw);
