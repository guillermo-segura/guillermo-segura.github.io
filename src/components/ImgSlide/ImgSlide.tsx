import Image, { ImageProps} from 'next/image';

export interface ImgSlideProps {
  imgSrc: ImageProps['src'];
  imgAlt: ImageProps['alt'];
  right?: boolean;
  header: string;
  content: string | React.ReactNode;
}

const classNames = {
  container: 'flex flex-row md:space-x-6 items-center',
  header: 'font-mono font-bold text-xl',
  contentContainerL: 'w-full md:w-1/2 text-left xs:text-center md:text-left',
  contentContainerR: 'w-full md:w-1/2 text-left xs:text-center md:text-right',
  imgContainer: 'w-1/2 h-72 relative shadow-md hidden md:block',
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
