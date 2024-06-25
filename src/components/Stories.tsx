import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs">
      <div className="flex gap-8 w-max">
        {/* story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
