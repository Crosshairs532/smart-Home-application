import { Outlet } from "react-router-dom";
import Allphone from "../allphone/Allphone";

const Home = () => {
    return (
        <div className=" relative mt-[400px]">
            <Allphone></Allphone>
        </div>
    );
};

export default Home;