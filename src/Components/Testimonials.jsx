import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard,FreeMode } from 'swiper/modules';
import "../style.css";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch('./ClientSays.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    } ,[])

        
    return (


        <div className="mt-10 px-2 lg:px-10 lg:mt-20 ">

<div className="mb-10 text-center">
        <h1 className="section-title font-bold text-2xl lg:text-4xl">What Our Client Says</h1>
        <p className="section-p text-base mt-5">
        Discover why our hotel exceeds expectations. 
        Unforgettable <br /> experiences await. Explore now.
        </p>
      </div>

{/* ------------------ large device--------------------- */}
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
             Array.isArray(testimonials) && testimonials?.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-96 text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-16 rounded-full">
                              <img src={user?.photoURL || "/user-img.png"}/>
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
        {/* --------------------------- medium device ------------------ */}

        <div className="hidden md:block lg:hidden">
            <div className="grid md:grid-cols -mt-20 gap-20 "> <h1/>

<Swiper
slidesPerView={2}
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
           Array.isArray(testimonials) && testimonials.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-96 text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-16 rounded-full">
                              <img src={user?.photoURL || "/user-img.png"} />
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

        <div className="block md:hidden lg:hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 -mt-20 gap-20 "> <h1/>

<Swiper
slidesPerView={1}
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
           Array.isArray(testimonials) && testimonials.map(testimonial =>
                <SwiperSlide
                key={testimonial.id}
                >
                <div className="card my-10 review-card w-96 text-start bg-white text-black">
                            <div className="card-body">
                            <div className="avatar">
                            <div className="w-16 rounded-full">
                              <img src={user?.photoURL || "/user-img.png"} />
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