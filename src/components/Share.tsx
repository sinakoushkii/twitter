"use client";

import React, { useActionState, useEffect, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";
import FormSubmitButton from "./FormSubmitButton";
import { useFormState } from "react-dom";

export type ImageSettingType = {
  type: "original" | "wide" | "square";
  sensitive: boolean;
};

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [imageSetting, setImageSetting] = useState<ImageSettingType>({
    type: "original",
    sensitive: false,
  });
  const [state, formAction, pending] = useActionState(
    async (_prev: any, formData: FormData) => {
      await shareAction(formData, imageSetting);
      return {}; // or return any state you want
    },
    {}
  );

  // 🔄 Clear media after successful post
  useEffect(() => {
    if (!pending && media) {
      setMedia(null);
    }
  }, [pending]);
  const previewImage = media ? URL.createObjectURL(media) : null;

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form
      className="flex p-4 gap-4"
      // action={(formData) => shareAction(formData, imageSetting)}
      action={formAction}
    >
      {/* Aavtar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="general/avatar.jpg"
          w={100}
          h={100}
          tr={true}
          alt="sina koushki"
        />
      </div>
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          type="text"
          name="desc"
          placeholder="Whats happening ?!"
        />
        {/* Image preview */}
        {media?.type.includes("image") && previewImage && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewImage}
              width={600}
              height={600}
              alt="image-preview"
              className={`w-full ${
                imageSetting.type === "original"
                  ? "h-full object-contain"
                  : imageSetting.type === "square"
                  ? "aspect-square object-cover"
                  : imageSetting.type === "wide"
                  ? "aspect-video object-cover"
                  : ""
              } ${imageSetting.sensitive ? "blur-md" : ""}`}
            />
            <div
              onClick={() => setIsEditorOpen(true)}
              className="absolute top-2 left-2 font-bold text-sm text-white bg-black bg-opacity-50 hover:bg-opacity-100 cursor-pointer py-1 px-4 rounded-full"
            >
              Edit
            </div>
            <div
              onClick={() => setMedia(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-100 text-white py-1 px-3 rounded-full text-sm font-bold cursor-pointer"
            >
              X
            </div>
          </div>
        )}
        {/* Video preview */}
        {media?.type.includes("video") && previewImage && (
          <div className="relative">
            <video src={previewImage} controls />
            <div
              onClick={() => setMedia(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-100 text-white py-1 px-3 rounded-full text-sm font-bold cursor-pointer"
            >
              X
            </div>
          </div>
        )}

        {/* Image Editor */}
        {previewImage && isEditorOpen && (
          <ImageEditor
            previewUrl={previewImage}
            setting={imageSetting}
            setSetting={setImageSetting}
            onClose={() => setIsEditorOpen(false)}
          />
        )}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-4">
            <input
              className="hidden"
              id="file"
              name="file"
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
            />
            <label htmlFor="file">
              <Image
                className="cursor-pointer"
                path="icons/image.svg"
                w={20}
                h={20}
                tr={false}
                alt="post-icon"
              />
            </label>
            <Image
              className="cursor-pointer"
              path="icons/gif.svg"
              w={20}
              h={20}
              tr={false}
              alt="post-icon"
            />
            <Image
              className="cursor-pointer"
              path="icons/poll.svg"
              w={20}
              h={20}
              tr={false}
              alt="post-icon"
            />
            <Image
              className="cursor-pointer"
              path="icons/emoji.svg"
              w={20}
              h={20}
              tr={false}
              alt="post-icon"
            />
            <Image
              className="cursor-pointer"
              path="icons/schedule.svg"
              w={20}
              h={20}
              tr={false}
              alt="post-icon"
            />
            <Image
              className="cursor-pointer"
              path="icons/location.svg"
              w={20}
              h={20}
              tr={false}
              alt="post-icon"
            />
          </div>
          <FormSubmitButton
            className="bg-white text-black font-bold rounded-full py-2 px-4"
            text="Post"
          />
        </div>
      </div>
    </form>
  );
};

export default Share;
