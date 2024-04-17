import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaRegUser, FaRegEye } from "react-icons/fa";
import { PiLineSegmentsFill, PiBoundingBoxLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Rating } from 'react-simple-star-rating'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import toast from "react-hot-toast";

const RoomDetails = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

    // --------------------room Data fetcher --------------------
    const rooms = useLoaderData();
    const { roomId } = useParams();
    const room = rooms.find(room => room.id.toString() ==  roomId);
 

  const handleBookNow = () => {

    const saveBookingRoom = JSON.parse(localStorage.getItem("rooms")) || [];
    const roomExist = saveBookingRoom.find(item => item.id === room.id);
    if (roomExist) {
      toast.error('You Are Already Booked This Room');
    }
    else{
      saveBookingRoom.push(room);
      localStorage.setItem("rooms", JSON.stringify(saveBookingRoom));
       Swal.fire({
        title: "Wow! You Are Booked This Room",
        icon: "success",
        confirmButtonText: '<a href="">Say Thanks!</a>',
    });
    }
  }


  const handleCheckIn = (data) => {
    setCheckIn(data);
  };

  const handleCheckOut = (data) => {
    setCheckOut(data);
  };


  
//   const { estate_title, segment_name, description, price, status, area, parson, facilities, image_url } = room;  
  return (
    <div className="px-1 lg:px-10">
      <div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-10">
        <h1 className="text-4xl font-bold">{room.estate_title}</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="bg-[#F5F5F5] rounded-xl flex flex-col gap-5 px-4 py-6 h-full w-full lg:w-[35%]">
          <h2 className="text-2xl font-bold ml-2">Booking Sheet</h2>
          {/* ---------------- Check in ---------------- */}
          <div className="">
            <p className="text-lg font-semibold ml-2">Check in</p>
            <div className="w-full">
              <details className="dropdown w-full">
                <summary className="m-1 bg-white btn flex justify-between text-lg w-full">
                  {checkIn.toString().slice(0, 15)}
                  <div className="text-red-500">
                    <FaCalendarAlt />
                  </div>
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
            <p className="text-lg font-semibold ml-2">Check out</p>
            <div className="w-full">
              <details className="dropdown w-full">
                <summary className="m-1 bg-white btn flex justify-between text-lg w-full">
                  {checkOut.toString().slice(0, 15)}
                  <div className="text-red-500">
                    <FaCalendarAlt />
                  </div>
                </summary>
                <ul className=" dropdown-content z-[1] bg-white rounded-box w-[250%]">
                  <li className="">
                    <Calendar onChange={handleCheckOut} value={checkOut} />
                  </li>
                </ul>
              </details>
            </div>
          </div>

          {/* ---------------- Numbers of Persons ---------------- */}
          <div>
            <p className="text-lg font-semibold ml-2">Numbers of Persons</p>
            <select className="select font-semibold w-full">
              <option disabled selected>
                01
              </option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
            </select>
          </div>

          {/*------------------------ Numbers of Rooms -------------------  */}
          <div>
            <p className="text-lg font-semibold ml-2">Numbers of Room</p>
            <select className="select font-semibold w-full">
              <option disabled selected>
                01
              </option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
            </select>
          </div>

          <button onClick={handleBookNow} className="btn btn-error text-lg text-white">Book Now</button>

        </div>

        {/* -------------------- right side ------------------------ */}

        <div className="h-full w-full lg:w-[65%]">
          {/* -------- slider ----------- */}
          <div className=''>
            <Swiper
              cssMode={true}
              navigation={true}
              slidesPerView={1}
              spaceBetween={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              mousewheel={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              keyboard={true}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper  h-60 lg:h-96 rounded-xl"
              >
                <SwiperSlide>
                  <img className='h-60 lg:h-96' src={room.image_url}alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='h-60 lg:h-96' src={room.image_url} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='h-60 lg:h-96' src={room.image_url} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='h-60 lg:h-96' src={room.image_url} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* -------- slider end ----------- */}


            <div className="mt-10 flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{room.estate_title} ({room.status})</h1>
              <h6 className="text-xl font-semibold">{room.price}</h6>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
              <div className="flex items-center gap-3"><PiLineSegmentsFill />{room.segment_name} </div>
                <div className="flex items-center gap-3"><FaRegUser /> {room.parson} person</div>
                <div className="flex items-center gap-3"><PiBoundingBoxLight />{room.area}</div>
                <div className="flex items-center gap-3"><FaRegEye /> {room.facilities[0]}, {room.facilities[1]}</div>
              </div>
              <div className="divider"></div>
              <p>{room.big_description}</p>
            </div>

            <div className="mt-8 flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Clients Review and rating`s</h1>
                <div className="flex gap-4 text-lg font-semibold items-center">Your Rating 
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
                </div>
                <form>
                <textarea className="textarea w-full h-52 textarea-accent" required placeholder="Write Your Review here..."></textarea>
                <div className="flex justify-start mt-5"> <button className="btn btn-error">Submit Review</button></div>
                </form>
                <div>
           
            </div>
            
           
            </div>

          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  };
  
  export default RoomDetails;
  