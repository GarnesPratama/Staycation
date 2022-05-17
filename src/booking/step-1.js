import React from "react";
import line from "../Assets/images/line.png";
import { Link } from "react-router-dom";
import Apartment from "../Assets/images/apartemen.png";
import succes from "../Assets/images/succes.png";

export default function number() {
  return (
    <div>
      <div className="grid justify-center mt-12">
        <div className="level flex justify-center">
          <div className="rounded-full bg-blank w-12 h-12 mt-2  ">
            <div className="font-extralight font-sans text-gray_text text-2xl grid justify-center mt-2 ">
              <h1>1</h1>
            </div>
          </div>
          <div className="line mt-8 ">
            <img src={line} alt="" srcset="" />
          </div>
          <div className="rounded-full bg-blank w-12 h-12 mt-2  ">
            <div className="font-extralight font-sans text-gray_text text-2xl grid justify-center mt-2 ">
              <h1>2</h1>
            </div>
          </div>
        </div>
        <div className="title mt-12 font-sans grid justify-center text-center">
          <h1 className=" text-blue_dark font-semibold text-4xl">
            Booking Information
          </h1>
          <p className="font-light text-gray_light text-center text-lg">
            Please fill up the blank fields below
          </p>
        </div>
        <div className="grid grid-cols-2 gap-40 mt-20">
          <div className="apartment">
            <img src={Apartment} alt="" className="" />
            <div className="desc flex">
              <div className="title font-sans mt-4">
                <h1 className=" font-normal text-blue_dark text-xl">
                  Podo Wae
                </h1>
                <h1 className=" font-light text-gray_light text-base">
                  Madiun, Indonesia
                </h1>
              </div>
              <div className="price font-sans text-base font-light text-gray_light mt-6 ml-28  ">
                <a className="text-blue_dark font-medium text-base">$480 USD</a>{" "}
                per{" "}
                <a className="text-blue_dark font-medium text-base">
                  {" "}
                  2 nights
                </a>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form  ">
              <label class="block">
                <span class=" font-sans font-normal text-blue_dark text-base">
                  First Name
                </span>
                <div className="class flex">
                  <input
                    type="text"
                    class="
                    mt-1
                    block
                    rounded-md
                    bg-gray_form
                    w-64
                    h-8
                    border-gray_form
                  "
                    placeholder=""
                  />
                </div>
              </label>
              <label class="block mt-5">
                <span class=" font-sans font-normal text-blue_dark text-base">
                  Last Name
                </span>
                <div className="class flex">
                  <input
                    type="text"
                    class="
                    mt-1
                    block
                    rounded-md
                    bg-gray_form
                    w-64
                    h-8
                    border-gray_form
                  "
                    placeholder=""
                  />
                </div>
              </label>
              <label class="block mt-5">
                <span class=" font-sans font-normal text-blue_dark text-base">
                  Email
                </span>
                <div className="class flex">
                  <input
                    type="email"
                    class="
                    mt-1
                    block
                    rounded-md
                    bg-gray_form
                    w-64
                    h-8
                    border-gray_form
                  "
                    placeholder=""
                  />
                </div>
              </label>
              <label class="block mt-5">
                <span class=" font-sans font-normal text-blue_dark text-base">
                  Phone Number
                </span>
                <div className="class flex">
                  <input
                    type="number"
                    class="
                    mt-1
                    block
                    rounded-md
                    bg-gray_form
                    w-64
                    h-8
                    border-gray_form
                  "
                    placeholder=""
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="btn-cta grid justify-center mt-20 mb-20">
          <button className=" items-center bg-blue w-72 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
            Continue to Book
          </button>
          <button className=" items-center bg-gray_form w-72 h-12 rounded-md text-gray_text hover:shadow-xl shadow-lg mt-5">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
