import profilePic from '@/assets/avatar.svg';
import PolaroidImg, { PolaroidImgProps } from '@/components/PolaroidImg/PolaroidImg';
import ButtonLink from '../ButtonLink/ButtonLink';

export interface SlideProps {
  imgSrc?: PolaroidImgProps['imgSrc'];
  imgAlt?: PolaroidImgProps['imgAlt'];
  right?: boolean;
  small?: boolean;
  header: string;
  content: string | React.ReactNode;
}

const classNames = {
  container: 'min-h-72 flex flex-row space-x-6 items-center',
  containerSm: 'min-h-48 flex flex-row space-x-6 items-center',
  header: 'font-mono font-bold text-xl',
  contentL: 'w-full lg:text-left text-center',
  contentR: 'w-full lg:text-right text-center',
  contentNoImg: 'w-full text-center',
}

export default function Slide ({ right = false, imgSrc, imgAlt, header, content, small = false }: SlideProps) {
  if (right) {
    return (
      <div className={small ? classNames.containerSm : classNames.container}>
        <div className={imgSrc ? classNames.contentR : classNames.contentNoImg}>
          <div className={classNames.header}>
            {header}
          </div>
          <div>
            {content}
          </div>
        </div>
        {imgSrc && <div className="hidden lg:block"><PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="left" /></div>}
      </div>
    );
  }

  return (
    <div className={small ? classNames.containerSm : classNames.container}>
      {imgSrc && <div className="hidden lg:block"><PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={200} tilt="right" /></div>}
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
