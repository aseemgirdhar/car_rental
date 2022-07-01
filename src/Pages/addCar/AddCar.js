import React, { useState } from 'react'
import axios from 'axios';
import loginImg from "../../assets/images/login.png";
const AddCar = () => {
    const [car_name , setCarName] = useState('');
    const [car_model , setCarModel] = useState('')
    const [car_color , setCarColor] = useState('')
    const [car_number , setCarNumber] = useState('')
    const [car_type , setCarType] = useState('')
    const [car_image , setCarImage] = useState('')
    const [car_price_per_hour , setCarPrice] = useState('')
    const [car_driven , setCarDriven] = useState('')
    const [car_fuel_type , setCarFuel] = useState('')
    const [car_seats , setCarSeat] = useState('')
    const [car_tyre_type , setCarTyre] = useState('')
    const [car_gear_type , setCarGearType] = useState('')

    const addCar = (e) => {
        e.preventDefault();
        const getUserId = localStorage.getItem('userInfo');
        const parseUserId = JSON.parse(getUserId);
        const ownerId = parseUserId._id;
        
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
        axios.post("/owner/addCar", {
          _id: ownerId,
         car_name,
     car_model,
         car_color,
         car_number,
         car_type,
         car_image,
         car_price_per_hour,
         car_driven,
         car_fuel_type,
         car_seats,
         car_tyre_type,
         car_gear_type
      } , config);
    }
  return (
    <section className="h-screen">
    <div className="px-6 h-full text-gray-800">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-9/12 mb-12 md:mb-0">
          <img src={loginImg} className="w-full" alt="Sample image" />
        </div>
       
      <div className="xl:ml-20 xl:w-3/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
          <form onSubmit={addCar}>
          
            {/* Car name */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Brand Or Name"
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Modal"
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Color"
                onChange={(e) => setCarColor(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Number"
                onChange={(e) => setCarNumber(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Type"
                onChange={(e) => setCarType(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Image"
                onChange={(e) => setCarImage(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Price Per Hour"
                onChange={(e) => setCarPrice(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Driven"
                onChange={(e) => setCarDriven(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Fuel Type"
                onChange={(e) => setCarFuel(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Seats"
                onChange={(e) => setCarSeat(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Tyre Type"
                onChange={(e) => setCarTyre(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Gear Type"
                onChange={(e) => setCarGearType(e.target.value)}
              />
            </div>

            <div className="text-center lg:text-left">
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Signup
          </button>
          </div>
           
          </form>
        </div>
        
      </div>
    </div>
  </section>

  )
}

export default AddCar