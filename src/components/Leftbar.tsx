import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const Leftbar = () => {
  return (
    <div className="sticky top-0 h-screen flex flex-col justify-between pt-2 pb-8">
      {/* Logo menu button */}
      <div className="flex flex-col items-center xxl:items-start text-lg gap-4">
        {/* Logo */}
        <Link className="p-2" href="/">
          <Image
            src="icons/logo.svg"
            width={24}
            height={24}
            alt="twitter-logo"
          />
        </Link>
        {/* Menu list */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center gap-4 hover:bg-[#181818] rounded-full p-2 transition-all duration-200 ease-in-out"
            >
              <Image
                src={`icons/${item.icon}`}
                width={24}
                height={24}
                alt={item.name}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}

          {/* Tweet button */}
          <Link
            href="/"
            className="xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Image src="icons/post.svg" width={24} height={24} alt="post" />
          </Link>
          <Link
            href="/"
            className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
          >
            Post
          </Link>
        </div>
      </div>
      {/* user info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className=" w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              className="bg-cover"
              src="/general/avatar.jpg"
              fill
              alt="sina koushki"
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Son of Cuyrus</span>
            <span className="text-sm text-textGray">@sinakoushki</span>
          </div>
        </div>

        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default Leftbar;
