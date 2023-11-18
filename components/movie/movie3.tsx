import Image from "next/image";
import i4 from "../../public/images/chris.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { BiBlock } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { TfiCommentAlt } from "react-icons/tfi";

const Movie2 = ()=>{
    return(
        <div className="hover:z-20 w-72  hover:w-80  group relative ease-in-out transition duration-400 delay-10 hover:scale-110">
                <Image src={i4} className="w-full" alt="image" />
                <div className="bg-[#18232f] absolute hidden group-hover:block ">
                  <div className="text-white flex ">
                    <div className="w-1/2 h-full flex justify-start items-center gap-3 px-4">
                      <button>
                        <FaRegPlayCircle className="h-10" />
                      </button>
                      <span>Play</span>
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center gap-4 px-4">
                      <button>
                        <FiPlay className="h-10" />
                      </button>
                      <button>
                        <VscAdd className="h-10" />
                      </button>
                      <button>
                        <BiBlock className="h-10" />
                      </button>
                    </div>
                  </div>
                  <div className="text-white p-2 px-4">
                    <h3>Hera Pheri</h3>
                    <p className="my-3">
                      Three unemployed men find the answer to all their money
                      problems when they recieve a call from a kidnapper
                    </p>
                    <p className="flex items-center gap-5 mt-4">
                      2hr 13min
                      <span>2000</span>
                      <TfiCommentAlt />
                    </p>
                  </div>
                </div>
              </div>
    )
}

export default Movie2;