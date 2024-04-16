const Facilities = () => {
    return (
        <div className="mt-20 mb-10">
            <h1 className="text-4xl font-bold text-center">Why You Choose Our Hotel </h1>
        <div className="mt-10 flex flex-col lg:flex-row gap-10 px-1 lg:px-10">

            {/* ------------------card-1---------------------- */}
            <div className="w-full lg:w-96 flex flex-col justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="../../public/icon-home.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">Our Hotel Facilities</h2>
    <p>We are one of the best company in the global market and we have restaurant facilities for all of our guide</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
            {/* ------------------card-2---------------------- */}
            <div className=" w-full lg:w-96  flex flex-col justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="../../public/icon-wifi.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">
Free Wifi Facilities</h2>
    <p>This is the place where I will get a free wifi zone at a reasonable price and this will help you to make a colorful life

</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
            {/* ------------------card-3---------------------- */}
            <div className=" w-full lg:w-96  flex flex-col justify-start bg-[#F5F5F5]">
  <figure className="px-10 pt-10">
    <img className="w-20" src="../../public/icon-star.png" alt="Shoes"/>
  </figure>
  <div className="card-body items-start text-start">
    <h2 className="card-title">
    5 Stars Rettings</h2>
    <p>Atoli is well known agency and the agency is one of the best by 5-star retting and we will be benefited .</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Facilities;