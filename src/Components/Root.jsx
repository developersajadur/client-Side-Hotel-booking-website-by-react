import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
            <div className="">
                <TopHeader></TopHeader>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;