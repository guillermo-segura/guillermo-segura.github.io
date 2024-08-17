import Image, { ImageProps } from "next/image";
import { Pin } from "@/components/Pin/Pin";
import { memo } from "react";

const classNames = {
  container: 'p-2 pb-12 relative h-max w-max transform-gpu bg-gradient-to-bl from-stone-100 to-stone-50 self-center',
  tilt: {
    left: 'shadow-polaroid rotate-2 bg-gradient-to-tl',
    right: 'shadow-polaroid -rotate-2 bg-gradient-to-tr',
  },
};

export interface PolaroidImgProps {
  imgSrc: string | ImageProps['src'];
  imgAlt?: string;
  size?: number;
  tilt?: 'left' | 'right';
}

const PolaroidImgRaw = ({ imgSrc, imgAlt = '', size = 300, tilt = 'left' }: PolaroidImgProps) => {
  return (
    <div className={classNames.container.concat(' ', classNames.tilt[tilt])}>
      <Image 
        src={imgSrc}
        alt={imgAlt}
        width={size}
        height={size}
      />
      <Pin tilt={tilt} />
    </div>
  );
}

export const PolaroidImg = memo(PolaroidImgRaw);
