import React, { useState } from "react";
import axios from "axios";
import { PencilAltIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import "./Profile.sass";
import { Navigate } from "react-router-dom";
const Profile = ({user, setUser}) => {


  console.log({user, setUser})
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  // console.log(user.personalDetails)
  
  const [showModal, setShowModal] = React.useState(user.personalDetails?.a =='1'?true:false);
  
  //modaldata 
  const [fname, setFname] = useState(user.personalDetails.fname?user.personalDetails?.fname:'')
  const [lname, setLname]= useState(user.personalDetails.lname?user.personalDetails?.lname:'')
  const [dob, setDob] = useState(user.personalDetails.dob?user.personalDetails?.dob:'')
  const [mob, setMob] = useState(user.personalDetails.mob?user.personalDetails?.mob:'')
  const [gender, setGender] = useState(user.personalDetails.gender?user.personalDetails?.gender:'')
  const [address, setAddress]= useState(user.personalDetails.address?user.personalDetails?.address:'')
  const [permanentAddress, setPaddress] = useState(user.personalDetails.permanentAddress?user.personalDetails.permanentAddress:'')
  const [state, setState] = useState(user.personalDetails.state?user.personalDetails.state:'')
  const [city, setCity] = useState(user.personalDetails.city?user.personalDetails.city:'')
  const [zip, setZip]= useState(user.personalDetails.zip?user.personalDetails.zip:'')
  


  const savePersonalData = async() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        
      },
    };
    const { data } = await axios.post(
      "/user/editUser",
      {
        _id: user._id,
        personalDetails: {
          fname,lname,dob,gender,address, permanentAddress, state, city, zip
        }
      },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    setUser(data)
  }
  return (
  
   <div className="bg-gray-100  top-10">
    {user? '': <Navigate to='/login'/>}
    
      {showModal ? (
        <>
          <div className="profile-edit-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-900 h-6 w-6 text-2xl block">
                      <XIcon className="w-5 h-5 text-gray-900" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Jane"
                          value={fname}
                          onChange={e => setFname(e.target.value)}
                        />
                        
                      </div>
                      <div className="w-full md:w-1/2 px-3  mb-6">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Doe"
                          value={lname}
                          onChange={e => setLname(e.target.value)}
                        />
                      </div>

                      {/* <div className="w-full md:w-1/2 px-3  mb-6">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-number"
                        >
                          Mobile 
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-number"
                          type="number"
                          placeholder="Doe"
                        />
                      </div> */}


                      <div className="w-full md:w-1/2 px-3  mb-6">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          Gender
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                          >
                            <option value=''>Select Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>


                      {/* <div className="w-full md:w-1/2 px-3  mb-6">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-email"
                        >
                          Email 
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          type="email"
                          placeholder="name@gmail.com"
                        />
                      </div> */}

                      <div className="w-full md:w-1/2 px-3  mb-6">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-dob"
                        >
                          DOB 
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-dob"
                          type="text"
                          placeholder="18-06-1991"
                          value={dob}
                          onChange={e => setDob(e.target.value)}
                        />
                      </div>

                      <div className="w-full md:w-1/2 px-3  ">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-Address"
                        >
                         Current Address 
                        </label>
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-Address"
                          type="text"
                          placeholder="Current Address"
                          value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                      </div>

                      <div className="w-full md:w-1/2 px-3 ">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-pAddress"
                        >
                          Permanent Address 
                        </label>
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-pAddress"
                          type="text"
                          placeholder="Permanent Address"
                          value={permanentAddress}
                          onChange={e => setPaddress(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-city"
                        >
                          City
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          placeholder="Albuquerque"
                          value={city}
                          onChange={e => setCity(e.target.value)}
                        />
                      </div>

                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                        >
                          State
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-State"
                          type="text"
                          placeholder="State"
                          value={state}
                          onChange={e => setState(e.target.value)}
                        />
                      </div>
                      
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-zip"
                        >
                          Zip
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="text"
                          placeholder={90210}
                          value={zip}
                          onChange={e => setZip(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      savePersonalData()
                      setShowModal(false)}}
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

      {/* End of Navbar */}
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-bg">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
               {user.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
                <li className="flex items-center py-3">
                  <span>Wallet Balance</span>
                  <span className="ml-auto">Rs. {user.wallet}</span>
                </li>
              </ul>
            </div>
            {/* End of profile card */}
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 mx-2">
            {/* Profile tab */}
            {/* About Section */}
            <div className="bg-white p-3 shadow-sm rounded-sm text-left">
              <div className="flex justify-between">
                <div className="tracking-wide text-grey-900 font-bold flex items-center mb-5 ">
                  <UserIcon className="w-5 h-5" />
                  About
                </div>
                <div className="tracking-wide flex items-center'">
                  <span>
                    <PencilAltIcon
                      className="w-4 h-4 text-blue-600 mr-2 cursor-pointer"
                      onClick={() => setShowModal(true)}
                    />
                  </span>
                </div>
              </div>
              {/* <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 justify-between">
           

          </div> */}
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{user.personalDetails?.fname}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{user.personalDetails?.lname}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{user.personalDetails?.gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+11 998001001</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                    {user.personalDetails?.address}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanant Address
                    </div>
                    <div className="px-4 py-2">
                    {user.personalDetails?.permanentAddress}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">DOB</div>
                    <div className="px-4 py-2">{user.personalDetails?.dob}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of about section */}
            <div className="my-4" />
            {/* Experience and education */}
            <div className="bg-white p-3 shadow-sm rounded-sm text-left">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Order History</span>
                  </div>
                  <ul className="list-inside space-y-2 pr-10">
                    <li>
                      <div className="text-cartNumBg flex justify-between items-center">
                        Tata Tiago{" "}
                        <small className="text-gray-800">Rs. 4000 </small>
                      </div>
                      <div className="text-gray-500 text-xs">
                        26 March 2022 - 30 March 2022
                      </div>
                    </li>

                    <li>
                      <div className="text-cartNumBg flex justify-between">
                        i20<small className="text-gray-800">Rs. 6300 </small>
                      </div>
                      <div className="text-gray-500 text-xs">
                        1 Apr 2022 - 5 Apr 2022
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Cars</span>
                  </div>
                  <ul className="list-inside space-y-2 pl-7">
                    <li>
                      <div className="text-blue-500 ">
                        {" "}
                        <a href="/car-list"> Cars List </a>{" "}
                      </div>
                    </li>
                    <li>
                      <div className="text-blue-500">
                        <a href=""> Cars Status </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of Experience and education grid */}
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;
