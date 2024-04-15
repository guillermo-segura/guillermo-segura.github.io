'use client'

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface IconLinkProps {
  href: string;
  imgAlt: string;
  imgSrc: string | ImageProps['src'];
  hoveredImgSrc: string | ImageProps['src'];
}

export default function IconLink({ href = '', imgSrc, hoveredImgSrc, imgAlt }: IconLinkProps) {
  const [hovered, setHovered] = useState(false);
  const onMouseOver = () => setHovered(true);
  const onMouseOut = () => setHovered(false);

  console.log('Hovered', href, hovered);

  return (
    <Link
      href={href}
      target="_blank"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Image
        src={hovered ? hoveredImgSrc : imgSrc}
        alt={imgAlt}
        width={40}
        height={40}
        className="cursor-pointer"
      />
    </Link>
  );
}