import React, { useEffect } from "react";
import BookingBanner from "../../components/Booking-Banner/Booking-banner";
import "./Home.sass";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import ProductImg from "../../assets/images/about-car.jpg";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/solid";

import "animate.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [details, moreDetails] = useState(false);
  const [cardView, setCardView] = useState(false);

  const getCardView = () => {
    setCardView((cardView) => !cardView);
  };
  const moreDetailsHandler = () => {
    moreDetails((details) => !details);
  };
  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

  const filters = [
    {
      id: "name",
      name: "Name",
      options: [
        { value: "Aston Martin", label: "Aston Martin", checked: false },
        { value: "Audi", label: "Audi", checked: true },
        { value: "BMW", label: "BMW", checked: false },
        { value: "Cadillac", label: "Cadillac", checked: false },
        { value: "Datsun", label: "Datsun", checked: false },
        { value: "Honda", label: "Honda", checked: false },
        { value: "Volkswagen", label: "Volkswagen", checked: false },
      ],
    },
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "model",
      name: "Model",
      options: [
        { value: "2018", label: "2018", checked: false },
        { value: "2019", label: "2019", checked: false },
        { value: "2020", label: "2020", checked: true },
        { value: "2021", label: "2021", checked: false },
        { value: "2022", label: "2022", checked: false },
      ],
    },
    {
      id: "fuel",
      name: "Fuel Type",
      options: [
        { value: "Petrol", label: "Petrol", checked: false },
        { value: "Deisel", label: "Deisel", checked: false },
        { value: "CNG", label: "CNG", checked: true },
      ],
    },
    {
      id: "type",
      name: "Car Type",
      options: [
        { value: "SUV", label: "SUV", checked: false },
        { value: "Hatchback", label: "Hatchback", checked: true },
        { value: "Sedan", label: "Sedan", checked: false },
      ],
    },
    {
      id: "gear",
      name: "Gear Type",
      options: [
        { value: "Automatic", label: "Automatic", checked: false },
        { value: "Manual", label: "Manual", checked: true },
      ],
    },
    {
      id: "seat",
      name: "Car Seats",
      options: [
        { value: "5", label: "5", checked: false },
        { value: "8", label: "8", checked: true },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [carList, setCarList] = useState([]);
  const getCarLists = async () => {
    await axios
      .post("/user/getCars", { filter: {}, sort: {}, dates: {} })

      .then((carList) => setCarList(carList.data));
  };

  useEffect(() => {
    getCarLists();
  }, []);
  return (
    <>
      <BookingBanner setCarList={setCarList} />

      <div className="bg-white mt-10">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusSmIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between  pb-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Find Your Car
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  onClick={getCardView}
                  type="button"
                  className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View grid</span>
                  {cardView ? (
                    <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
                <button
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pt-6 pb-24"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="bg-white">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
                      <div
                        className={`${
                          cardView
                            ? "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8"
                            : "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                        }`}
                      >
                        {carList.map((car) => {
                          return(
                          <Link to={`/getCar/${car._id}`} key={car._id}>
                            <div
                              className="car-detail"
                              data-aos="flip-left"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1500"
                            >
                              <div className="card-image">
                                <img src={ProductImg} />
                              </div>
                              <div className="card-description bg-bg">
                                <strong>
                                  {car.car_name} <span>Rs. {car.car_price_per_hour}/h</span>
                                </strong>
                                {!cardView && (
                                  <a
                                    className="more-details"
                                    onClick={moreDetailsHandler}
                                  >
                                    More Details
                                  </a>
                                )}
                                

                                <button class="bg-textColorWhite hover:text-textColorWhite hover:bg-cartNumBg text-headingColor font-bold py-2 px-4 rounded-full">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </Link>)
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="flex items-center justify-center h-340 bg-fixed bg-center bg-cover custom-img ">
            <div className="grid grid-cols-4 gap-4">
              <div
                className="customer-wrapper p-16"
                
              >
                <h2 className="text-2xl text-bg font-bold rounded-sm">250</h2>
                <h3>Available Cars</h3>
              </div>
              <div
                className="customer-wrapper p-16"
                
              >
                <h2 className="text-2xl text-bg font-bold rounded-sm">25845</h2>
                <h3>Happy Customers</h3>
              </div>
              <div
                className="customer-wrapper p-16"
              
              >
                <h2 className="text-2xl text-bg font-bold rounded-sm">245</h2>
                <h3>Drivers</h3>
              </div>
              <div
                className="customer-wrapper p-16"
                
              >
                <h2 className="text-2xl text-bg font-bold rounded-sm">525</h2>
                <h3>Days in Business</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
