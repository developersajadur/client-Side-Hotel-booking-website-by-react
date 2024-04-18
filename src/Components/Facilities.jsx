import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Facilities = () => {
    return (
        <div className="mt-20 mb-10 px-2 lg:px-10">
                <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-center">Why You Choose Our Hotel </h1>
        <p className="section-p text-base mt-5">
        Experience unparalleled Wifi, prime location, and exceptional amenities. <br /> Make unforgettable memories with us today
        </p>
      </div>
          
        <div className="mt-10 flex justify-center flex-col md:flex-row lg:flex-row gap-10 ">

            {/* ------------------card-1---------------------- */}
            <div data-aos="flip-left" className=" lg:w-96 flex flex-col justify-start md:justify-center lg:justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="./icon-home.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">Our Hotel Facilities</h2>
    <p>We are one of the best company in the global market and we have restaurant facilities for all of our guide</p>
    <div className="card-actions">
      <button className="btn bg-[#E7A500]">Read More</button>
    </div>
  </div>
</div>
            {/* ------------------card-2---------------------- */}
            <div  data-aos="flip-left" className=" lg:w-96  flex flex-col justify-start md:justify-center lg:justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="./icon-wifi.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">
Free Wifi Facilities</h2>
    <p>This is the place where I will get a free wifi zone at a reasonable price and this will help you to make a colorful life

</p>
    <div className="card-actions">
      <button className="btn bg-[#E7A500]">Read More</button>
    </div>
  </div>
</div>
            {/* ------------------card-3---------------------- */}
            <div  data-aos="flip-left" className=" w-full lg:w-96  flex flex-col justify-start md:justify-center lg:justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="./icon-star.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">
    5 Stars Rettings</h2>
    <p>Atoli is well known agency and the agency is one of the best by 5-star retting and we will be benefited .</p>
    <div className="card-actions">
      <button className="btn bg-[#E7A500]">Read More</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Facilities;