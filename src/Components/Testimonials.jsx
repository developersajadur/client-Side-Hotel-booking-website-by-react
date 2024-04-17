import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard,FreeMode } from 'swiper/modules';
import "../style.css";
import { useEffect, useState } from 'react';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('../../public/ClientSays.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    } ,[])

        
    return (


        <div className="lg:mt-20 ">


{/* ------------------ large device--------------------- */}
<h1 className="text-2xl lg:text-4xl font-bold text-center">What Our Client Says</h1>
<div className="hidden lg:block">
            <div className="flex ml-[-70px] py-10 mt-8 gap-20 "> <h1/>

<Swiper
slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[FreeMode, Pagination,Keyboard, Autoplay]}
        className="mySwiper "
      >

        {
            testimonials.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-96 text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-20 rounded-full">
                              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>
                          <p>{testimonial.review}</p>
                              <h2 className="card-title text-2xl font-bold">{testimonial.client_name}</h2>
                              <h5 className='text-lg font-semibold'>{testimonial.address}</h5>
                              <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                          </div>
                              
                            </div>
                          </div>
                </SwiperSlide>
            )
        }
 
      </Swiper>
        </div>
        </div>
        {/* --------------------------- small device ------------------ */}

        <div className="block lg:hidden">
            <div className="flex ml-[-55px] py-10 mt-8 gap-20 "> <h1/>

<Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
            dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[FreeMode, Pagination,Keyboard, Autoplay]}
        className="mySwiper "
      >

        {
            testimonials.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-96 text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-20 rounded-full">
                              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>
                          <p>{testimonial.review}</p>
                              <h2 className="card-title text-2xl font-bold">{testimonial.client_name}</h2>
                              <h5 className='text-lg font-semibold'>{testimonial.address}</h5>
                              <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                          </div>
                              
                            </div>
                          </div>
                </SwiperSlide>
            )
        }
 
      </Swiper>
        </div>
        </div>
        
        </div>
    );
};

export default Testimonials;