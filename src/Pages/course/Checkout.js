import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const hanldeCheckout = (e) => {
        const form = e.target;
        const email = form.stu_email.value;
        const name = form.stu_name.value;
    }
    const details = useLoaderData();
    const { name, about, picture, rating, instructor, duration, price } = details;
    return (
        <div>
            <section className="py-6 ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold capitalize">checkout</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <p>Course Name: </p>
                                <p className='uppercase font-bold text-lg'>{name}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Course Amount: </p>
                                <p>{price}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p>Duration : </p>
                                <p>{duration}</p>
                            </div>
                            <hr />

                            <div className="flex justify-between items-center">
                                <p>Vat: </p>
                                <p>0.00</p>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <p className='uppercase font-bold text-lg'>total: </p>
                                <p className='uppercase font-bold text-lg'>{price}</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={hanldeCheckout} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" name='stu_name' placeholder="Leroy Jenkins" className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" name='stu_email' placeholder="leroy@jenkins.com" className="input text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none w-full " />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block input w-full rounded-md text-black input-bordered focus:outline-none border-t-0 border-l-0 border-r-0 "></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Checkout;