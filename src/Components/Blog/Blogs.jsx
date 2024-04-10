import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="px-1 lg:px-10 mt-10 lg:mt-20">
            <div className="w-full  text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-5">
            <h1 className="text-4xl font-bold">Our Latest Blogs</h1>
        </div>
        <div  className="grid lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12 mt-10  ">
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;