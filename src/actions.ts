"use server";

import { ImageSettingType } from "./components/Share";
import { imageKit } from "./utils";


export const shareAction = async (
  formData: FormData,
  imageSettings: ImageSettingType
) => {
  const file = formData.get("file");
  const desc = formData.get("desc");

  if (!(file instanceof File)) {
    throw new Error("something went wrong");
  }

  const transformation = `w-600, ${
    imageSettings.type === "square"
      ? "ar-1-1"
      : imageSettings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  imageKit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata:{
        sensitive: imageSettings.sensitive,
      }
    },
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log("result");
      }
    }
  );
};
