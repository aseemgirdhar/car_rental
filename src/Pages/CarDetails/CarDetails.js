import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import carImg from "../../assets/images/detail-1.jpg";
import carImg1 from "../../assets/images/detail-2.jpg";
import carImg2 from "../../assets/images/detail-3.jpg";
import carImg3 from "../../assets/images/detail-4.jpg";
import { CurrencyRupeeIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CarDetails.sass";
const CarDetails = () => {
  const [getCarDetails, setCarDetails] = useState({});
  const params = useParams();
  console.log(params);
  const getSingleCar = async () => {
    await axios
      .post(`/getCar`, { car_id: `${params.id}` })
      .then((getCarDetails) => setCarDetails(getCarDetails.data));
  };

  useEffect(() => {
    getSingleCar();
  }, []);

  const product = {
    name: "Tata Tiago",
    price: "200",
    href: "#",
    breadcrumbs: [{ id: 1, name: "Home", href: "/dashboard" }],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "Free Cancellation", inStock: true },
      { name: "Instantly Confirmed", inStock: true },
      { name: "Loss Damage Waiver", inStock: true },
      { name: "Breakdown Assistance", inStock: true },
      { name: "Pay Later", inStock: true },
      { name: "Includes 300 miles Rental", inStock: true },
    ],
    description:
      "Younger and more premium than ever! Buy New Tiago- Its #SeriouslyFun. Starts@ ₹ 5.37 Lac. Best-In-Segment Power, Safety With 4-Star Safety Rating by GNCAP & New Premium Features. Rated 4-Star by GNCAP. Rear Parking Camera. Dual Front Airbags.",
    highlights: ["Automatic", "CNG", "5 Seats", "2018"],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const protect_email = (user_email) => {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, part1.length - avg);
    part2 = splitted[1];
    return part1 + "...@" + part2;
  };
  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li key={getCarDetails._id}>
                <div className="flex items-center">
                  <a className="mr-2 text-sm font-medium text-gray-900">
                    Details
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {getCarDetails.car_name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl text-left">
                {getCarDetails.car_name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900 text-left flex items-center">
                {" "}
                <CurrencyRupeeIcon className="w-6 h-6 mr-2" />{" "}
                {getCarDetails.car_price_per_hour} /Hr
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-900 font-medium text-left">
                    Color
                  </h3>
                  <div
                    className="car_color"
                    style={{ background: `${getCarDetails.car_color}` }}
                  >
                    {" "}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">
                      FREE benefits included with your rental
                    </h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-8 lg:grid-cols-3">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "bg-white shadow-sm text-gray-900"
                                : "bg-gray-50 text-gray-200 cursor-not-allowed",
                              active ? "bg-white shadow-sm text-gray-900" : "",
                              "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-md pointer-events-none"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                >
                                  <svg
                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full bg-textColor border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-cartNumBg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Book Now
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900 text-left">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul
                    role="list"
                    className="pl-4 list-disc text-sm space-y-2 car-detail-list"
                  >
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Type </span>{" "}
                      {getCarDetails.car_type}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Driven </span>{" "}
                      {getCarDetails.car_driven}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Fuel Type </span>{" "}
                      {getCarDetails.car_fuel_type}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Gear Type </span>{" "}
                      {getCarDetails.car_gear_type}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Model </span>{" "}
                      {getCarDetails.car_model}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Number </span>{" "}
                      {getCarDetails.car_number}
                    </li>
                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Seats </span>{" "}
                      {getCarDetails.car_seats}
                    </li>

                    <li className="text-gray-900 text-left flex justify-between">
                      <span className="text-cartNumBg"> Car Tyre Type </span>{" "}
                      {getCarDetails.car_tyre_type}
                    </li>

                    {/* {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400 text-left">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
