import img from '../../assets/pic.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init();
        console.log('effect')
    }, [])
    return (
        <div className=' '>
            <div className=" flex justify-center items-center flex-col mt-10" data-aos='zoom-in' data-aos-duration="1000">
                <h1 className=" text-6xl font-bold">  Smart Home <br /> Application</h1>
                <p className=" w-[45%] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou.</p>
                <button className=" text-black font-bold px-4 py-2 bg-[white] rounded-lg mt-9"> Buy Now</button>
            </div>
            <div className=' flex gap-3 left-[10%] top-[450px] absolute justify-center items-baseline' data-aos-offset="300" >
                <div data-aos='fade-right' data-aos-delay="1000" data-aos-duration="1000" className=' w-[14%]'> <img className=' drop-shadow-2xl w-full' src={img} alt="" /> </div>
                <div data-aos='fade-up' data-aos-delay="1000" data-aos-duration="1000" className=' w-[20%]'> <img className=' drop-shadow-2xl w-full' src={img} alt="" /> </div>
                <div data-aos='fade-left' data-aos-delay="1000" data-aos-duration="1000" className=' w-[14%]'> <img className=' drop-shadow-2xl w-full' src={img} alt="" /> </div>
            </div>
        </div>
    );
};

export default Banner;