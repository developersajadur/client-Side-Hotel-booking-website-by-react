import { FaRegUser } from "react-icons/fa";
import { PiBoundingBoxLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { PiLineSegmentsFill } from "react-icons/pi";
import "../../style.css";
import { Link } from "react-router-dom";
const Room = ({room}) => {
    const {estate_title, id , segment_name, description, price , status, area , parson , facilities , image_url} = room;
    return (
        <div className="shadow-style flex flex-col p-5 w-full gap-5 h-[90%] flex-grow lg:h-full rounded-2xl mb-20">
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
            <Link className="w-fit" to={`/room-details/${id}`}><button className="btn w-fit btn-error">Show Details</button></Link>
            
           
        </div>
    </div>
    );
};

export default Room;