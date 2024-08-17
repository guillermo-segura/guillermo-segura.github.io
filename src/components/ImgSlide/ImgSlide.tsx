import { memo } from 'react';
import Image, { ImageProps} from 'next/image';
import { Text } from '@/components/Text/Text';

export interface ImgSlideProps {
  imgSrc: ImageProps['src'];
  imgAlt: ImageProps['alt'];
  right?: boolean;
  header: string;
  content: string | React.ReactNode;
}

const classNames = {
  container: 'flex flex-row my-6 md:space-x-6 items-center',
  content: 'w-full md:w-1/2',
  imgContainer: 'w-1/2 h-72 relative shadow-card hidden md:block',
}

const ImgSlideRaw = ({ right = false, imgSrc, imgAlt, header, content }: ImgSlideProps) => {
  if (right) {
    return (
      <div className={classNames.container}>
        <div className={classNames.content}>
          <Text textAlign='right'>
            {header}
          </Text>
          <Text variant='subtext' textAlign='right'>
            {content}
          </Text>
        </div>
        <div className={classNames.imgContainer}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.imgContainer}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className={classNames.content}>
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

export const ImgSlide = memo(ImgSlideRaw);
