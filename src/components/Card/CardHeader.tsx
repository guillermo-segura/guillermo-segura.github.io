import { ImageProps } from "next/image";
import PolaroidImg from "../PolaroidImg/PolaroidImg";

const classNames = {
  container: [
      'flex',
      'flex-col',
      'md:space-y-6',

      'lg:flex-row',
      'lg:space-x-6',
      'lg:space-y-0',

      'space-x-0',
      'p-6',
      'xs:p-12',
    ].join(' '),
  imgContainer: 'hidden md:flex md:flex-col',
  headerContainer: 'flex flex-col space-y-6 lg:self-center grow',
  header: 'font-mono font-bold text-4xl md:text-6xl',
  description: 'text-xl md:text-2xl',
};

interface CardHeaderProps {
  imgSrc?: string | ImageProps['src'];
  header: string;
  description?: string;
  imgAlt?: string;
  imgSize?: number;
}

export default function CardHeader({ imgSrc, imgAlt, imgSize, header, description }: CardHeaderProps) {
  return (
    <div className={classNames.container}>
      {imgSrc && (
        <div className={classNames.imgContainer}>
          <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={imgSize} />
        </div>
      )}
      <div className={classNames.headerContainer}>
        <div className={classNames.header}>
          {header}
        </div>
        {description && (
          <div className={classNames.description}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
}