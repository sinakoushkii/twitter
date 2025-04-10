import Image from "./Image";
import React from "react";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  return (
    <div>
      {/* post type */}
      <div className="p-4 border-y-[1px] border-borderGray">
        icon
        <span>Son of Cuyrus reposted</span>
      </div>
      {/* post content */}
      <div className="flex gap-2 px-4">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/avatar.png"
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus </p>
            <Image className="" path="general/post.jpeg" w={600} h={600} alt="post" tr={false} />
            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
