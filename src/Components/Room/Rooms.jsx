import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";

const Rooms = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const handleCheckIn = (data) => {
    setCheckIn(data);
  };

  const handleCheckOut = (data) => {
    setCheckOut(data);
  };
  return (
    <div className="px-1 lg:px-10">
      <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>

      <div className="flex gap-10">
        <div className="bg-[#F5F5F5] flex flex-col gap-5 px-4 py-6 h-full w-[35%]">
          <h2 className="text-2xl font-bold ml-2">Booking Sheet</h2>
          {/* ---------------- Check in ---------------- */}
          <div className="">
          <p className="text-lg font-bold ml-2">Check in</p>
          <div className="w-full">
            <details className="dropdown w-full">
              <summary className="m-1 bg-white btn flex justify-between text-lg w-full">
                {checkIn.toString().slice(0, 15)}
                <div className="text-red-500"><FaCalendarAlt /></div>
              </summary>
              <ul className=" dropdown-content z-[1] bg-white rounded-box w-[250%]">
                <li className="">
                  <Calendar onChange={handleCheckIn} value={checkIn} />
                </li>
              </ul>
            </details>
          </div>
          </div>

          {/* ----------------check out------------------------ */}
          <div className="">
          <p className="text-lg font-bold ml-2">Check out</p>
          <div className="w-full">
            <details className="dropdown w-full">
              <summary className="m-1 bg-white btn flex justify-between text-lg w-full">
                {checkOut.toString().slice(0, 15)}
                <div className="text-red-500"><FaCalendarAlt /></div>
              </summary>
              <ul className=" dropdown-content z-[1] bg-white rounded-box w-[250%]">
                <li className="">
                  <Calendar onChange={handleCheckOut} value={checkOut} />
                </li>
              </ul>
            </details>
          </div>
          </div>
          
        </div>
        <div className="bg-blue-600 h-full w-[65%]"></div>
      </div>
    </div>
  );
};

export default Rooms;
