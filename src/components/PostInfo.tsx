import React from "react";
import Image from "./Image";

const PostInfo = () => {
  return (
    <div className="relative cursor-pointer w-4 h-4">
      <Image path="icons/infoMore.svg" w={16} h={16} tr={false} alt="more" />
    </div>
  );
};

export default PostInfo;
