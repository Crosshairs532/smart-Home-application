import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()
    const { createUser, googleReg, user, loader } = useAuth();
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const url = e.target.url.value;
        createUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                // Navigate('/login')
                navigate("/login")
            }
            )
            .catch(er => console.log(er))

    }
    const handle_Google_github = (media) => {
        media()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                Navigate('/login')

            }
            )
            .catch(er => console.log(er))
    }





    return (
        <>
            {user && navigate('/home')}
            {!user ? <h1>loading</h1> :

                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleRegister} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="url" placeholder="give me your photo url" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register now</button>

                                        <p>You have an account? <Link className=" font-bold text-sky-800" to='/login' > Login now</Link></p>
                                    </div>
                                    <div className=" flex gap-2">
                                        <button onClick={() => handle_Google_github(googleReg)} className=" btn">Google </button>
                                        <button onClick={() => handle_Google_github()} className=" btn">Github</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default Register;