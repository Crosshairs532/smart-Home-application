import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Allphone = () => {
    useEffect(() => {
        AOS.init({
            duration: '2000',
            easing: 'ease-in',
            aos: 'fade-up'
        });
        // console.log('effect')
    }, [])
    return (
        <div className=' mt-[400px] mb-[400px] border-red-500 container m-auto flex flex-col items-center gap-4' data-aos="fade-up">
            <h1 className=' text-center text-7xl' data-aos-duration="1000">Search Phones</h1>
            <div className=' flex items-center justify-center w-[400px]'>
                <input type="text" className=' bg-[#100F0F0D] pl-2 rounded-s-lg py-3 w-[400px]' placeholder=' search your phones ' />
                <button className=' px-[39px] bg-[#0D6EFD] text-white py-3 rounded-e-lg'> search</button>
            </div>

        </div>
    );
};

export default Allphone;