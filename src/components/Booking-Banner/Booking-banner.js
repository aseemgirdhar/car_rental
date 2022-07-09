import "./banner.sass";
import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Car from "../../assets/images/running-car.png";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/images/about-car.jpg";
import axios from "axios";

const BookingBanner = (props) => {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  // const [pickTime, setPickTime] = useState(new Date());
  // const [dropTime, setDropTime] = useState(new Date());

  
  const carBooking = async (e) => {
    e.preventDefault()
    console.log('here', value, value1)
    //let toTime = value1.getTime() + 5*60*60*1000 + 30*60*1000
    
   await axios.post('/user/getCars', { filter: {}, sort: {}, dates: {  
    to_time: value1 ,
   from_time: value} 
  }).then(data => props.setCarList(data.data));
  }
  useEffect(()=>{
   
  }, [])
  
  return (
    <>
     
      <div className="banner-wrapper  ">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div className="rate-availbility h-max w-4/5 m-auto my-8 bg-white rounded-md p-10  mb-8">
            <h2>For Rates & Availability </h2>
            <h5>Search for your car</h5>

            <form>
              <div className="grid gap-6 mb-6 lg:grid-cols-1 my-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Pickup Location"
                    
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 lg:grid-cols-1 my-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                    Pickup Date Time
                  </label>
                  <DateTimePicker
                    onChange={onChange}
                    value={value}
                    className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                    format="dd-MM-y h:mm a"
                    minDate={new Date()}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-headingColor text-left">
                    Dropping Off Date Time
                  </label>
                  <DateTimePicker
                    onChange={onChange1}
                    value={value1}
                    className="dark:bg-gray-700 text-sm rounded-lg block w-full p-2.5 focus:border-none text-left pl-3"
                    format="dd-MM-y h:mm a"  
                    minDate={value}
                  />
                </div>
               
              </div>
             

              <button onClick={carBooking} class="bg-bg hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                Find Car
              </button>
             
            </form>
          </div>

          <div className=" max-h-xl mx-auto px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-18  lg:px-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-3 my-8 ">
              <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                  <Link to="/details">
                    <div
                      className="car-detail"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500"
                    >
                      <div className="card-image banner-deal">
                        <img src={ProductImg} />
                      </div>
                      <div className="card-description bg-bg">
                        <strong>
                          Tata Tiago <span>Rs.200/h</span>
                        </strong>

                        <button class="bg-textColorWhite  mt-3 hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>

              <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                  <Link to="/details">
                    <div
                      className="car-detail"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500"
                    >
                      <div className="card-image banner-deal">
                        <img src={ProductImg} />
                      </div>
                      <div className="card-description bg-bg">
                        <strong>
                          Tata Tiago <span>Rs.200/h</span>
                        </strong>

                        <button class="bg-textColorWhite mt-3 hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                  <Link to="/details">
                    <div
                      className="car-detail"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500"
                    >
                      <div className="card-image banner-deal">
                        <img src={ProductImg} />
                      </div>
                      <div className="card-description bg-bg">
                        <strong>
                          Tata Tiago <span>Rs.200/h</span>
                        </strong>

                        <button class="bg-textColorWhite mt-3 hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                  <Link to="/details">
                    <div
                      className="car-detail"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500"
                    >
                      <div className="card-image banner-deal">
                        <img src={ProductImg} />
                      </div>
                      <div className="card-description bg-bg">
                        <strong>
                          Tata Tiago <span>Rs.200/h</span>
                        </strong>

                        <button class="bg-textColorWhite mt-3 hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 vehicle-section-divider">
        <marquee direction="scroll" loop="" Scrollamount="20">
          <img src={Car} />{" "}
        </marquee>
      </div>
    </>
  );
};
export default BookingBanner;
