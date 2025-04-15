import React from "react";
import Image from "./Image";
import NextImage from "next/image";
import eventImage from "../../public/general/event.jpg";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-lg font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* Trends */}
      <div className="flex items-center gap-4">
        {/* image */}
        <div className="relative w-20 h-20 rounded-md overflow-hidden">
          {/* <Image
            path="../../public/general/event.jpg"
            w={120}
            h={120}
            tr={true}
            alt="event"
          /> */}
          <NextImage
            className="absolute rounded-md"
            src={eventImage}
            width={120}
            height={120}
            alt="event"
          />
        </div>
        {/* description */}
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">Italy Marathon</h2>
          <span className="text-sm text-textGray">
            From the creators of Halo and Destiny comes Marathon, Bungie's new
            team-based extraction shooter.
          </span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
