
const FaqSection = () => {
    return (
        <div>
             <section className="w-[400px] lg:w-[1140px] container mx-auto mt-16 lg:mt-28 lg:mb-16">
      <div className="mb-10 text-center">
        <h1 className="section-title font-bold text-4xl">Clients Question</h1>
        <p className="section-p text-base mt-5">
          Gain insights: What challenges do our clients face? <br />
          How can we assist you better today?
        </p>
      </div>

      <div className="border rounded-2xl">
        <div className="hero flex justify-center">
          <div className="hero-content flex-col lg:flex-row jsutify-center">
            <img
              src="https://i.ibb.co/9c0y0sV/11.png"
              className="max-w-sm w-3/4 lg:w-full rounded-lg"
              alt="Image"
            />
            <div className="flex flex-col gap-1">
              <div className="collapse collapse-plus w-[350px] lg:w-[700px]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">
                Reservation Process
                </div>
                <div className="collapse-content">
                  <p>
                  Learn about how to book your stay at our resident hotel effortlessly. Find out about reservation methods, payment options, and cancellation policies to ensure a smooth booking experience.
                  </p>
                </div>
              </div>
              {/* ---------------- faq-2------------------ */}
              <div className="collapse collapse-plus w-[350px] lg:w-[700px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">
                Accommodation Facilities
                </div>
                <div className="collapse-content">
                  <p>
                  Discover the amenities and services available during your stay at our resident hotel. From room types and in-room features to common areas and recreational facilities, find answers to all your questions about what we offer to make your stay comfortable and enjoyable.
                  </p>
                </div>
              </div>
              {/* ---------------- faq-3------------------ */}
              <div className="collapse collapse-plus w-[350px] lg:w-[700px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">
                Check-in and Check-out Procedures
                </div>
                <div className="collapse-content">
                  <p>
                  Familiarize yourself with our check-in and check-out processes to streamline your arrival and departure. Find information on timings, required documents, and any additional procedures to ensure a hassle-free experience during your stay with us.
                  </p>
                </div>
              </div>
              {/* ---------------- faq-4------------------ */}
              <div className="collapse collapse-plus w-[350px] lg:w-[700px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">
                Dining Options
                </div>
                <div className="collapse-content">
                  <p>
                  Explore the dining options available at our resident hotel. From breakfast offerings to on-site restaurants or nearby eateries, get insights into where you can satisfy your culinary cravings during your stay with us.
                  </p>
                </div>
              </div>
              {/* ---------------- faq-5------------------ */}
              <div className="collapse collapse-plus w-[350px] lg:w-[700px]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">
                Local Attractions and Transportation
                </div>
                <div className="collapse-content">
                  <p>
                  Discover nearby attractions and transportation options to make the most out of your visit to our resident hotel. Learn about popular landmarks, transportation services, and travel tips to help you explore the surrounding area conveniently and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default FaqSection;