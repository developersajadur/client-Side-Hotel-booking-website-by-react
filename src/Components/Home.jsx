import Facilities from "./Facilities";
import HomePageRooms from "./HomePageRooms";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Facilities></Facilities>
            <HomePageRooms></HomePageRooms>
        </div>
    );
};

export default Home;