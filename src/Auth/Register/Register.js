import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Authcontext';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const faceProvider = new FacebookAuthProvider();

const Register = () => {
    const [erro, setErr] = useState('');
    const navigate = useNavigate();
    const { user, handleRegister, handleGoogle, handleFacebook } = useContext(UserContext);
    const handleGoog = () => {
        handleGoogle(provider).then((result) => {
            const curuser = result.user;
            navigate('/home')
            toast.success('Login Successed')
        })
            .catch(error => { const er = error.message })
    }
    const handleFace = () => {
        handleFacebook(faceProvider).then(user => { console.log(user) }).catch(error => console.log(error))
    }
    const handleRegis = (e) => {
        e.preventDefault();
        const form = e.target;
        const gmail = form.gmail.value;
        const pass = form.pass.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const confirm = form.confirm_pass.value;

        if (pass !== confirm) {
            toast.error('try again,please check password,');
        }
        else if (pass.length < 6 || confirm.length < 6) {
            toast.error('password length must be 6 up');
        }
        else if (user?.email === gmail) {
            toast.error('you have already an account');
        }

        else {
            handleRegister(gmail, pass)
                .then((res) => {
                    updateProfile(res.user, {
                        displayName: name, photoURL: photo
                    })
                    toast.success('successfully registered');
                    navigate('/home')
                })
                .catch(error => {
                    const err = error.message;
                    setErr(err)
                })
            form.reset();
        }
    }
    return (
        <>
            <div className='2xl:w-5/12 lg:w-7/12 md:w-9/12 sm:11/12 mx-auto rounded'>
                <div className='border rounded p-8 mt-6'>
                    <form onSubmit={handleRegis}>
                        <div className="form-control my-3 w-full ">
                            <h4 className='text-2xl font-bold text-black uppercase'>Create an account</h4>
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="text" placeholder="First Name" name='name' required className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="text" placeholder="User Photo" name='photo' required className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="text" placeholder="User Name or Email" name='gmail' required className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="password" placeholder="Password" name='pass' required className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <input type="password" placeholder="Confirm Pass" name='confirm_pass' required className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </div>
                        <div className="form-control my-3 w-full ">
                            <button className='w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 rounded text-base uppercase'>Submit</button>
                        </div>

                    </form>
                    <p className='text-red-700 capitalize'>{erro ? 'something went wrong' : ''}</p>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoog} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
                        </button>
                        <button aria-label="Log in with GitHub" onClick={handleFace} className="p-3 rounded-sm">
                            <FaFacebook className="w-5 h-5 fill-current"></FaFacebook>
                        </button>
                    </div>
                    <p className="text-lg text-center sm:px-6 text-gray-400">you have an account?
                        <Link rel="noopener noreferrer" to={'/login'} className="underline text-green-600">Login</Link>
                    </p>
                </div>

            </div>
        </>
    );
};

export default Register;