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
  container: 'h-full flex flex-row justify-around items-center relative',
  header: 'font-mono font-bold text-xl',
  contentL: 'w-1/3',
  contentR: 'w-1/3 text-right',
  lgContentL: 'w-2/3 text-center',
  lgContentR: 'w-2/3 text-center',
  next: 'absolute bottom-2 right-2',
  prev: 'absolute bottom-2 left-2',
}

export default function Slide ({ right = false, imgSrc, imgAlt, header, content }: SlideProps) {
  if (right) {
    return (
      <div className={classNames.container}>
        <div className={imgSrc ? classNames.contentR : classNames.lgContentR}>
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
      <div className={imgSrc ? classNames.contentL : classNames.lgContentL}>
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
