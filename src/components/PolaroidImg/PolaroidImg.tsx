import { memo } from 'react';
import Image, { ImageProps } from 'next/image';
import { Pin } from '@/components/Pin/Pin';
import { joinStringArrays } from '@/utils';

const style = {
  container: [
    'p-2',
    'pb-12',
    'relative',
    'h-max',
    'w-max',
    'transform-gpu',
    'bg-gradient-to-bl',
    'from-stone-100',
    'to-stone-50',
    'self-center',
    'shadow-polaroid',
  ],
  tilt: {
    left: ['rotate-2', 'bg-gradient-to-tl'],
    right: ['-rotate-2', 'bg-gradient-to-tr'],
  },
};

export interface PolaroidImgProps {
  imgSrc: string | ImageProps['src'];
  imgAlt: string;
  size?: number;
  tilt?: 'left' | 'right';
}

const PolaroidImgRaw = ({ imgSrc, imgAlt, size = 300, tilt = 'left' }: PolaroidImgProps) => {
  return (
    <div className={joinStringArrays(style.container, style.tilt[tilt])}>
      <Image 
        src={imgSrc}
        alt={imgAlt}
        width={size}
        height={size}
        loading="lazy"
      />
      <Pin tilt={tilt} />
    </div>
  );
}

export const PolaroidImg = memo(PolaroidImgRaw);
