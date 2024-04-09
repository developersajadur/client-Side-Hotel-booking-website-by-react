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
       <div className="px-10">
         <h1 className="text-4xl font-bold text-center mb-10">Our Rooms {rooms.length} </h1>
         <div className="grid grid-cols-2 gap-10">
        {
            rooms.slice(0 , seeDetails ).map(room => <Room
            key={room.id}
            ></Room>)
        }
         </div>
        {
            seeDetails < rooms.length && (
                <div className="flex justify-center">
                <button  className="btn btn-primary">See More</button>
                </div>
            )
        }
       </div>
    );
};

export default HomePageRooms;