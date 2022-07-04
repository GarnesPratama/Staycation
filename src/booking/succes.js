import React from "react";
import line from "../Assets/images/line.png";
import { Link } from "react-router-dom";
import Apartment from "../Assets/images/apartemen.png";
import succes from "../Assets/images/succes.png";
import success from "../Assets/images/success.png";

export default function number() {
  return (
    <div>
      <div className="grid justify-center mt-12">
        <div className="level flex justify-center">
          <div className="rounded-full bg-blank w-12 h-12 mt-2  ">
            <img src={succes} alt="" srcset="" className=" object-cover" />
          </div>
          <div className="line mt-8 ">
            <img src={line} alt="" srcset="" />
          </div>
          <div className="rounded-full bg-blank w-12 h-12 mt-2  ">
            <img src={succes} alt="" srcset="" className=" object-cover" />
          </div>
        </div>
        <div className="title mt-12 font-sans grid justify-center text-center">
          <h1 className=" text-blue_dark font-semibold text-4xl">
            Yay! Completed
          </h1>
        </div>
        <div className="grid justify-center mt-8">
          <div className="image">
            <img src={success} alt="" srcset="" />
          </div>
          <div className="desc mt-5 font-sans font-light text-lg text-center text-gray_light">
            We will inform you via email later <br />
            once the transaction has been accepted
          </div>
        </div>
        <div className="btn-cta grid justify-center mt-10 mb-20">
          <Link to={"/"}>
            <button className=" items-center bg-blue w-72 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
