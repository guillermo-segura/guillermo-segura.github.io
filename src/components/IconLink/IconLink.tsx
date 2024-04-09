'use client'
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface IconLinkProps {
  href: string;
  imgSrc: string | ImageProps['src'];
}

export default function IconLink({ href = '', imgSrc }: IconLinkProps) {
  const [hovered, setHovered] = useState(false);
  const onMouseOver = () => setHovered(true);
  const onMouseOut = () => setHovered(false);

  console.log('Hovered', href, hovered);

  return (
    <a
      href={href}
      target="_blank"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Image
        src={imgSrc}
        alt=""
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </a>
  );
}