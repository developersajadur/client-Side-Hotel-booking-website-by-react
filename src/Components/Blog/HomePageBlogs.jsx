import { useEffect, useState } from "react";
import Blog from "./Blog";

const HomePageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [seeDetails, setSeeDetails] = useState(3);
    useEffect(() => {
        fetch("/blog.json") // Assuming blog.json is in the public directory
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    const handleSeeMore = () => {
        // Increment the number of blogs to display by a certain amount
        setSeeDetails(prevSeeDetails => prevSeeDetails + 3);
    };

    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl font-bold mb-10">Our Latest Blogs</h1>
            <div className="grid lg:grid-cols-3 gap-10">
                {
                    blogs?.slice(0, seeDetails).map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                {seeDetails < blogs.length && (
                    <button className="btn w-fit bg-[#E7A500]" onClick={handleSeeMore}>
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default HomePageBlogs;
