import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className=" relative mt-[400px]">

            <Outlet></Outlet>
        </div>
    );
};

export default Home;