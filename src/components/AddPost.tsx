import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/26442630/pexels-photo-26442630/free-photo-of-a-row-of-empty-seats-in-a-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />

      {/* POST */}
      <div className="flex-1">
        {/* text input */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg outline-none flex-1 p-2" name="post" id="post"></textarea>
          <Image src="/emoji.png" alt="avatar" width={20} height={20} className="w-5 h-5 rounded-full cursor-pointer self-end" />
        </div>
        {/* post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="avatar" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="avatar" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="avatar" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="avatar" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
