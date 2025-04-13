import React, { MouseEvent } from "react";
import { ImageSettingType } from "./Share";
import Image from "next/image";

type ImageEditorProps = {
  previewUrl: string;
  onClose: () => void;
  setting: ImageSettingType;
  setSetting: React.Dispatch<React.SetStateAction<ImageSettingType>>;
};

const ImageEditor = ({
  previewUrl,
  onClose,
  setting,
  setSetting,
}: ImageEditorProps) => {
  const handleChangeSensitive = (sensitive: boolean) => {
    setSetting((previousState) => ({ ...previousState, sensitive }));
  };
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-screen h-screen bg-black/75 z-10 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black rounded-xl py-4 px-10 flex flex-col gap-4 border border-borderGray"
      >
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* back icon & title */}
          <div className="flex items-center gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              onClick={onClose}
              className="cursor-pointer"
            >
              <path
                fill="white"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="text-xl font-bold">Media Settings</h1>
          </div>
          {/* Save Button */}
          <button className="py-2 px-4 rounded-full bg-white text-black font-bold">
            Save
          </button>
        </div>
        {/*Image Container  */}
        <div className="w-[600px] h-[600px] flex items-center">
          <Image
            src={previewUrl}
            height={600}
            width={600}
            alt="preview"
            className={`w-full ${
              setting.type === "original"
                ? "h-full object-contain"
                : setting.type === "square"
                ? "aspect-square object-cover"
                : setting.type === "wide"
                ? "aspect-video object-cover"
                : ""
            }`}
          />
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8"></div>
          <div
            className={`cursor-pointer py-1 px-4 rounded-full font-bold ${
              setting.sensitive
                ? "text-white bg-red-600"
                : "text-black bg-white"
            }`}
            onClick={() => {
              handleChangeSensitive(!setting.sensitive);
            }}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
