import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          width={32}
          height={32}
          src="https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="image"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
          <Image width={16} height={16} src="/emoji.png" alt="image" className="rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-4 justify-between mt-5">
        <Image
          width={40}
          height={40}
          src="https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="image"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Bernice Spencer</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta obcaecati dignissimos laudantium exercitationem, sed fuga aspernatur at quae quod dolorum cupiditate eum inventore molestiae iste, explicabo eveniet
            asperiores dolor?
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image src="/like.png" alt="image" width={12} height={12} className="cursor-pointer h-4 w-4" />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123</span>
            </div>
            <div>Reply</div>
          </div>
        </div>
        <Image src="/more.png" alt="image" width={16} height={16} className="cursor-pointer h-4 w-4" />
      </div>
    </div>
  );
};

export default Comments;
