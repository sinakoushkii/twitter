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

  const handleChangeType=(type:"wide"|"square"|"original")=>{
    setSetting((previousState) => ({ ...previousState, type }));
  }

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
            } ${setting.sensitive ? "blur-md" : ""}`}
          />
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("original")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    setting.type === "original"
                      ? "fill-iconBlue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Original
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("wide")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    setting.type === "wide"
                      ? "fill-iconBlue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Wide
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("square")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    setting.type === "square"
                      ? "fill-iconBlue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              Square
            </div>
          </div>
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
