import { Link, NavLink, useLocation } from "react-router-dom";


const Header = () => {

    const Links =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            <li className=""><NavLink to='/about'>About</NavLink></li>
            <li className=""><NavLink to='/testimonial'>Testimonials</NavLink></li>
            <li className=""><NavLink to='/contact'>Contact</NavLink></li>

        </>
    return (
        <div className="">
            <div className="navbar container mx-auto ">
                <div className="navbar-start lg:hidden visible">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Links
                            }
                        </ul>
                    </div>

                </div>

                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className=" navbar-center "> <Link to='/' className=" normal-case font-bold text-[white] text-2xl">SmartHome</Link></div>
                <div className="navbar-end gap-4">
                    <Link className="btn btn-primary">Login</Link>
                    <Link className="btn btn-[#0D6EFD0D] px-3 py-2 ">Sign Up</Link>

                </div>
            </div>

        </div>
    );
};

export default Header;