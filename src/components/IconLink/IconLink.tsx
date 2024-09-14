"use client";

import { memo, useState } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface IconLinkProps {
  id: string;
  href: string;
  imgAlt: string;
  imgSrc: string | ImageProps["src"];
  hoveredImgSrc: string | ImageProps["src"];
}

const IconLinkRaw = ({
  id,
  imgSrc,
  hoveredImgSrc,
  imgAlt,
  href = "",
}: IconLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const onMouseOver = () => setHovered(true);
  const onMouseOut = () => setHovered(false);

  return (
    <Link
      id={id}
      href={href}
      target="_blank"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      className="outline-none"
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
};

export const IconLink = memo(IconLinkRaw);
