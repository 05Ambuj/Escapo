import ImageKit from "imagekit";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import { imagekit } from "@/utils";
import Video from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
  url: string;
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {

  // FETCH POST MEDIA DETAILS

  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67dc6794432c47641620f50e");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center text-sm text-textGray mb-2 font-bold gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Dmitri Reposted</span>
      </div>
      {/* POST CONTENT */}
      {/* <div className="flex gap-4"> */}
      <div className={`flex gap-4 ${type === "status" && "flex-col "} `}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image
            path="general/avatar.png"
            alt="UserDP"
            transform={true}
            w={100}
            h={100}
          />
        </div>
        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <Link href={`/lamaWebDev`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image
                  path="general/avatar.png"
                  alt=""
                  w={100}
                  h={100}
                  transform={true}
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Dmitri</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @dmitri
                </span>
                {type !== "status" && (
                  <span className="text-textGray">2 days ago</span>
                )}
              </div>
            </Link>
            {/* <div className="flex items-center gap-2 justify-between"> */}
            <PostInfo />
            {/* </div> */}
          </div>
          {/* TEXT AND MEDIA */}
          <Link href={`/dmitri/status/12`}>
            <p className={`type==="status" && "text-lg"`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              necessitatibus blanditiis aperiam minima veniam dolor quas! Vero
              necessitatibus voluptas soluta, mollitia nam, ipsum similique a
              velit cumque atque delectus earum?
            </p>
          </Link>
          {/* IMAGE */}
          {/* <Image path="post/luffy.jpg" alt="Post" w={600} h={600} /> */}
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt="Post"
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={
                fileDetails.customMetadata?.sensitive
                  ? "blur-lg w-50 h-50"
                  : "w-50 h-50"
              }
            />
          )}
          {type === "status" && (
            <span className="text-textGray">8:41 PM • Mar 5 2025</span>
          )}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
