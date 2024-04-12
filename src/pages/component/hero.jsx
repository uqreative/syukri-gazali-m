// export default function HeroBig (){
//     return (
//       <div className="w-full h-hero bg-slate-200">
//         <h1 className="text-5xl">Hero Main</h1>
//       </div>
//     );
// };

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./hero.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperHero() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide>
          <div className="bg-rose-500">
            <div className="px-16 ">
              <h2 className="text-3xl font-black">Slide 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                perferendis ullam sequi suscipit obcaecati doloribus recusandae
                error eveniet ipsam provident amet labore sunt itaque corporis,
                deleniti saepe dicta soluta laboriosam magnam unde vitae dolorem
                quasi hic aliquid. Beatae fuga maiores provident, alias
                reiciendis expedita? Quisquam, eius tempore? Quasi, aperiam
                deleniti.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
