"use client";

import { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import Actions from "@/Actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;
  return (
    <form
      className="p-4 flex gap-4"
      action={(FormData) => Actions(FormData, settings)}
    >
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

        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewURL}
              width={600}
              height={600}
              alt="Edit Image"
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black opacity-50 rounded-full py-1 px-4 cursor-pointer text-white font-bold text-sm "
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8  flex items-center justify-center rounded-full cursor-pointer font-bold text-sm" onClick={() => setMedia(null)}>
              X
            </div>
          </div>
        )}

        {media?.type.includes("video") && previewURL && (
          <div className="relative ">
            <video
              src={previewURL}
              controls
              className="w-[600px] h-[600px] object-contain"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8  flex items-center justify-center rounded-full cursor-pointer font-bold text-sm" onClick={() => setMedia(null)}>
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
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
