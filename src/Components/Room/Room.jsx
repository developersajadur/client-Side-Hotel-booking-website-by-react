import { FaRegUser } from "react-icons/fa";
import { PiBoundingBoxLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { PiLineSegmentsFill } from "react-icons/pi";
import "../../style.css";
const Room = ({room}) => {
    const {estate_title , segment_name, description, price , status, area , parson , facilities , image_url} = room;
    return (
        <div className="shadow-style flex flex-col lg:flex-row p-5 w-full gap-5 h-[90%] flex-grow lg:h-[70%] rounded-2xl mb-20">
        <div className="">
            <img className="w-full h-full rounded-2xl" src={image_url} alt="" />
        </div>
        <div className="flex gap-3 flex-col">
            <h2 className="font-bold text-3xl">{estate_title}</h2>
            <p className="text-red-500">{price}</p>
            <p className="">
           {description}
            </p>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3"><PiLineSegmentsFill />{segment_name} </div>
                <div className="flex items-center gap-3"><FaRegUser /> {parson} person</div>
                <div className="flex items-center gap-3"><PiBoundingBoxLight />{area}</div>
                <div className="flex items-center gap-3"><FaRegEye /> {facilities[0]}</div>
            </div>
            <button className="btn w-fit btn-error">Book Now</button>
           
        </div>
    </div>
    );
};

export default Room;