import React from "react";
import logo from "../Assets/images/logo.png";
export default function footer() {
  return (
    <div>
      <div className="footer border-t-2 border-blank">
        <div className="container mx-auto mt-12">
          <div className="lg:grid lg:grid-flow-row lg:grid-flow-col lg:auto-rows-max lg:auto-cols-max  justify-between mt-4">
            <div className="logo">
              <img src={logo} alt="" />
              <div className="text font-light text-base text-gray_light mt-2">
                We kaboom your beauty holiday <br /> instantly and memorable.
              </div>
            </div>
            <div className="list mt-4 lg:mt-0">
              <div className="header text-blue_dark font-medium text-lg  ">
                For Beginners
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                New Account
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Start Booking a Room
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Use Payments
              </div>
            </div>
            <div className="list mt-4 lg:mt-0">
              <div className="header text-blue_dark font-medium text-lg  ">
                Explore Us
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Our Carrers
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Privacy
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Terms & Conditions
              </div>
            </div>
            <div className="list mt-4 lg:mt-0">
              <div className="header text-blue_dark font-medium text-lg  ">
                Connect Us
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                support@staycation.id
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                021 - 2208 - 1996
              </div>
              <div className="text font-light text-base text-gray_light mt-2">
                Staycation, Kemang, Jakarta
              </div>
            </div>
          </div>
          <div className="justify-center text-gray_light mt-12 text-center mb-14">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </div>
  );
}
