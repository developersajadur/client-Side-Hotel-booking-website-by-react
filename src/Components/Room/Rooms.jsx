
import { useLoaderData } from "react-router-dom";
import Room from "./Room";
const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12  mt-10 lg:mt-20">
            {
                rooms.map(room => <Room
                key={room.id}
                room={room}
                ></Room>)
            }
        </div>
    );
};

export default Rooms;