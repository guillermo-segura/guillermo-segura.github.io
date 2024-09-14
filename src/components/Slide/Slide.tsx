import { memo, ReactNode } from "react";
import {
  PolaroidImg,
  PolaroidImgProps,
} from "@/components/PolaroidImg/PolaroidImg";
import { Text } from "@/components/Text/Text";

export interface SlideProps {
  imgSrc?: PolaroidImgProps["imgSrc"];
  imgAlt?: PolaroidImgProps["imgAlt"];
  right?: boolean;
  header: string | ReactNode;
  content: string | ReactNode;
}

const style = {
  container: "flex flex-row md:space-x-6 items-start",
  content: "w-full",
  imgContainer: "hidden md:block",
};

const SlideRaw = ({
  right = false,
  imgSrc,
  imgAlt,
  header,
  content,
}: SlideProps) => {
  if (right) {
    return (
      <article className={style.container}>
        <div className={style.content}>
          <Text textAlign="right">{header}</Text>
          <Text variant="subtext" textAlign="right">
            {content}
          </Text>
        </div>
        {imgSrc && imgAlt && (
          <div className={style.imgContainer}>
            <PolaroidImg
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              size={200}
              tilt="left"
            />
          </div>
        )}
      </article>
    );
  }
  const textAlign = imgSrc ? "left" : "center";
  return (
    <article className={style.container}>
      {imgSrc && imgAlt && (
        <div className={style.imgContainer}>
          <PolaroidImg
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            size={200}
            tilt="right"
          />
        </div>
      )}
      <div className={style.content}>
        <Text textAlign={textAlign}>{header}</Text>
        <Text variant="subtext" textAlign={textAlign}>
          {content}
        </Text>
      </div>
    </article>
  );
};

export const Slide = memo(SlideRaw);
