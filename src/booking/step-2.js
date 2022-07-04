import React from "react";
import line from "../Assets/images/line.png";
import { Link } from "react-router-dom";
import Apartment from "../Assets/images/apartemen.png";
import succes from "../Assets/images/succes.png";
import BCA from "../Assets/images/BCA.png";
import mandiri from "../Assets/images/mandiri.png";

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
            <div className="font-extralight font-sans text-gray_text text-2xl grid justify-center mt-2 ">
              <h1>2</h1>
            </div>
          </div>
        </div>
        <div className="title mt-12 font-sans grid justify-center text-center">
          <h1 className=" text-blue_dark font-semibold text-4xl">Payment</h1>
          <p className="font-light text-gray_light text-center text-lg">
            Kindly follow the instructions below
          </p>
        </div>
        <div className="grid grid-cols-2 gap-40 mt-20">
          <div className="bank">
            <div className="title text-blue_dark text-base font-normal">
              Transfer Pembayaran:
            </div>
            <div className="title text-blue_dark text-base font-normal mt-5">
              Tax: <a className="font-semibold">10%</a>
            </div>
            <div className="title text-blue_dark text-base font-normal mt-5">
              Sub total: <a className="font-semibold">$480 USD</a>
            </div>
            <div className="title text-blue_dark text-base font-normal mt-5">
              Total: <a className="font-semibold">$580 USD</a>
            </div>
            <div className="BCA flex mt-10 gap-4">
              <div className="image">
                <img src={BCA} alt="" srcset="" />
              </div>
              <div className="title text-blue_dark text-base font-sans font-normal mt-2">
                Bank Central Asia <br />
                2208 1996 <br />
                BuildWith Angga
              </div>
            </div>
            <div className="mandiri flex mt-10 gap-4">
              <div className="image">
                <img src={mandiri} alt="" srcset="" />
              </div>
              <div className="title text-blue_dark text-base font-sans font-normal mt-2">
                Bank Mandiri <br />
                2208 1996 <br />
                BuildWith Angga
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form  ">
              <label class="block">
                <span class=" font-sans font-normal text-blue_dark text-base">
                  Upload Bukti Transfer
                </span>
                <div className="class flex">
                  <input
                    type="file"
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
                  Asal Bank
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
                  Nama Pengirim
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
            </div>
          </div>
        </div>
        <div className="btn-cta grid justify-center mt-20 mb-20">
          <Link to={"/succes"}>
            <button className=" items-center bg-blue w-72 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
              Continue to Book
            </button>
          </Link>

          <button className=" items-center bg-gray_form w-72 h-12 rounded-md text-gray_text hover:shadow-xl shadow-lg mt-5">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
