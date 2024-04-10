import Facilities from "./Facilities";
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
        </div>
    );
};

export default Home;