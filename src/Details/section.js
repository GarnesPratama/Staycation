import React from "react";

export default function section() {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="breadcrumb flex text-lg mt-20">
          <ol className=" font-sans text-gray_light font-light">Home</ol>
          <ol className=" mx-10 text-gray_light">/</ol>
          <ol className=" font-sans text-blue_dark font-medium">
            House Detail
          </ol>
        </div>
        <div className="title grid justify-center -mt-10 font-sans">
          <h1 className="text-blue_dark font-semibold text-4xl ">
            Village Angga
          </h1>
          <p className="text-gray_light font-light text-lg text-center ">
            Bogor, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}
