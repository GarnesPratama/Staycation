import React from "react";
import plus from "../Assets/images/btn_plus.png";
import minus from "../Assets/images/btn_minus.png";
import calendar from "../Assets/images/ic_calendar.png";
import { Link } from "react-router-dom";

export default function sectionDetail() {
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-2 gap-72 mb-28">
          <div className="description">
            <div className="titile text-blue_dark font-medium text-xl mb-2">
              About the place
            </div>
            <div className="desc font-light text-base text-gray_light mb-2">
              Minimal techno is a minimalist subgenre of techno music. It is{" "}
              <br />
              characterized by a stripped-down aesthetic that exploits the use{" "}
              <br />
              of repetition and understated development. Minimal techno is{" "}
              <br />
              thought to have been originally developed in the early 1990s by{" "}
              <br />
              Detroit-based producers Robert Hood and Daniel Bell.
            </div>
            <div className="desc font-light text-base text-gray_light mb-2">
              Such trends saw the demise of the soul-infused techno that <br />
              typified the original Detroit sound. Robert Hood has noted that he{" "}
              <br />
              and Daniel Bell both realized something was missing from techno in{" "}
              <br />
              the post-rave era.
            </div>
            <div className="desc font-light text-base text-gray_light">
              Design is a plan or specification for the construction of an{" "}
              <br />
              object or system or for the implementation of an activity or{" "}
              <br />
              process, or the result of that plan or specification in the form{" "}
              <br />
              of a prototype, product or process. The national agency for <br />
              design: enabling Singapore to use design for economic growth and{" "}
              <br />
              to make lives better.
            </div>
          </div>
          <div className="booking">
            <div className="cardd ">
              <div className="container mx-auto rounded-lg border-x border-y border-gray_light">
                <div className="card-desc mx-16  mt-16 mb-16 grid justify-center ">
                  <div className="title text-blue_dark font-medium text-xl font-sans mb-2">
                    Start <br />
                    Booking
                  </div>
                  <div className="price font-sans text-4xl font-extralight text-gray_light">
                    <a className="font-medium text-green">$280</a> per night
                  </div>
                  <div className="title text-blue_dark font-medium text-bas font-sans mb-3">
                    How long you will stay?
                  </div>
                  <div className="form mb-6">
                    <label className="flex">
                      <img src={minus} alt="" />
                      <input
                        type="text"
                        className="border-0 bg-gray_form placeholder:text-center placeholder:text-blue_dark"
                        placeholder="2 nights"
                      />
                      <img src={plus} alt="" />
                    </label>
                  </div>
                  <div className="title text-blue_dark font-medium text-bas font-sans mb-3">
                    Pick a Date
                  </div>
                  <div className="form mb-4">
                    <label className="flex">
                      <img src={calendar} alt="" />
                      <input
                        type="text"
                        className="border-0 bg-gray_form placeholder:text-center placeholder:text-blue_dark w-60 rounded-md"
                        placeholder="20 Jan - 22 Jan"
                      />
                    </label>
                  </div>
                  <div className="title text-gray_light font-light text-base font-sans mb-10">
                    You will pay{" "}
                    <a className="text-blue_dark font-medium">$480 USD</a> per{" "}
                    <a className="text-blue_dark font-medium">2 nights</a>
                  </div>
                  <Link to={"/book"}>
                    <button className=" items-center bg-blue w-72 h-12 rounded-md text-white hover:shadow-xl shadow-lg">
                      Continue to Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
