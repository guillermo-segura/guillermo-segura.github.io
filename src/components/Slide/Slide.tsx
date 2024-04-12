import profilePic from '@/assets/avatar.svg';
import PolaroidImg, { PolaroidImgProps } from '@/components/PolaroidImg/PolaroidImg';
import ButtonLink from '../ButtonLink/ButtonLink';

export interface SlideProps {
  imgSrc?: PolaroidImgProps['imgSrc'];
  imgAlt?: PolaroidImgProps['imgAlt'];
  right?: boolean;
  header: string;
  content: string;
}

const classNames = {
  container: 'h-full flex flex-row space-x-6 items-center relative',
  header: 'font-mono font-bold text-xl',
  contentL: 'w-full',
  contentR: 'w-full text-right',
  contentNoImg: 'w-full text-center',
  next: 'absolute bottom-2 right-2',
  prev: 'absolute bottom-2 left-2',
}

export default function Slide ({ right = false, imgSrc, imgAlt, header, content }: SlideProps) {
  if (right) {
    return (
      <div className={classNames.container}>
        <div className={imgSrc ? classNames.contentR : classNames.contentNoImg}>
          <div className={classNames.header}>
            {header}
          </div>
          <div>
            {content}
          </div>
        </div>
        {imgSrc && <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" />}
      </div>
    );
  }

  return (
    <div className={classNames.container}>
      {imgSrc && <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" />}
      <div className={imgSrc ? classNames.contentL : classNames.contentNoImg}>
        <div className={classNames.header}>
          {header}
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  );
};
