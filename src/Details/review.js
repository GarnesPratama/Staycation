import React from "react";
import images from "../Assets/images/review.png";
import star from "../Assets/images/Star .png";
import rectangle from "../Assets/images/frame.png";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <div className="review mt-24 mb-28 overflow-x-scroll lg:overflow-visible ">
        <div className="container mx-auto   ">
          <div className="grid grid-flow-col auto-cols-max grid-flow-row auto-rows-max">
            <div className="images ">
              <img src={rectangle} alt="" srcset="" className=" " />
              <img src={images} alt="" srcset="" className=" -mt-96 ml-10" />
            </div>
            <div className="description ml-24 mt-24">
              <div className="judul font-normal text-blue_dark text-2xl mb-10">
                Happy Family
              </div>
              <div className="star flex gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="desc font-sans text-blue_dark font-normal text-2xl lg:text-3xl mt-2 ">
                <h1 className=" tracking-tighter">
                  As a wife I can pick a great trip with <br />
                  my own lovely family... thank you!
                </h1>
              </div>
              <div className="person font-light text-gray_light font-light text-lg mt-2 mb-12">
                <h1>Anggi, Product Designer</h1>
              </div>
              <div className="btn-cta my-8 text-left ">
                <button className=" items-center bg-blue w-52 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
                  Read Their Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
