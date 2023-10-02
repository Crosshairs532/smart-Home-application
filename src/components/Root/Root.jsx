import { Outlet, useLocation } from "react-router-dom";
import Headers from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../../Footer/Footer";
const Root = () => {
    const L = useLocation();

    return (
        <div>
            <div className={`${L.pathname == '/' ? '  bg-[#0D6EFD] text-white' : ' bg-[#0D6EFD0D] text-[#100F0F]'}  h-[700px] relative`}>
                <Headers className=' border-2 border-red-700'></Headers>
                <Banner></Banner>
            </div>
            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div >
    );
};

export default Root;