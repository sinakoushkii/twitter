"use client";

import { IKVideo } from "imagekitio-next";

type VideoType = {
  className?: string;
  path: string;
};

const Video = ({ className, path }: VideoType) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <IKVideo
      className={className}
      urlEndpoint={urlEndpoint}
      path={path}
      transformation={[{ width: "1920", height: "1080", quality: 90 }]}
    />
  );
};

export default Video;
