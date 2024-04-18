
import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { Helmet } from "react-helmet";
const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div className="px-1 lg:px-10 mt-10 lg:mt-20">
            <Helmet>
                <title>
                    Choose Your Room And Get
                </title>
            </Helmet>
            <div className="w-full  text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-5">
            <h1 className="text-4xl font-bold">Our Awesome Rooms</h1>
        </div>
        <div  className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12 mt-10  ">
            {
                Array.isArray(rooms) && rooms?.map(room => <Room
                key={room.id}
                room={room}
                ></Room>)
            }
        </div>
        </div>
    );
};

export default Rooms;