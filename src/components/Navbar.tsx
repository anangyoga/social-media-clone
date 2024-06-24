import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
      <div className="hidden md:flex w-[50%] items-center justify-between">
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
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type="Search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="Search Icon" width={14} height={14} />
        </div>
      </div>

      {/* right */}
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people png" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="messages png" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="notifications png" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/people.png" alt="people png" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
