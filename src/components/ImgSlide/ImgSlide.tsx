import Image, { ImageProps} from 'next/image';

export interface SlideProps {
  imgSrc: ImageProps['src'];
  imgAlt: ImageProps['alt'];
  right?: boolean;
  header: string;
  content: string;
}

const classNames = {
  container: 'h-full w-full flex flex-row justify-center items-center relative',
  header: 'font-mono font-bold text-xl',
  contentContainerL: 'w-1/3 mx-6',
  contentContainerR: 'w-1/3 mx-6 text-right',
}

export default function Slide ({ right = false, imgSrc, imgAlt, header, content }: SlideProps) {
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
        <div className="w-1/2 h-full relative overflow-hidden rounded-xl">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames.container}>
      <div className="w-1/2 h-full relative overflow-hidden rounded-xl">
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
