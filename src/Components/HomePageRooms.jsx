import { useEffect, useState } from "react";
import Room from "./Room/Room";
import "../style.css";
import { Link } from "react-router-dom";

const HomePageRooms = () => {
    const [seeDetails , setSeeDetails] = useState([4])
    const [rooms , setRooms] = useState([])
    useEffect(() => {
        fetch('./RoomDetailsData.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

    // const seeMoreDetails = ()=> {
    //     setSeeDetails(rooms.length)
    // }
    return (
       <div className="px-1 lg:px-10 bg-[#F5F5F5] pt-10 pb-10 rounded-t-[5%]">
         <h1 className="text-4xl font-bold text-center mb-20">Our Rooms </h1>
         <div  className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12  ">
        {
           Array.isArray(rooms) && rooms?.slice(0 , seeDetails ).map(room => <Room
            key={room.id}
            room={room}
            ></Room>)
        }
         </div>
        {
            seeDetails < rooms.length && (
                <div className="flex justify-center mt-10">
                    <Link to="/rooms"><button  className="btn lg:w-full bg-[#E7A500]"> See More </button></Link>
                
                </div>
            )
        }
       </div>
    );
};

export default HomePageRooms;