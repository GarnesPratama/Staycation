import React from "react";
import icon1 from "../Assets/images/ic_traveler 1.png";
import icon2 from "../Assets/images/ic_treasure 1.png";
import icon3 from "../Assets/images/ic_cities 1.png";
import hotel from "../Assets/images/placeholder.png";
import rectangle from "../Assets/images/Rectangle 2.png";

export default function placeholder() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid  lg:grid-cols-2 grid-cols-none">
          <div className="col">
            <div className="text-blue_dark font-extrabold text-4xl font-serif mb-8 mt-16 text-center lg:text-left     ">
              <h1>
                Forget Busy Work, <br />
                Start Next Vacation
              </h1>
            </div>
            <div className="text-gray_light font-sans text-base text-center lg:text-left ">
              <p>
                We provide what you need to enjoy your <br />
                holiday with family. <br />
                Time to make another memorable moments.
              </p>
            </div>
            <div className="btn-cta my-8 text-center lg:text-left ">
              <button className=" items-center bg-blue w-52 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
                Show Me Now
              </button>
            </div>
            <div className="testimonial mt-10  text-md flex justify-center lg:justify-start mx-auto ">
              <div className="travel">
                <img src={icon1} alt="" />
                <p className=" mt-3 font-medium ">
                  80,409
                  <a className="text-gray_light ml-2 font-light mr-12">
                    travelers
                  </a>
                </p>
              </div>
              <div className="travel">
                <img src={icon2} alt="" />
                <p className=" mt-3 font-medium ">
                  862
                  <a className="text-gray_light ml-2 font-light mr-12">
                    treasure
                  </a>
                </p>
              </div>
              <div className="travel">
                <img src={icon3} alt="" />
                <p className=" mt-3 font-medium ">
                  1.592
                  <a className="text-gray_light ml-2 font-light mr-12">
                    cities
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:col">
            <img
              src={hotel}
              alt=""
              srcset=""
              className="invisible lg:visible mt-16 absolute w-0 h-0 lg:w-auto lg:h-auto  "
            />
            <img
              src={rectangle}
              alt=""
              srcset=""
              className=" mt-28 ml-24 invisible lg:visible w-0 h-0 lg:w-auto lg:h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
