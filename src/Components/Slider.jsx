
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../style.css"

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
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
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper h-60 lg:h-96 mt-5 lg:mt-10"
      >
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/Kq73tXF/tidy-room-with-big-mirror.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/tz0rG27/bedroom-interior.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/MVj6mwB/modern-studio-apartment-design-with-bedroom-living-space.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/RP1nbz7/3d-rendering-modern-luxury-bedroom-suite-bathroom.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/2FY5pjy/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/pWcf8FQ/interior-modern-comfortable-hotel-room.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/pWcf8FQ/interior-modern-comfortable-hotel-room.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/3vD1YTP/contemporary-living-room.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-60 lg:h-96'  src="https://i.ibb.co/4SFkWL4/tidy-hotel-room-with-brown-curtains.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
