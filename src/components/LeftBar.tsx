import Link from "next/link";
import Image from "./Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "icons/home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "icons/explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "icons/notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "icons/message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "icons/bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "icons/job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "icons/community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "icons/logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "icons/profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "icons/more.svg",
  },
];

export const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex justify-between flex-col pt-2 pb-8">
      {/* LOGO AND MENU ICONS */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="hover:bg-[#181818] p-2 rounded-full">
          <Image path="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>
        {/* MENU */}
        <div className="flex flex-col gap-2">
          {menuList.map((Item) => (
            <Link
              href={Item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              key={Item.id}
            >
              <Image path={`${Item.icon}`} alt={Item.name} w={24} h={24} />
              <span className="hidden xxl:inline">{Item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link href="/" className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden">
          <Image path="icons/post.svg" alt="new post" w={25} h={25} />
        </Link>
        <Link href="/" className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
          Post
        </Link>
      </div>
      {/* USER ICON */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full relative overflow-hidden">
            <Image path="/general/avatar.png" alt="profilepic" w={100} h={100} transform={true}/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Dmitri</span>
            <span className="text-sm text-textGray">@dmitri</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
