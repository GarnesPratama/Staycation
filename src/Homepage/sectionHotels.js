import React from "react";
import event from "../Assets/images/event.png";
import hotels from "../Assets/images/hotels.png";
import hotels_1 from "../Assets/images/hotels-1.png";
import hotels_2 from "../Assets/images/hotels-2.png";
import hotels_3 from "../Assets/images/hotels-3.png";

export default function sectionHotels() {
  return (
    <div>
      <section className="Hotels">
        <div className="container mx-auto">
          <div className="text-blue_dark font-sans font-medium text-2xl mt-16 mb-5">
            <h1>Hotels with large living room</h1>
          </div>
          <div className="items relative lg:flex gap-x-4 gap-y-4 snap-x overflow-x-hidden overflow-x-scroll">
            <div className="items-hotels rounded-2xl overflow-hidden w-full  lg:max-h-full mb-8 lg:mb-0 relative   ">
              <img
                src={hotels}
                alt=""
                className=" w-full max-h-80 lg:max-h-full object-cover overflow-hidden rounded-2xl"
              />

              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Green Park
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Tangerang, Indonesia
                </div>
              </div>
            </div>
            <div className="items-hotels rounded-2xl overflow-hidden w-full mb-8 lg:mb-0   ">
              <img
                src={hotels_1}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Podo Wae
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Madiun, Indonesia
                </div>
              </div>
            </div>
            <div className="items-hotels rounded-2xl overflow-hidden w-full mb-8 lg:mb-0  ">
              <img
                src={hotels_2}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Silver Rain
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Bandung Indonesia
                </div>
              </div>
            </div>
            <div className="items-hotels rounded-2xl overflow-hidden w-full mb-8 lg:mb-0 h-full  ">
              <img
                src={hotels_3}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl relative"
              />
              <div className="event absolute top-0 right-0 ">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-2 right-8 text-base font-light ">
                  <h1>Popular Choice</h1>
                </div>
              </div>
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Cashville
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Kemang, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
