"use client";

import { IKImage } from "imagekitio-next";
import React from "react";

type ImageProps = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  tr: boolean;
  className?: string;
};

const Image = ({ path, w, h, alt, tr, className }: ImageProps) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <IKImage
      className={className}
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
    />
  );
};

export default Image;
