import React from "react";
import featured from "../Assets/images/featured.png";
import featured_1 from "../Assets/images/featured-1.png";
import featured_2 from "../Assets/images/featured_2.png";
import featured_3 from "../Assets/images/featured_3.png";
import featured_4 from "../Assets/images/featured_4.png";
import event from "../Assets/images/event.png";
import house from "../Assets/images/House.png";
import house_1 from "../Assets/images/house-1.png";
import house_2 from "../Assets/images/house-3.png";
import house_3 from "../Assets/images/house-4.png";

export default function section() {
  return (
    <>
      <section className="most-picked">
        <div className="container mx-auto">
          <div className="text-blue_dark font-sans font-medium text-2xl mt-16 mb-5">
            <h1>Most Picked</h1>
          </div>
          <div className="grid lg:grid-cols-12 lg:grid-rows-2  gap-4">
            <div className="items  lg:col-span-4 relative row lg:row-span-2 ">
              <div className="box rounded-2xl w-full max-h-80 lg:max-h-full  lg:h-full  ">
                <img
                  src={featured}
                  alt=""
                  srcset=""
                  className=" object-cover  w-full lg:h-full max-h-80 lg:max-h-full  rounded-2xl overflow-hidden  "
                />
              </div>
              <div className="event absolute top-0 right-0">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-1 right-10 text-base font-light ">
                  <h1>
                    <a className=" font-normal">$50</a> per night
                  </h1>
                </div>
              </div>
              <div className="judul text-white font-sans absolute bottom-6 left-6">
                <h1 className=" font-medium text-xl">Blue Origin Fams</h1>
                <p className="font-light text-base">Jakarta Indonesia</p>
              </div>
            </div>
            <div className="items  lg:col-span-4 relative row-span-1 ">
              <div className="box rounded-2xl w-full h-full max-h-80 lg:max-h-full overflow-hidden ">
                <img
                  src={featured_1}
                  alt=""
                  srcset=""
                  className="  w-full lg:h-full object-cover max-h-80 lg:max-h-full "
                />
              </div>
              <div className="event absolute top-0 right-0">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-1 right-10 text-base font-light ">
                  <h1>
                    <a className=" font-normal">$22</a> per night
                  </h1>
                </div>
              </div>
              <div className="judul text-white font-sans absolute bottom-6 left-6">
                <h1 className=" font-medium text-xl">Ocean Land</h1>
                <p className="font-light text-base">Bandung Indonesia</p>
              </div>
            </div>
            <div className="items  lg:col-span-4 relative row-span-1">
              <div className="box  rounded-2xl  overflow-hidden max-h-80 lg:max-h-full  ">
                <img
                  src={featured_2}
                  alt=""
                  srcset=""
                  className="  w-full   object-cover max-h-80 lg:max-h-full  "
                />
              </div>
              <div className="event absolute top-0 right-0">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-1 right-10 text-base font-light ">
                  <h1>
                    <a className=" font-normal">$72</a> per night
                  </h1>
                </div>
              </div>
              <div className="judul text-white font-sans absolute bottom-6 left-6">
                <h1 className=" font-medium text-xl">Bobox</h1>
                <p className="font-light text-base">Medan Indonesia</p>
              </div>
            </div>
            <div className="items lg:col-span-4 relative row-span-1">
              <div className="box w-full h-full rounded-2xl overflow-hidden max-h-80 lg:max-h-full  ">
                <img
                  src={featured_3}
                  alt=""
                  srcset=""
                  className="  w-full h-full object-cover max-h-80 lg:max-h-full "
                />
              </div>
              <div className="event absolute top-0 right-0">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-1 right-10 text-base font-light ">
                  <h1>
                    <a className=" font-normal">$62</a> per night
                  </h1>
                </div>
              </div>
              <div className="judul text-white font-sans absolute bottom-6 left-6">
                <h1 className=" font-medium text-xl">Vinna Vill</h1>
                <p className="font-light text-base">Malang Indonesia</p>
              </div>
            </div>
            <div className="items  lg:col-span-4 relative row-span-1">
              <div className="box w-full h-full rounded-2xl  overflow-hidden max-h-80 lg:max-h-full ">
                <img
                  src={featured_4}
                  alt=""
                  srcset=""
                  className="  w-full h-full object-cover rounded-2xl max-h-80 lg:max-h-full "
                />
              </div>
              <div className="event absolute top-0 right-0">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-1 right-10 text-base font-light ">
                  <h1>
                    <a className=" font-normal">$856</a> per night
                  </h1>
                </div>
              </div>
              <div className="judul text-white font-sans absolute bottom-6 left-6">
                <h1 className=" font-medium text-xl">Stark House</h1>
                <p className="font-light text-base">Malang Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="House ">
        <div className="container mx-auto">
          <div className="text-blue_dark font-sans font-medium text-2xl mt-16 mb-5">
            <h1>Houses with beauty backyard</h1>
          </div>
          <div className="items relative lg:flex gap-x-4 gap-y-4 snap-x overflow-x-hidden overflow-x-scroll">
            <div className="items-house rounded-2xl overflow-hidden w-full  lg:max-h-full mb-8 lg:mb-0 relative   ">
              <img
                src={house}
                alt=""
                className=" w-full max-h-80 lg:max-h-full object-cover overflow-hidden rounded-2xl"
              />
              <div className="event absolute top-0 right-0 ">
                <img src={event} alt="" />
                <div className="text-white font-sansx absolute top-2 right-8 text-base font-light ">
                  <h1>Popular Choice</h1>
                </div>
              </div>
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Tabby Town
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Gunung Batu, Indonesia
                </div>
              </div>
            </div>
            <div className="items-house rounded-2xl overflow-hidden w-full mb-8 lg:mb-0   ">
              <img
                src={house_1}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Anggana
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Bogor, Indonesia
                </div>
              </div>
            </div>
            <div className="items-house rounded-2xl overflow-hidden w-full mb-8 lg:mb-0  ">
              <img
                src={house_2}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Seattle Rain
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
            <div className="items-house rounded-2xl overflow-hidden w-full mb-8 lg:mb-0 h-full  ">
              <img
                src={house_3}
                alt=""
                className="w-full max-h-80 lg:max-h-full object-cover rounded-2xl"
              />
              <div className="text mt-4 z-auto">
                <div className="text-blue_dark font-sans font-medium text-xl">
                  Wodden Pit
                </div>
                <div className="text-gray_light font-sans font-light  text-base">
                  Wonosobo, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
