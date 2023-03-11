import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import thumbnail from "../public/images/thumbnail.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center w-full bg-[#0f171e] text-white">
        <div className="flex items-center w-3/4 gap-3 p-4 mx-6">
          <ul className="mt-4 max-sm:mr-12 max-sm:w-28">
            <Image src={thumbnail} width="120" alt="image" />
          </ul>
          <span className="max-lg:hidden flex gap-2">
            <ul>Home</ul>
            <ul>Store</ul>
            <ul>Channels</ul>
            <ul>Categories</ul>
            <ul className="flex mt-1 items-center">
              <AiOutlineCaretDown />
            </ul>
            <ul>My Stuff</ul>
          </span>
        </div>
        <div className="flex items-center justify-end w-1/4 gap-6  p-4 md:mx-6">
          <span className="lg:hidden flex items-center gap-1 max-md:justify-start">
            <ol>Browse</ol>
            <ol>
              <AiOutlineCaretDown />
            </ol>
          </span>
          <ol>
            <GoSearch />
          </ol>
          <ol className="max-sm:ml-2 h-8">
            <MdAccountCircle className="h-full w-full" />
          </ol>
          <span className="flex items-center gap-1 max-sm:hidden">
            <ol>Harsh</ol>
            <ol className="relative">
              <AiOutlineCaretDown />
              <div className="flex bg-[#252e39] absolute right-[-14px] w-96 h-72 gap-8 mt-4 max-md:w-screen ">
                <div className="flex-col border-r-solid p-8 max-md:w-1/2  ">
                  <ol>Account & Settings</ol>
                  <ol className="my-4">Watch Anywhere</ol>
                  <ol className="my-4">Help</ol>
                  <ol>Not Harsh? Sign Out</ol>
                </div>
                <div className="flex-col gap-4 border-solid p-8 px-14 border-white border-l-2 max-md:w-1/2">
                  <ol>Kids</ol>
                  <ol className="my-4">Add new</ol>
                  <ol className="my-4">Manage Profiles</ol>
                  <ol>Learn more</ol>
                </div>
              </div>
            </ol>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
