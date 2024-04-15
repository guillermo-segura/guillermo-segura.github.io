import Image, { ImageProps} from 'next/image';

export interface ImgSlideProps {
  imgSrc: ImageProps['src'];
  imgAlt: ImageProps['alt'];
  right?: boolean;
  header: string;
  content: string;
}

const classNames = {
  container: 'h-72 w-full flex flex-row space-x-6 items-center relative',
  header: 'font-mono font-bold text-xl',
  contentContainerL: 'w-full lg:w-1/2 text-center lg:text-left',
  contentContainerR: 'w-full lg:w-1/2 text-center lg:text-right',
  imgContainer: 'w-1/2 h-full relative overflow-hidden rounded-xl hidden lg:block',
}

export default function ImgSlide ({ right = false, imgSrc, imgAlt, header, content }: ImgSlideProps) {
  if (right) {
    return (
      <div className={classNames.container}>
        <div className={classNames.contentContainerR}>
          <div className={classNames.header}>
            {header}
          </div>
          <div>
            {content}
          </div>
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
      <div className={classNames.contentContainerL}>
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
