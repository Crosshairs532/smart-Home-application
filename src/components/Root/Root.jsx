import { Outlet, useLocation } from "react-router-dom";
import Headers from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from '../Footer/Footer'
// import Register from "../Register/Register";
const Root = () => {
    const location = useLocation();

    return (
        <div>

            <Outlet></Outlet>


        </div >
    );
};

export default Root;