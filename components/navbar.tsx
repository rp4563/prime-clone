import { GoSearch } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from "next/image";
import thumbnail from "../public/images/thumbnail.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center w-full bg-[#0f171e] text-white">
        <div className="flex items-center w-1/2 gap-3 p-4 mx-6">
          <ul className="mt-4">
            <Image src={thumbnail} width="120" alt="image" />
          </ul>
          <ul>Home</ul>
          <ul>Store</ul>
          <ul>Channels</ul>
          <ul>Categories</ul>
          <ul>
            <AiOutlineCaretDown />
          </ul>
          <ul>My Stuff</ul>
        </div>
        <div className="flex items-center justify-end w-1/2 gap-3 p-4   mx-6">
          <ol>
            <GoSearch />
          </ol>
          <ol className="h-10">
            <MdAccountCircle className="h-full w-full" />
          </ol>
          <ol>Harsh</ol>
          <ol>
            <AiOutlineCaretDown />
          </ol>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
