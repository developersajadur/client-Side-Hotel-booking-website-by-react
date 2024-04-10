import { useEffect, useState } from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const HomePageBlogs = () => {
    const [blogs , setBlogs] = useState([]);
    const [seeDetails , setSeeDetails] = useState([3])
    console.log(blogs);
    useEffect( () => {
        fetch("../../../public/blog.json")
        .then (res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        
        <div className="mt-10">
            <h1 className="text-center text-4xl font-bold mb-10">Our Latest Blogs</h1>

            <div className="grid lg:grid-cols-3 gap-10 	">
                {
                    blogs.slice(0 , seeDetails ).map( blog => <Blog
                    key={blog.id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="flex justify-center mt-10">
                    <Link to="/blogs"><button  className="btn lg:w-full btn-primary"> See More </button></Link>
                
                </div>
        </div>
    );
};

export default HomePageBlogs;