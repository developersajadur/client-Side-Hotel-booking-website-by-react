import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../style.css"
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

  const Slider = () => {
  const [sliders, setSliders] = useState([]);  
  useEffect(() => {
    fetch("./RoomDetailsData.json")
      .then(res => res.json())
      .then(data => setSliders(data))
      .catch(error => console.error('Error fetching slider data:', error));
  }, []);

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ dynamicBullets: true }}
        loop={true}
        mousewheel={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-60 lg:h-96 sm:mt-5"
      >
        {
         Array.isArray(sliders) && sliders.map(slider => (
          <SwiperSlide className='h-60 lg:h-96 relative' key={slider.id}>
            <img className='h-60 lg:h-96 absolute opacity-70 z-0' src={slider.image_url} alt="" />
            <div className="absolute z-10 inset-0 flex flex-col gap-2 items-center justify-center">
              <h1 className='text-2xl lg:text-5xl font-bold text-center text-black'>{slider.estate_title}</h1>
              <p className="lg:text-lg font-semibold text-black w-[80%] lg:w-[40%]">{slider.description}</p>
              <Link to={`/room-details/${slider.id}`}><button className="btn border-none bg-[#E7A500] text-black ">Book Now</button></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider
