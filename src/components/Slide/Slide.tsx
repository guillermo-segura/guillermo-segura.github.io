import profilePic from '@/assets/avatar.svg';
import PolaroidImg, { PolaroidImgProps } from '@/components/PolaroidImg/PolaroidImg';
import ButtonLink from '../ButtonLink/ButtonLink';

export interface SlideProps {
  imgSrc?: PolaroidImgProps['imgSrc'];
  imgAlt?: PolaroidImgProps['imgAlt'];
  right?: boolean;
}

const classNames = {
  container: 'h-full flex flex-row justify-around items-center relative',
  header: 'font-mono font-bold text-xl',
  contentContainerL: 'w-1/3',
  contentContainerR: 'w-1/3 text-right',
  next: 'absolute bottom-2 right-2',
  prev: 'absolute bottom-2 left-2',
}

export default function Slide ({ right = false, imgSrc, imgAlt }: SlideProps) {
  if (right) {
    return (
      <div className={classNames.container}>
        <div className={classNames.contentContainerR}>
          <div className={classNames.header}>
            This is the header
          </div>
          <div>
            This is some content
          </div>
        </div>
        {imgSrc && <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" />}
      </div>
    );
  }

  return (
    <div className={classNames.container}>
      {imgSrc && <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" />}
      <div className={classNames.contentContainerL}>
        <div className={classNames.header}>
          This is the header
        </div>
        <div>
          This is some content
        </div>
      </div>
    </div>
  );
};
