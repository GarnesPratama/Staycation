import React from "react";
import event from "../Assets/images/event.png";
import Apartment from "../Assets/images/Apartment.png";
import Apartment_1 from "../Assets/images/apartment-1.png";
import Apartment_2 from "../Assets/images/apartment-2.png";
import Apartment_3 from "../Assets/images/apartment-3.png";

export default function sectionApartment() {
  return (
    <div>
      <section className="Apartment mb-24">
        <div className="container mx-auto">
          <div className="text-blue_dark font-sans font-medium text-2xl mt-16 mb-5">
            <h1>Treasure to Choose</h1>
          </div>
          <div className="items  lg:flex gap-x-4 gap-y-4 snap-x overflow-x-hidden overflow-x-scroll">
            <div className="items-Apartment rounded-2xl overflow-hidden w-full  lg:max-h-full mb-8 lg:mb-0 relative   ">
              <img
                src={Apartment}
                alt=""
                className=" w-full max-h-80 lg:max-h-full object-cover overflow-hidden rounded-2xl"
              />

              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  PS Wood
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Depok, Indonesia
                </div>
              </div>
            </div>
            <div className="items-Apartment rounded-2xl overflow-hidden w-full mb-8 lg:mb-0   ">
              <img
                src={Apartment_1}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  One Five
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
            <div className="items-Apartment rounded-2xl overflow-hidden w-full mb-8 lg:mb-0 relative  ">
              <img
                src={Apartment_2}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl relative"
              />
              <div className="event absolute top-0 right-0 ">
                <img src={event} alt="" />
                <div className="text-white font-sans absolute top-2 right-8 text-base font-light ">
                  <h1>Popular Choice</h1>
                </div>
              </div>
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Minimal
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Bogor, Indonesia
                </div>
              </div>
            </div>
            <div className="items-Apartment rounded-2xl overflow-hidden w-full mb-8 lg:mb-0 h-full  ">
              <img
                src={Apartment_3}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl "
              />

              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Stays Home
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Wonosobo, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
