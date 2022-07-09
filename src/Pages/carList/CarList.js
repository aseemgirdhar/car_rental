import productImg from "../../assets/images/detail-4.jpg";
import { PencilAltIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useEffect, useState } from "react";
const CarList = ({ user }) => {
  const [carList, setCarList] = useState([]);
  const [activeCar, setActiveCar] = useState(null);
  const [delConfirmModal, setDelConfirmModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editIndex,setEditIndex] = useState(null)

  //edit cars states
  const [car_name, setCarName] = useState("");
  const [car_model, setCarModel] = useState("");
  const [car_color, setCarColor] = useState("");
  const [car_number, setCarNumber] = useState("");
  const [car_type, setCarType] = useState("");
  const [car_image, setCarImage] = useState("");
  const [car_price_per_hour, setCarPrice] = useState("");
  const [car_driven, setCarDriven] = useState("");
  const [car_fuel_type, setCarFuel] = useState("");
  const [car_seats, setCarSeat] = useState("");
  const [car_tyre_type, setCarTyre] = useState("");
  const [car_gear_type, setCarGearType] = useState("");

  const getAllOwnedCars = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/owner/getAllCars",
      {
        _id: user._id,
      },
      config
    );
    setCarList(data);
  };
  const deleteCar = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/owner/delCar",
      {
        _id: user._id,
        car_id: activeCar._id,
      },
      config
    );
    setCarList(data);
  };
  const saveEditCar = async () => {
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const {_id, ...restEditData} = activeCar
      const { data } = await axios.post(
        "/owner/editCar",
        {
          _id: user._id,
          car_id: activeCar._id,
        ...restEditData
        },
        config
      );
        console.log({data})
        //better way would be to update the state with the edited car data recived and replace the car in carList
        //   getAllOwnedCars()
        let newCarList = carList
        newCarList[editIndex]= data
        setCarList([...newCarList])
       
  }
  useEffect(() => {
    getAllOwnedCars();
  }, []);
  return (
    <div className="py-8 w-full max-w-7xl mx-auto container text-left h-510">
      {/* edit modal */}
      {editModal ? (
        <>
          <div className="profile-edit-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Car </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setEditModal(false)}
                  >
                    <span className="text-gray-900 h-6 w-6 text-2xl block">
                      <XIcon className="w-5 h-5 text-gray-900" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
                      <input
                        type="text"
                        className="form-control block w-full mb-3 px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Brand Or Name"
                        value={activeCar?.car_name}
                        onChange={(e) => setActiveCar({...activeCar, car_name:e.target.value})}
                      />
                      {/* <p className="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full mb-3 px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Modal"
                        value={activeCar?.car_model}
                        onChange={(e) => setActiveCar({...activeCar, car_model:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full mb-3 px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Color"
                        value={activeCar?.car_name}
                        onChange={(e) => setActiveCar({...activeCar, car_name:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full mb-3 px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Number"
                        value={activeCar?.car_number}
                        onChange={(e) => setActiveCar({...activeCar, car_number:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <select
                        class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                mb-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        value={activeCar?.car_type}
                        onChange={(e) => setActiveCar({...activeCar, car_type:e.target.value})}
                      >
                        <option selected>Select Car Type</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Suv">Suv</option>
                        <option value="Sedan">Sedan</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full px-4 mb-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Image"
                        value={activeCar?.car_image}
                        onChange={(e) => setActiveCar({...activeCar, car_image:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full px-4 mb-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Price Per Hour"
                        value={activeCar?.car_price_per_hour}
                        onChange={(e) => setActiveCar({...activeCar, car_price_per_hour:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 mb-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Driven"
                        value={activeCar?.car_driven}
                        onChange={(e) => setActiveCar({...activeCar, car_driven:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      {/* <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Fuel Type"
                onChange={(e) => setCarFuel(e.target.value)}
              /> */}

                      <select
                        class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                mb-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        value={activeCar?.car_fuel_type}
                        onChange={(e) => setActiveCar({...activeCar, car_fuel_type:e.target.value})}
                      >
                        <option selected>Select Car Fuel Type</option>
                        <option value="CNG">CNG</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 mb-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Car Seats"
                        value={activeCar?.car_seats}
                        onChange={(e) => setActiveCar({...activeCar, car_seats:e.target.value})}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      {/* <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Tyre Type"
                onChange={(e) => setCarTyre(e.target.value)}
              /> */}

                      <select
                        class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                mb-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        value={activeCar?.car_tyre_type}
                        onChange={(e) => setActiveCar({...activeCar, car_tyre_type:e.target.value})}
                      >
                        <option selected>Select Car Tyre Type</option>
                        <option value="Tubeless">Tubeless</option>
                        <option value="Tube">Tube</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      {/* <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Car Gear Type"
                onChange={(e) => setCarGearType(e.target.value)}
              /> */}
                      <select
                        class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                mb-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        value={activeCar?.car_gear_type}
                        onChange={(e) => setActiveCar({...activeCar, car_gear_type:e.target.value})}
                      >
                        <option selected>Select Car Gear Type</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                      </select>
                    </div>
                   
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setEditModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      saveEditCar();
                      setEditModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* delete Modal */}
      {delConfirmModal ? (
        <>
          <div className="profile-edit-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Confirm Delete?</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setDelConfirmModal(false)}
                  >
                    <span className="text-gray-900 h-6 w-6 text-2xl block">
                      <XIcon className="w-5 h-5 text-gray-900" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>Are you sure you want to delete {activeCar?.car_name}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setDelConfirmModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      deleteCar();
                      setDelConfirmModal(false);
                    }}
                  >
                    Delete!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="lg:flex items-center justify-start w-full">
        {carList.length === 0 ? "No Cars listed by you!" : null}
        {carList.map((car,index) => {
          return (
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
              <div className="flex items-center border-b border-gray-200 pb-6">
                <img src={productImg} alt className="w-12 h-12 rounded-full" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-medium leading-5 text-gray-800">
                      {car.car_name}{" "}
                    </p>
                    <p className="text-sm leading-normal pt-2 text-cartNumBg">
                      {car.car_model}
                    </p>
                  </div>
                  <div className="inline-flex items-center">
                    <PencilAltIcon className="w-4 h-4 text-blue-600 mr-2 cursor-pointer" 
                    onClick={()=>{
                        setEditIndex(index)
                        setActiveCar(car)
                        setEditModal(true)
                    }}/>
                    <TrashIcon
                      className="w-4 h-4 text-cartNumBg cursor-pointer"
                      onClick={() => {
                        setActiveCar(car);
                        setDelConfirmModal(true);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="px-2">
                {/* <p className="text-sm leading-5 py-4 text-gray-600"> Please find the car details below. you can also edit or delete car accoring to Availablity.</p> */}
                <div className="flex mt-1">
                  <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_number.toUpperCase()}
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_gear_type}
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_driven} Km Driven
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_fuel_type}
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_seats} Seater
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_tyre_type}
                  </div>
                  <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                    {car.car_color}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={productImg} alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">Tata Tiago </p>
                                <p className="text-sm leading-normal pt-2 text-cartNumBg">Booked</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <PencilAltIcon className='w-4 h-4 text-blue-600 mr-2 cursor-pointer' />
                                <TrashIcon className='w-4 h-4 text-cartNumBg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600"> Please find the car details below. you can also edit or delete car accoring to Availablity.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">DL4S BN 9733</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Manual</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">10000 Km Driven</div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={productImg} alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">Tata Tiago </p>
                                <p className="text-sm leading-normal pt-2 text-green-600">Available</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <PencilAltIcon className='w-4 h-4 text-blue-600 mr-2 cursor-pointer' />
                                <TrashIcon className='w-4 h-4 text-cartNumBg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600"> Please find the car details below. you can also edit or delete car accoring to Availablity.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">DL4S BN 9733</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Manual</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">10000 Km Driven</div>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};
export default CarList;
