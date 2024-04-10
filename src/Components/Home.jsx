import HomePageBlogs from "./Blog/HomePageBlogs";
import Facilities from "./Facilities";
import FaqSection from "./FaqSection";
import HomePageRooms from "./HomePageRooms";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Facilities></Facilities>
            <HomePageRooms></HomePageRooms>
            <Testimonials></Testimonials>
            <FaqSection></FaqSection>
            <HomePageBlogs></HomePageBlogs>
        </div>
    );
};

export default Home;