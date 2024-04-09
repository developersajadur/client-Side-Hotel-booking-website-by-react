import { MdLanguage  } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const TopHeader = () => {
    return (
        <div className="hidden md:block lg:block ">
        <div className="h-12 w-full bg-[#1B2132] flex items-center px-12 gap-10 justify-between ">
            <div>

            <details className="dropdown ">
  <summary className=" text-white font-medium bg-[#1B2132] flex items-center gap-2"><MdLanguage />English</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Hindi</a></li>
    <li><a>Bangla</a></li>
  </ul>
</details>
 </div>
            <div className="flex gap-5 text-white">
                <div className="flex items-center gap-3 font-medium"><IoHome /> Chirirbandar, Dinajpur, Bangladesh</div>
                <div className="flex items-center gap-3 font-medium"><FaPhoneVolume /> 01787448412</div>
                <div className="flex items-center gap-3 font-medium"><IoIosMail /> itzmesojib@gmail.com</div>
            </div>
            
        </div>
        </div>
    );
};
  
export default TopHeader;