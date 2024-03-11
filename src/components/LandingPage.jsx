import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LandingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-cover bg-[url('https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2022/12/bg-slide-2-new-1.jpg')]">
      <div className="w-full h-2/3 p-44">
        <h2 className="text-2xl text-zinc-50">The Best Theme For</h2>
        <h1 className="text-8xl text-zinc-50">EDUCATION</h1>
        <button className="bg-yellow-400 p-2 px-6 rounded font-semibold mt-3">BUY NOW</button>
      </div>

      <div className="w-full h-1/3 px-44 flex justify-between items-center">
        <div className="cards flex items-center gap-4 p-7 bg-zinc-600 w-80  h-36">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl leading-none font-semibold mb-2  text-zinc-50">
              BEST INDUSTRY LEADERS
            </h1>
            <p className="text-yellow-400">
              View more <i class="ri-arrow-right-line"></i>
            </p>
          </div>
        </div>
        <div className="cards flex items-center gap-4 p-5 bg-zinc-600 w-80 h-36">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2 leading-none text-zinc-50">
              BEST INDUSTRY LEADERS
            </h1>
            <p className="text-yellow-400">
              View more <i class="ri-arrow-right-line"></i>
            </p>
          </div>
        </div>
        <div className="cards flex items-center gap-4 p-5 bg-zinc-600 w-80 h-36">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl leading-none font-semibold mb-2  text-zinc-50">
              BEST INDUSTRY LEADERS
            </h1>
            <p className="text-yellow-400">
              View more <i class="ri-arrow-right-line"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
