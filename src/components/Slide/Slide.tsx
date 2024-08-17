import { memo } from 'react';
import { PolaroidImg, PolaroidImgProps } from '@/components/PolaroidImg/PolaroidImg';
import { Text } from '@/components/Text/Text';

export interface SlideProps {
  imgSrc?: PolaroidImgProps['imgSrc'];
  imgAlt?: PolaroidImgProps['imgAlt'];
  right?: boolean;
  header: string | React.ReactNode;
  content: string | React.ReactNode;
}

const cn = {
  container: 'flex flex-row md:space-x-6 items-start',
  content: 'w-full',
  imgContainer: 'hidden md:block',
}

const SlideRaw = ({ right = false, imgSrc, imgAlt, header, content }: SlideProps) => {
  if (right) {
    return (
      <div className={cn.container}>
        <div className={cn.content}>
          <Text textAlign='right'>
            {header}
          </Text>
          <Text variant='subtext' textAlign='right'>
            {content}
          </Text>
        </div>
        {imgSrc && (
          <div className={cn.imgContainer}>
            <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn.container}>
      {imgSrc && (
        <div className={cn.imgContainer}>
          <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" />
        </div>
      )}
      <div className={cn.content}>
        <Text textAlign={imgSrc ? 'left' : 'center'}>
          {header}
        </Text>
        <Text variant='subtext' textAlign={imgSrc ? 'left' : 'center'}>
          {content}
        </Text>
      </div>
    </div>
  );
};

export const Slide = memo(SlideRaw);
