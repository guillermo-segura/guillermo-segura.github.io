import Image, { ImageProps } from "next/image";
import PolaroidImg from "../PolaroidImg/PolaroidImg";

const classNames = {
  container: 'flex flex-row space-x-4 p-6',
  headerContainer: 'self-center w-full flex space-y-4 flex-col',
  header: 'font-bold text-6xl font-mono',
};

interface CardHeaderProps {
  imgSrc?: string | ImageProps['src'];
  header: string;
  description: string;
}

export default function CardHeader({ imgSrc, header, description }: CardHeaderProps) {
  const polaroid = true;
  return (
    <div className={classNames.container}>
      {imgSrc && (
        <PolaroidImg imgSrc={imgSrc} imgAlt="This is me" size={250} />
      )}
      <div className={classNames.headerContainer}>
        <div>
          <h1 className={classNames.header}>{header}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}