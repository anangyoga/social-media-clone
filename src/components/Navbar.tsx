import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SocialMedia
        </Link>
      </div>

      {/* center */}
      <div className="hidden gap-10 md:flex w-[30%]">
        <Link href="/" className="flex items-center gap-2.5 text-gray-600">
          <Image src="/home.png" alt="Homepage Icon" width={16} height={16} className="w-4 h-4" />
          <span>Homepage</span>
        </Link>
        <Link href="/" className="flex items-center gap-2.5 text-gray-600">
          <Image src="/friends.png" alt="Friends Icon" width={16} height={16} className="w-4 h-4" />
          <span>Friends</span>
        </Link>
        <Link href="/" className="flex items-center gap-2.5 text-gray-600">
          <Image src="/stories.png" alt="Stories Icon" width={16} height={16} className="w-4 h-4" />
          <span>Stories</span>
        </Link>
      </div>

      {/* right */}
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
