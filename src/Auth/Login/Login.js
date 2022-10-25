import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { UserContext } from '../Authcontext';

const Login = () => {
    const { handleLogin, handleGoogle } = useContext(UserContext)
    const handleLog = (e) => {
        e.preventDefault();
        const form = e.target;
        const gmail = form.gmail.value;
        const pass = form.pass.value;
        handleLogin(gmail, pass)
            .then((user) => { console.log(user) })
            .catch(error => console.log(error))
        form.reset();
    }

    return (
        <>
            <div className='w-5/12 mx-auto rounded'>
                <div className='border rounded p-8 mt-6'>
                    <form onSubmit={handleLog}>
                        <div className="form-control my-3 w-full ">
                            <h4 className='text-2xl font-bold text-black uppercase'>Log in account</h4>
                        </div>

                        <div className="form-control my-3 w-full ">
                            <input type="text" placeholder="User Name or Email" name='gmail' className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="text" placeholder="Password" name='pass' className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>

                        <div className="form-control my-3 w-full ">
                            <button className='w-full bg-green-600 text-white font-semibold py-2 rounded text-base uppercase'>Submit</button>
                        </div>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <FaGithub className="w-5 h-5 fill-current"></FaGithub>
                        </button>
                    </div>
                    <p className="text-lg text-center sm:px-6 text-gray-400">Don't have an account?
                        <Link rel="noopener noreferrer" to={'/sign'} className="underline text-green-600">Sign up</Link>
                    </p>
                </div>

            </div>
        </>
    );
};

export default Login;