import React from "react";
import {
  TruckIcon,
  CurrencyRupeeIcon,
  SupportIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";

const About = () => {
  return (
    <>
      <div
        className="welcome my-24"
        data-aos="fade-up"
        data-aos-duration="1500"
        id="about"
      >
        <h2 className="text-bg">WELCOME TO US</h2>
        <h5> THE BEST SERVICES OUR COMPANY </h5>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl max-h-xl mx-auto pb-24 px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div className="about-left-section" data-aos="flip-left"></div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <div
              className="text-left why-us-section"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <TruckIcon className="text-bg" />
              <strong>Variety of Car Brands</strong>
              <p>
                Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae nibh nisl. Cras etitikis mauris egeth .
              </p>
            </div>
            <div
              className="text-left why-us-section"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <CurrencyRupeeIcon className="text-bg" />
              <strong>Best Rate guarantee</strong>
              <p>
                Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae nibh nisl. Cras etitikis mauris egeth .
              </p>
            </div>
            <div
              className="text-left why-us-section"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <SupportIcon className="text-bg" />
              <strong>Awesome Support</strong>
              <p>
                Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae nibh nisl. Cras etitikis mauris egeth .
              </p>
            </div>
            <div
              className="text-left why-us-section"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <PresentationChartLineIcon className="text-bg" />
              <strong>Careful Activity</strong>
              <p>
                Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae nibh nisl. Cras etitikis mauris egeth .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full text-center">
            <section className="mb-20 text-gray-700">
             
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="block rounded-lg shadow-lg bg-white">
                    <div
                      className="overflow-hidden rounded-t-lg h-28"
                      style={{ backgroundColor: "#9d789b" }}
                    />
                    <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-semibold mb-4">
                        Maria Smantha
                      </h4>
                      <hr />
                      <p className="mt-4">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="quote-left"
                          className="w-6 pr-2 inline-block"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                          />
                        </svg>
                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                        adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block rounded-lg shadow-lg bg-white">
                    <div
                      className="overflow-hidden rounded-t-lg h-28"
                      style={{ backgroundColor: "#7a81a8" }}
                    />
                    <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-semibold mb-4">
                        Lisa Cudrow
                      </h4>
                      <hr />
                      <p className="mt-4">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="quote-left"
                          className="w-6 pr-2 inline-block"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                          />
                        </svg>
                        Neque cupiditate assumenda in maiores repudi mollitia
                        architecto.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block rounded-lg shadow-lg bg-white">
                    <div
                      className="overflow-hidden rounded-t-lg h-28"
                      style={{ backgroundColor: "#6d5b98" }}
                    />
                    <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-semibold mb-4">
                        John Smith
                      </h4>
                      <hr />
                      <p className="mt-4">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="quote-left"
                          className="w-6 pr-2 inline-block"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                          />
                        </svg>
                        Delectus impedit saepe officiis ab aliquam repellat rem
                        unde ducimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Neque cupiditate assumenda in maiores repudiandae mollitia
              adipisci maiores repudiandae mollitia consectetur adipisicing
              architecto elit sed adipiscing elit."
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Teresa May</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur est laborum neque
              cupiditate assumenda in maiores."
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple image"
              />
            </div>
            <p className="text-gray-500">- Kate Allise</p>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default About;
