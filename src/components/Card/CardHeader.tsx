import { ImageProps } from "next/image";
import PolaroidImg from "../PolaroidImg/PolaroidImg";

const classNames = {
  container: 'flex lg:flex-row flex-col lg:space-x-6 space-y-6 lg:space-y-0  space-x-0 p-12',
  headerContainer: 'flex flex-col space-y-6 self-center grow',
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
        <PolaroidImg imgSrc={imgSrc} imgAlt={imgAlt} size={imgSize} />
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