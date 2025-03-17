"use client";

import { useState } from "react";
import Image from "./Image";
import Actions from "@/Actions";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form className="p-4 flex gap-4" action={Actions}>
      {/* AVATAR */}
      <div className="rounded-full relative w-10 h-10 overflow-hidden">
        <Image
          path="general/avatar.png"
          alt="dp"
          w={100}
          h={100}
          transform={true}
        />
      </div>
      {/* OTHERS */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          type="text"
          name="desc"
          placeholder="What is Happening!!!"
        />
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
            />
            <label htmlFor="file">
              <Image
                className="cursor-pointer"
                path="icons/image.svg"
                alt="alt"
                w={20}
                h={20}
              />
            </label>
            <Image
              className="cursor-pointer"
              path="icons/gif.svg"
              alt="alt"
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/poll.svg"
              alt="alt"
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/emoji.svg"
              alt="alt"
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/schedule.svg"
              alt="alt"
              w={20}
              h={20}
            />
            <Image
              className="cursor-pointer"
              path="icons/location.svg"
              alt="alt"
              w={20}
              h={20}
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
