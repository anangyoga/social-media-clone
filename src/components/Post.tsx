import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26442630/pexels-photo-26442630/free-photo-of-a-row-of-empty-seats-in-a-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="avatar" width={16} height={16} />
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src="https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" fill className="object-cover rounded-md" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolore, suscipit aspernatur, odio aut eius delectus assumenda sunt, sint tenetur eos dolorum pariatur atque placeat inventore ratione natus ea nemo.</p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image src="/like.png" alt="avatar" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image src="/comment.png" alt="avatar" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image src="/share.png" alt="avatar" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline-block">Shares</span>{" "}
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
