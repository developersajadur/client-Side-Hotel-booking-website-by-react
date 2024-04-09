import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="">
                <TopHeader></TopHeader>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;