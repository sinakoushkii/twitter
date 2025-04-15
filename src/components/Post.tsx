import Image from "./Image";
import React from "react";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imageKit } from "@/utils";
import Video from "./Video";

type FileDetailsResponse = {
  width: number;
  height: number;
  filePath: string;
  fileType: string;
  url: string;
  customMetadata?: { sensitive: boolean };
};

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imageKit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetail = await getFileDetails("67fbfaff432c476416c5d549");

  return (
    <div>
      <div className="p-4 border-y-[1px] border-borderGray">
        {/* post type */}
        <div className="flex items-center text-sm text-textGray font-bold mb-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>Son of Cuyrus reposted</span>
        </div>
        {/* post content */}
        <div className="flex gap-2 px-4">
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.jpg"
              alt="post"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Top */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-md font-bold">Son of Cuyrus</h1>
                <span className="text-textGray">@sinakoushki</span>
                <span className="text-textGray">1 day ago</span>
              </div>
              <PostInfo />
            </div>
            {/* Text and Media */}
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque In egestas
                erat imperdiet sed euismod nisi porta lorem mollis Morbi
                tristique senectus et netus{" "}
              </p>
              {fileDetail && fileDetail.fileType === "image" ? (
                <Image
                  className=""
                  path="general/post.jpeg"
                  w={600}
                  h={600}
                  alt="post"
                  tr={false}
                />
              ) : (
                <Video
                  className={`${
                    fileDetail.customMetadata?.sensitive ? "blur-md" : ""
                  }`}
                  path={fileDetail.filePath}
                />
              )}
              {/* <Image
                className={`${
                  fileDetail.customMetadata?.sensitive ? "blur-md" : ""
                }`}
                path={fileDetail.filePath}
                w={fileDetail.width}
                h={fileDetail.height}
                alt="post"
                tr={false}
              /> */}
              <PostInteractions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
