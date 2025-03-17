import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";

const Post = () => {
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
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/avatar.png"
            alt="UserDP"
            transform={true}
            w={40}
            h={40}
          />
        </div>
        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-2">
          {/* TOP */}
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Dmitri</h1>
              <span className="text-textGray">@dmitri</span>
              <span className="text-textGray">2 days ago</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT AND MEDIA */}
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            necessitatibus blanditiis aperiam minima veniam dolor quas! Vero
            necessitatibus voluptas soluta, mollitia nam, ipsum similique a
            velit cumque atque delectus earum?
          </p>
          <Image path="general/post.jpeg" alt="Post" w={600} h={600} />
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
