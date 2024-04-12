import { ImageProps } from "next/image";
import PolaroidImg from "../PolaroidImg/PolaroidImg";

const classNames = {
  container: 'flex flex-row space-x-6 p-12',
  headerContainer: 'flex flex-col space-y-6 self-center w-full',
  header: 'font-mono font-bold text-6xl',
  description: 'text-2xl',
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