import { memo, ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { Text } from "@/components/Text/Text";

export interface ImgSlideProps {
  imgSrc: ImageProps["src"];
  imgAlt: ImageProps["alt"];
  right?: boolean;
  header: string;
  content: string | ReactNode;
}

const style = {
  container: "flex flex-row my-6 md:space-x-6 items-center",
  content: "w-full md:w-1/2",
  imgContainer: "w-1/2 h-72 relative shadow-card hidden md:block",
};

const ImgSlideRaw = ({
  imgSrc,
  imgAlt,
  header,
  content,
  right = false,
}: ImgSlideProps) => {
  if (right) {
    return (
      <article className={style.container}>
        <div className={style.content}>
          <Text textAlign="right">{header}</Text>
          <Text variant="subtext" textAlign="right">
            {content}
          </Text>
        </div>
        <div className={style.imgContainer}>
          <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
        </div>
      </article>
    );
  }

  const textAlign = imgSrc ? "left" : "center";

  return (
    <article className={style.container}>
      <div className={style.imgContainer}>
        <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
      </div>
      <div className={style.content}>
        <Text textAlign={textAlign}>{header}</Text>
        <Text variant="subtext" textAlign={textAlign}>
          {content}
        </Text>
      </div>
    </article>
  );
};

export const ImgSlide = memo(ImgSlideRaw);
