"use server";
import { resolve } from "path";
import { imagekit } from "./utils";

export const Actions = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  // const desc=formData.get("desc") as string;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600 ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/post",
      ...(file.type.includes("image") && {transformation: {
        pre:transformation,
      }}),
      customMetadata:{
        sensitive:settings.sensitive,
      }
    },
    function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    }
  );
};

export default Actions;
