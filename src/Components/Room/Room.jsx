import { FaRegUser } from "react-icons/fa";
import { PiBoundingBoxLight } from "react-icons/pi";
import "../../style.css";
import { Link } from "react-router-dom";
const Room = ({room}) => {
    const {estate_title, id , description, price , status, area , parson  , image_url} = room;
    return (
      
        <Link to={`/room-details/${id}`}>
          <div className="card card-side border w-[400px] lg:w-[573px] flex flex-col lg:flex-row">
            <figure >
              <img className="p-5 lg:pl-10 rounded-t-3xl w-80 h-60 flex justify-center" src={image_url} alt="Room" />
            </figure>
            <div className="card-body">
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <FaRegUser></FaRegUser>
                  <p className="section-p">{parson} Parson</p>
                </div>
                <div className="flex items-center gap-2">
                 <PiBoundingBoxLight></PiBoundingBoxLight>
                  <p className="section-p">{area}</p>
                </div>
              </div>
              <div className="">
                <h1 className="section-title text-xl text-start">
                 {estate_title}
                </h1>
                <p className="section-p w-60 text-sm text-start">
                  {description}
                </p>
              </div>
        
              <div className="flex gap-4">
                <div className="">
                  <h1 className="text-[#FF4240] text-lg font-bold">
                    Price - ${price}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
    );
};

export default Room;