import React, { useState } from "react";
import productImg from '../../assets/images/detail-4.jpg'
const Checkout = () => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Back</p>
                        </button>
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-10">Checkout</p>
                       
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">Tata Tiago</p>
                                <p className="text-base font-semibold leading-none text-gray-600">Rs.200.00</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={productImg} alt="headphones" />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                           

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                                </div>
                            </div>


                            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Pay $54652</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
