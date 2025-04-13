"use server";

import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file");
  const desc=formData.get("desc");

  if (!(file instanceof File)) {
    throw new Error("something went wrong");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  imageKit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: "w-600",
      },
    },
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );
};
