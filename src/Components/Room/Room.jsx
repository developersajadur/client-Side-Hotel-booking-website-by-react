import { FaRegUser } from "react-icons/fa";
import { PiBoundingBoxLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { PiLineSegmentsFill } from "react-icons/pi";
const Room = () => {
    return (
        <div className="flex p-5 shadow-xl w-full mb-20">
        <div className="">
            <img className="w-[90%] h-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
        </div>
        <div className="flex gap-3 flex-col">
            <h2 className="font-bold text-3xl">Luxury Room</h2>
            <p className="text-red-500">320 / Per Night</p>
            <p className="">
            Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse et faucibus felis, sed pulvinar purus.
            </p>
            <div className="grid grid-cols-2">
                <div className="flex items-center gap-3"><PiLineSegmentsFill /> Townhouse</div>
                <div className="flex items-center gap-3"><FaRegUser /> 4 Person</div>
                <div className="flex items-center gap-3"><PiBoundingBoxLight />  35m2 / 376ft2</div>
                <div className="flex items-center gap-3"><FaRegEye /> Sea Balcony</div>
            </div>
            <button className="btn w-fit btn-error">Book Now</button>
           
        </div>
    </div>
    );
};

export default Room;