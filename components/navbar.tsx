import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import thumbnail from "../public/images/thumbnail.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center w-full bg-[#18232f] text-white">
        <div className="flex items-center w-3/4 gap-3 p-4 ">
          <ul className="mt-4 max-sm:mr-12 max-sm:w-28">
            <Image src={thumbnail} width="120" alt="image" />
          </ul>
          <span className="max-lg:hidden flex gap-4">
            <ul>Home</ul>
            <ul>Store</ul>
            <ul>Channels</ul>
            <ul className="flex items-center">
              Categories
              <AiOutlineCaretDown className="mt-1.5" />
            </ul>

            <ul>My Stuff</ul>
          </span>
        </div>
        <div className="flex items-center justify-end w-1/4 gap-6 p-4">
          <span className="lg:hidden flex items-center gap-1 ">
            <ol>Browse</ol>
            <ol>
              <AiOutlineCaretDown />
            </ol>
          </span>
          <ol className="h-8">
            <GoSearch className="h-full w-full" />
          </ol>

          <span className="flex items-center gap-1  relative group z-10">
            <ol className="h-10 mr-4  ">
              <MdAccountCircle className="h-full w-full" />
            </ol>
            <span className="max-sm:hidden flex items-center gap-1">
              <ol>Harsh</ol>
              <ol>
                <AiOutlineCaretDown className="mt-1.5" />
                <div className=" bg-[#252e39] right-[-14px] w-96 h-72 gap-8 mt-4 max-md:w-screen absolute hidden group-hover:flex ">
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
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
