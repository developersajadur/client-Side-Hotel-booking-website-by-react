import { useEffect, useState } from "react";
import Room from "./Room/Room";
import "../style.css";

const HomePageRooms = () => {
    const [seeDetails , setSeeDetails] = useState([4])
    const [rooms , setRooms] = useState([])
    useEffect(() => {
        fetch('../public/RoomDetails.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

    // const seeMoreDetails = ()=> {
    //     setSeeDetails(rooms.length)
    // }
    return (
       <div className="px-1 lg:px-10 bg-[#F5F5F5] pt-10 rounded-t-[5%]">
         <h1 className="text-4xl font-bold text-center mb-10">Our Rooms {rooms.length} </h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-5 md:gap-x-10 lg:gap-x-12 items-center ">
        {
            rooms.slice(0 , seeDetails ).map(room => <Room
            key={room.id}
            room={room}
            ></Room>)
        }
         </div>
        {
            seeDetails < rooms.length && (
                <div className="flex justify-center mt-[-55px]">
                <button  className="btn lg:w-[20%] btn-primary">See More</button>
                </div>
            )
        }
       </div>
    );
};

export default HomePageRooms;