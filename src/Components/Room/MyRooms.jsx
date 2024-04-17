import { useEffect, useState } from "react";
import Room from "../Room/Room"

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([]);

    useEffect(() => {
        const getMyRoomsData = JSON.parse(localStorage.getItem('rooms')) || [];
        setMyRooms(getMyRoomsData);
    }, []);

    return (
        <div className="px-2 lg:px-10">
           <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-5">
            <h1 className="text-4xl font-bold">My Rooms</h1>
        </div>

            <div className="grid lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12 mt-10 ">
        {
            myRooms.map(room => <Room
            key={room.id}
            room={room}
            ></Room>)
        }
        </div>
        </div>
    );
};

export default MyRooms;
