import profilePic from '@/assets/avatar.svg';
import PolaroidImg, { PolaroidImgProps } from '@/components/PolaroidImg/PolaroidImg';
import ButtonLink from '../ButtonLink/ButtonLink';

export interface SlideProps {
  imgSrc?: PolaroidImgProps['imgSrc'];
  imgAlt?: PolaroidImgProps['imgAlt'];
  right?: boolean;
  header: string | React.ReactNode;
  content: string | React.ReactNode;
}

const classNames = {
  container: 'flex flex-row xs:space-x-6 items-center',
  header: 'font-mono font-bold text-xl',
  contentL: 'w-full md:text-left text-left xs:text-center',
  contentR: 'w-full md:text-right text-left xs:text-center',
  contentNoImg: 'w-full text-left xs:text-center',
  imgContainer: 'hidden md:block',
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
        {imgSrc && <div className={classNames.imgContainer}><PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" /></div>}
      </div>
    );
  }

  return (
    <div className={classNames.container}>
      {imgSrc && <div className={classNames.imgContainer}><PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" /></div>}
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
