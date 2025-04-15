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
      transformation={[
        { width: "1920", height: "1080", quality: 90 },
        { raw: "l-text:Frontend,fs-30,co-red,x-10,y-10" }
      ]}
    />
  );
};

export default Video;
