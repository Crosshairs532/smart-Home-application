
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, 'pass', password)
        userLogin(email, password)
            .then(() => {
                console.log('im inside')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'succesfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/home')
            })
            .catch(er => alert('invalid'))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                                <p>You don't have any account? <Link className=" font-bold text-sky-800" to='/'> Register now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;