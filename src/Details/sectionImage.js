import React from "react";
import detail1 from "../Assets/images/detail-1.png";
import detail2 from "../Assets/images/detail-2.png";
import detail3 from "../Assets/images/detail-3.png";

export default function sectionImage() {
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-rows-2 grid-cols-12 gap-7">
          <div className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden">
            <img src={detail1} alt="" className="w-full h-full" />
          </div>
          <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden">
            <img src={detail2} alt="" className="w-full h-full" />
          </div>
          <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden">
            <img src={detail3} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
