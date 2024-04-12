import { ImageProps } from "next/image";
import PolaroidImg from "../PolaroidImg/PolaroidImg";

const classNames = {
  container: 'flex flex-row space-x-4 px-12 pt-12',
  headerContainer: 'self-center w-full flex space-y-4 flex-col',
  header: 'font-bold text-6xl font-mono',
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
        <div>
          <h1 className={classNames.header}>{header}</h1>
        </div>
        {description && (
          <div className="text-2xl">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}