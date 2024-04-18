import { useEffect, useState } from "react";
import Room from "../Room/Room";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([]);

    useEffect(() => {
        const getMyRoomsData = JSON.parse(localStorage.getItem('rooms')) || [];
        setMyRooms(getMyRoomsData);
    }, []);

    return (
        <div className="px-2 lg:px-10">
            <Helmet>
                <title>
                    My Rooms
                </title>
            </Helmet>

       

            {myRooms.length === 0 ?
            ( <div className="h-full w-full flex gap-5 lg:gap-10 flex-col mt-10 lg:mt-20 justify-center items-center">

                <h1 className="text-xl lg:text-5xl text-center font-bold">Oops! You have Not Booked Any Room</h1>
                <Link to="/rooms">
                <button className="btn bg-[#E7A500]">Booking Rooms</button>
                </Link>

            </div> ) 
            :
    ( <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12 mt-10">
     {Array.isArray(myRooms) && myRooms.map(room => (
         <Room
             key={room.id}
             room={room}
         />
     ))}
 </div>
            )
            }

           
        </div>
    );
};

export default MyRooms;
