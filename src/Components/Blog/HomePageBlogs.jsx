import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const HomePageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [seeDetails, setSeeDetails] = useState(3);
    useEffect(() => {
        fetch("/blog.json") // Assuming blog.json is in the public directory
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);


    return (
        <div className="mt-10 px-2 lg:px-10">
            <h1 className="text-center text-4xl font-bold mb-10">Our Latest Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                   Array.isArray(blogs) && blogs?.slice(0, seeDetails).map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                {seeDetails < blogs.length && (
                    <Link to="/blogs">
                    <button className="btn w-fit bg-[#E7A500]">
                        See More
                    </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomePageBlogs;
