import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";

class header extends Component {
  render() {
    return (
      <div className="border-b-2 border-blank">
        <div className="container mx-auto ">
          <div className=" my-5 ">
            <nav className="navbar ">
              <img src={logo} alt="" />

              <div className="list justify-end flex  ">
                <ul className=" mx-14 flex  gap-x-6 font-sans -mt-7 font-medium text-base invisible lg:visible  ">
                  <Link to="Details">
                    <li className="hover:text-blue text-blue">Home</li>
                  </Link>

                  <li className="hover:text-blue">Browse By</li>

                  <li className="hover:text-blue">Stories</li>

                  <li className="hover:text-blue">Agents</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
