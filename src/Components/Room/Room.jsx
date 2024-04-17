import { FaRegUser } from "react-icons/fa";
import { PiBoundingBoxLight } from "react-icons/pi";
import "../../style.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Room = ({room}) => {
    const {estate_title, id , description, price , status, area , parson  , image_url} = room;
    return (
      
        <Link  data-aos="fade-up" data-aos-duration="4000" to={`/room-details/${id}`}>
          <div className="card card-side border w-full lg:w-[573px] flex flex-col lg:flex-row">
            <figure >
              <div className="p-4 lg:w-80 lg:h-60 flex justify-center">
              <img className="lg:w-72 lg:h-52 flex rounded-2xl justify-center" src={image_url} alt="Room" />
              </div>
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