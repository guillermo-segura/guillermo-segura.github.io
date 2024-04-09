import Image, { ImageProps } from "next/image";

const classNames = {
  container: 'p-2 pb-12 shadow-[-4px_4px_12px_rgba(0,0,0,0.2)] relative min-h-max min-w-max rotate-1 transform-gpu bg-gradient-to-bl from-white to-slate-100',
  pin: {
    base: 'absolute w-7 h-7 rounded-full bg-gradient-to-tr from-red-600 to-red-800 shadow-[-2px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3',
    head: 'absolute w-5 h-5 rounded-full bg-red-500 shadow-[-4px_4px_5px_rgba(0,0,0,0.5)] left-1/2 -top-3 ml-2',
  },
  text: 'absolute bottom-4 left-5 italic text-gray-400 font-mono text-sm antialiased',
};

interface PolaroidImgProps {
  imgSrc: string | ImageProps['src'];
  imgAlt?: string;
  size?: number;
}

export default function PolaroidImg({ imgSrc, imgAlt = '', size = 300 }: PolaroidImgProps) {
  return (
    <div className={classNames.container}>
      <Image 
        src={imgSrc}
        alt={imgAlt}
        width={size}
        height={size}
        className="border border-stone-100"
      />
      <div className={classNames.pin.base}></div>
      <div className={classNames.pin.head}></div>
      <div className={classNames.text}>- {imgAlt}</div>
    </div>
  );
}