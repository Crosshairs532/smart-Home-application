import { Outlet } from "react-router-dom";
import Allphone from "../allphone/Allphone";
import Headers from "../Header/Header"
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import useAuth from "../../Hook/useAuth";
import { Circles } from "react-loader-spinner";
const Home = () => {
    const { user } = useAuth();
    return (

        <>
            <div className={`${location.pathname == '/home' ? '  bg-[#0D6EFD] text-white' : ' bg-[#0D6EFD0D] text-[#100F0F]'}  h-[700px] relative`}>
                <Headers className=' border-2 border-red-700'></Headers>
                <Banner></Banner>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            < div className=" relative mt-[400px]" >
                <Allphone></Allphone>
            </div >
            <Footer></Footer>


        </>
        //         : <Circles
        // height="80"
        // width="80"
        // color="#4fa94d"
        // ariaLabel="circles-loading"
        // wrapperStyle={{}}
        // wrapperClass=""
        // visible={true}
        // />
    );
};

export default Home;