import "./banner.sass";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Car from '../../assets/images/running-car.png'
const BookingBanner = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <div className="banner-wrapper">
      <h4 className="text-textColorWhite py-8 text-lg">All discount for you</h4>
      <h1 className="text-bg text-xl font-bold">Find Best Rental Cars</h1>
      <div className="rate-availbility h-max w-3/5 m-auto my-8 bg-white rounded-md p-10  mb-8">
        <h2>For Rates & Availability </h2>
        <h5>Search for your car</h5>

        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-3 my-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Pickup Location
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Pickup Location"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Pickup Date
              </label>
              <DateTimePicker
                onChange={onChange}
                value={value}
                className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                format="dd-MM-y"
                minDate={new Date()}
              />
           
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Pickup Time
              </label>

              <DateTimePicker
                onChange={onChange}
                value={value}
                className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                format="h:mm"
              
                minDetail='decade'
              />
             
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Dropping Off Location
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dropping Off Location"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Dropping Off Date
              </label>
              <DateTimePicker
                onChange={onChange}
                value={value}
                className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                format="dd-MM-y"
                minDate={new Date()}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                Dropping Off Time
              </label>
              
              <DateTimePicker
                onChange={onChange}
                value={value}
                className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                format="h:mm"
                minDetail='decade'
              />
            </div>
          </div>

          <button class="bg-bg hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
            Find Car
          </button>
        </form>
      </div>
      
    </div>
    <div  className="bg-gray-800 vehicle-section-divider" >
      <marquee direction="scroll" loop="" Scrollamount='20'><img src={Car} /> </marquee>
    </div>
    </>
  );
};
export default BookingBanner;
