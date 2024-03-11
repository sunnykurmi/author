import React from "react";
import "remixicon/fonts/remixicon.css";
import Nav from "./Navbar";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import { RiHeartFill, RiSearchLine, RiStarFill } from "@remixicon/react";
import Headroom from "react-headroom";

export default function Home() {
  return (
    <div className="w-full  bg-slate-100">
      <Headroom>
        <Nav />
      </Headroom>
      <LandingPage />
      <div className="text-4xl mt-10 font-semibold">Popular Books</div>
      <div className="w-full h-36 flex items-center justify-center ">
        <div className=" h-20  flex items-center justify-center w-[40vw]">
          <form className="w-[70%]" action="">
            <input
              className=" w-full h-12 border-2 pl-4 rounded-md border-orange-300  "
              type="text"
              name=""
              placeholder="Search in books, authors, categories..."
              id=""
            />
          </form>
          <div className="flex items-center justify-center text-white h-12 w-16 rounded-md p-2 bg-orange-400">
            <RiSearchLine
              size={15} // set custom `width` and `height`
              className="my-icon" // add custom class name
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between h-[90vh] ">
        <div className=" w-full  h-[50%] flex  justify-evenly ">
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  h-[50%] flex  justify-evenly ">
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-evenly h-[100%] p-8 shadow-lg ">
            <div className="w-[50%] h-full  ">
              <img
                className="wf-ull h-full object-cover"
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt=""
              />
            </div>
            <div className="w-[45%] h-full">
              <div className="flex justify-between pb-5 pt-2 flex-col h-full ">
                <div className="text-4xl">Soul</div>
                <div className="text-xl">Author Name</div>
                <div className="text-xl font-semibold  text-red-600">
                  Rs.500.00
                </div>
                <div className="w-full flex gap-2">
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                  <RiStarFill
                    size={15} // set custom `width` and `height`
                    className="my-icon  text-orange-300  " // add custom class name
                  />
                </div>
                <div className=" p-2  flex rounded-lg text-xl font-semibold text-white items-center justify-center bg-orange-300  ">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-5 z-10 mt-5 h-[100vh] ">
        <div className="w-full h-10 flex items-center justify-center text-3xl mt-12 font-semibold">
          Why Choose Us ?
        </div>
        <div className="text-lg w-full flex items-center justify-center text-gray-600">
          A choice that makes the difference.
        </div>
        <div className="w-full flex gap-10 items-center justify-center h-[70vh]">
          <div className="w-[27%] h-[70%] bg-white flex flex-col items-center justify-evenly text-center ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
              >
                <path
                  d="M25.721 37.0337C25.1828 36.7398 24.5092 36.938 24.2155 37.4758L20.7048 43.9057L16.4327 36.0808C16.2382 35.7246 15.8648 35.5029 15.4589 35.5029C15.0532 35.5029 14.6796 35.7246 14.4852 36.0807L8.00052 47.9578C7.99949 47.9597 7.99847 47.9614 7.99744 47.9633L6.00116 51.6196C5.70745 52.1575 5.9055 52.8314 6.44325 53.125C6.61214 53.2173 6.79422 53.2609 6.97396 53.2609C7.36668 53.2609 7.74725 53.0519 7.94866 52.6829L9.24447 50.3097L10.5325 51.5978C10.9658 52.0311 11.6682 52.0311 12.1015 51.5978L12.7963 50.903L14.6745 52.7812C14.8911 52.9979 15.175 53.1061 15.4589 53.1061C15.5385 53.1061 15.6177 53.0967 15.6958 53.0797L8.42005 66.4057C8.1265 66.9436 8.3244 67.6176 8.86214 67.9111C9.03104 68.0034 9.21312 68.0471 9.39285 68.0471C9.78558 68.0471 10.1661 67.838 10.3676 67.469L26.163 38.5388C26.4568 38.0014 26.2588 37.3274 25.721 37.0337ZM17.3373 48.5499L15.4591 50.4281L13.5808 48.5499C13.1475 48.1166 12.4451 48.1166 12.0118 48.5499L11.3171 49.2446L10.3528 48.2803L15.4591 38.9277L19.4408 46.221L18.3354 48.2458C17.9853 48.1772 17.6086 48.2786 17.3373 48.5499Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M5.0222 55.7272C4.48431 55.4335 3.81033 55.6316 3.51678 56.1693L0.135921 62.3615C-0.15778 62.8994 0.0402665 63.5734 0.578011 63.8669C0.746761 63.9592 0.928987 64.0029 1.10872 64.0029C1.50145 64.0029 1.88201 63.7938 2.08343 63.4248L5.46429 57.2327C5.75799 56.6949 5.55994 56.0209 5.0222 55.7272Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M74.8644 56.2966L67.0029 41.8979C67.0022 41.8966 67.0014 41.8953 67.0007 41.8938L64.7522 37.7755C64.4585 37.2376 63.7845 37.0396 63.2467 37.3334C62.7089 37.627 62.511 38.301 62.8045 38.8389L64.6479 42.215L63.6836 43.1793L62.9888 42.4846C62.5553 42.0513 61.8531 42.0513 61.4196 42.4846L59.5416 44.3628L57.6635 42.4846C57.23 42.0513 56.5278 42.0513 56.0944 42.4846L55.3996 43.1793L54.4348 42.2145L59.5414 32.8623L60.3159 34.2807C60.6094 34.8185 61.2833 35.0164 61.8213 34.7229C62.3592 34.4294 62.5571 33.7553 62.2635 33.2175L60.5154 30.0157C60.321 29.6594 59.9475 29.4378 59.5416 29.4378C59.1358 29.4378 58.7624 29.6594 58.5677 30.0155L52.6395 40.8721L38.6097 15.1753V11.3906H50.2221C50.6328 11.3906 51.0099 11.1639 51.2022 10.801C51.3947 10.4382 51.371 9.99888 51.1405 9.65889L48.4556 5.69531L51.1405 1.73174C51.371 1.39175 51.3947 0.952441 51.2022 0.5896C51.0097 0.226904 50.6327 0 50.2221 0H37.5004C36.8876 0 36.3909 0.496728 36.3909 1.10947V15.1753L26.6964 32.9314C26.4028 33.4693 26.6007 34.1433 27.1385 34.4369C27.6767 34.7309 28.3504 34.5327 28.6439 33.9948L31.2858 29.1561L32.5738 30.4441C33.0071 30.8774 33.7095 30.8774 34.1428 30.4441L34.8376 29.7494L36.7158 31.6276C36.9324 31.8442 37.2163 31.9525 37.5002 31.9525C37.7841 31.9525 38.0681 31.8441 38.2848 31.6276L40.1629 29.7494L40.8576 30.4441C41.2911 30.8774 41.9933 30.8774 42.4268 30.4441L43.7148 29.1561L64.6328 67.4692C64.8343 67.8382 65.2148 68.0473 65.6076 68.0473C65.7872 68.0473 65.9694 68.0035 66.1382 67.9113C66.6761 67.6178 66.874 66.9438 66.5804 66.4059L55.3606 45.8559C55.6574 45.8663 55.9575 45.7594 56.1841 45.5328L56.8789 44.838L58.757 46.7162C58.9736 46.9329 59.2577 47.0411 59.5416 47.0411C59.8255 47.0411 60.1095 46.9327 60.3261 46.7162L62.2042 44.838L62.899 45.5328C63.3324 45.9661 64.0347 45.9661 64.4681 45.5328L65.7562 44.2447L72.9168 57.3598C73.1183 57.7288 73.4987 57.9378 73.8916 57.9378C74.0712 57.9378 74.2534 57.894 74.4222 57.8019C74.9601 57.5084 75.158 56.8345 74.8644 56.2966ZM46.1971 6.31772L48.1304 9.17183H38.6097V2.21909H48.1304L46.1971 5.07319C45.9425 5.44893 45.9425 5.94185 46.1971 6.31772ZM41.6424 28.0907L40.9476 27.3959C40.5141 26.9626 39.8119 26.9626 39.3784 27.3959L37.5004 29.2742L35.6221 27.3959C35.1888 26.9626 34.4864 26.9626 34.0531 27.3959L33.3584 28.0907L32.3941 27.1264L37.5004 17.7738L42.6067 27.1264L41.6424 28.0907Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M44.1833 48.8165H46.9666C47.3968 48.8165 47.7882 48.5677 47.971 48.1782C48.1539 47.7887 48.0948 47.3288 47.8197 46.9979L38.3523 35.6074C38.1415 35.3538 37.8289 35.207 37.4992 35.207C37.1694 35.207 36.8567 35.3537 36.646 35.6074L27.1786 46.9979C26.9035 47.3288 26.8446 47.7887 27.0273 48.1782C27.21 48.5677 27.6015 48.8165 28.0317 48.8165H30.8151L23.1261 73.561C23.0215 73.8978 23.0832 74.2642 23.2922 74.5482C23.5013 74.8322 23.8329 74.9998 24.1856 74.9998H50.8127C51.1653 74.9998 51.4971 74.8322 51.7061 74.5482C51.9153 74.2643 51.9768 73.8978 51.8722 73.561L44.1833 48.8165ZM25.6921 72.7809L33.3811 48.0363C33.4856 47.6995 33.424 47.3332 33.2149 47.0491C33.0059 46.7651 32.6743 46.5975 32.3215 46.5975H30.3964L37.4992 38.0522L44.6018 46.5975H42.6767C42.3241 46.5975 41.9923 46.7651 41.7833 47.0491C41.5741 47.333 41.5125 47.6995 41.6171 48.0363L49.3061 72.7809H25.6921Z"
                  fill="#FFB606"
                ></path>
              </svg>
            </div>
            <div className=" font-semibold text-2xl   ">Highly Experienced</div>
            <div className=" font-semibold text-gray-600 w-[60%] flex items-center justify-center ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vero accusamus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde, iste?
            </div>
          </div>
          <div className="w-[27%] h-[70%] bg-white flex flex-col items-center justify-evenly text-center ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
              >
                <path
                  d="M25.721 37.0337C25.1828 36.7398 24.5092 36.938 24.2155 37.4758L20.7048 43.9057L16.4327 36.0808C16.2382 35.7246 15.8648 35.5029 15.4589 35.5029C15.0532 35.5029 14.6796 35.7246 14.4852 36.0807L8.00052 47.9578C7.99949 47.9597 7.99847 47.9614 7.99744 47.9633L6.00116 51.6196C5.70745 52.1575 5.9055 52.8314 6.44325 53.125C6.61214 53.2173 6.79422 53.2609 6.97396 53.2609C7.36668 53.2609 7.74725 53.0519 7.94866 52.6829L9.24447 50.3097L10.5325 51.5978C10.9658 52.0311 11.6682 52.0311 12.1015 51.5978L12.7963 50.903L14.6745 52.7812C14.8911 52.9979 15.175 53.1061 15.4589 53.1061C15.5385 53.1061 15.6177 53.0967 15.6958 53.0797L8.42005 66.4057C8.1265 66.9436 8.3244 67.6176 8.86214 67.9111C9.03104 68.0034 9.21312 68.0471 9.39285 68.0471C9.78558 68.0471 10.1661 67.838 10.3676 67.469L26.163 38.5388C26.4568 38.0014 26.2588 37.3274 25.721 37.0337ZM17.3373 48.5499L15.4591 50.4281L13.5808 48.5499C13.1475 48.1166 12.4451 48.1166 12.0118 48.5499L11.3171 49.2446L10.3528 48.2803L15.4591 38.9277L19.4408 46.221L18.3354 48.2458C17.9853 48.1772 17.6086 48.2786 17.3373 48.5499Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M5.0222 55.7272C4.48431 55.4335 3.81033 55.6316 3.51678 56.1693L0.135921 62.3615C-0.15778 62.8994 0.0402665 63.5734 0.578011 63.8669C0.746761 63.9592 0.928987 64.0029 1.10872 64.0029C1.50145 64.0029 1.88201 63.7938 2.08343 63.4248L5.46429 57.2327C5.75799 56.6949 5.55994 56.0209 5.0222 55.7272Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M74.8644 56.2966L67.0029 41.8979C67.0022 41.8966 67.0014 41.8953 67.0007 41.8938L64.7522 37.7755C64.4585 37.2376 63.7845 37.0396 63.2467 37.3334C62.7089 37.627 62.511 38.301 62.8045 38.8389L64.6479 42.215L63.6836 43.1793L62.9888 42.4846C62.5553 42.0513 61.8531 42.0513 61.4196 42.4846L59.5416 44.3628L57.6635 42.4846C57.23 42.0513 56.5278 42.0513 56.0944 42.4846L55.3996 43.1793L54.4348 42.2145L59.5414 32.8623L60.3159 34.2807C60.6094 34.8185 61.2833 35.0164 61.8213 34.7229C62.3592 34.4294 62.5571 33.7553 62.2635 33.2175L60.5154 30.0157C60.321 29.6594 59.9475 29.4378 59.5416 29.4378C59.1358 29.4378 58.7624 29.6594 58.5677 30.0155L52.6395 40.8721L38.6097 15.1753V11.3906H50.2221C50.6328 11.3906 51.0099 11.1639 51.2022 10.801C51.3947 10.4382 51.371 9.99888 51.1405 9.65889L48.4556 5.69531L51.1405 1.73174C51.371 1.39175 51.3947 0.952441 51.2022 0.5896C51.0097 0.226904 50.6327 0 50.2221 0H37.5004C36.8876 0 36.3909 0.496728 36.3909 1.10947V15.1753L26.6964 32.9314C26.4028 33.4693 26.6007 34.1433 27.1385 34.4369C27.6767 34.7309 28.3504 34.5327 28.6439 33.9948L31.2858 29.1561L32.5738 30.4441C33.0071 30.8774 33.7095 30.8774 34.1428 30.4441L34.8376 29.7494L36.7158 31.6276C36.9324 31.8442 37.2163 31.9525 37.5002 31.9525C37.7841 31.9525 38.0681 31.8441 38.2848 31.6276L40.1629 29.7494L40.8576 30.4441C41.2911 30.8774 41.9933 30.8774 42.4268 30.4441L43.7148 29.1561L64.6328 67.4692C64.8343 67.8382 65.2148 68.0473 65.6076 68.0473C65.7872 68.0473 65.9694 68.0035 66.1382 67.9113C66.6761 67.6178 66.874 66.9438 66.5804 66.4059L55.3606 45.8559C55.6574 45.8663 55.9575 45.7594 56.1841 45.5328L56.8789 44.838L58.757 46.7162C58.9736 46.9329 59.2577 47.0411 59.5416 47.0411C59.8255 47.0411 60.1095 46.9327 60.3261 46.7162L62.2042 44.838L62.899 45.5328C63.3324 45.9661 64.0347 45.9661 64.4681 45.5328L65.7562 44.2447L72.9168 57.3598C73.1183 57.7288 73.4987 57.9378 73.8916 57.9378C74.0712 57.9378 74.2534 57.894 74.4222 57.8019C74.9601 57.5084 75.158 56.8345 74.8644 56.2966ZM46.1971 6.31772L48.1304 9.17183H38.6097V2.21909H48.1304L46.1971 5.07319C45.9425 5.44893 45.9425 5.94185 46.1971 6.31772ZM41.6424 28.0907L40.9476 27.3959C40.5141 26.9626 39.8119 26.9626 39.3784 27.3959L37.5004 29.2742L35.6221 27.3959C35.1888 26.9626 34.4864 26.9626 34.0531 27.3959L33.3584 28.0907L32.3941 27.1264L37.5004 17.7738L42.6067 27.1264L41.6424 28.0907Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M44.1833 48.8165H46.9666C47.3968 48.8165 47.7882 48.5677 47.971 48.1782C48.1539 47.7887 48.0948 47.3288 47.8197 46.9979L38.3523 35.6074C38.1415 35.3538 37.8289 35.207 37.4992 35.207C37.1694 35.207 36.8567 35.3537 36.646 35.6074L27.1786 46.9979C26.9035 47.3288 26.8446 47.7887 27.0273 48.1782C27.21 48.5677 27.6015 48.8165 28.0317 48.8165H30.8151L23.1261 73.561C23.0215 73.8978 23.0832 74.2642 23.2922 74.5482C23.5013 74.8322 23.8329 74.9998 24.1856 74.9998H50.8127C51.1653 74.9998 51.4971 74.8322 51.7061 74.5482C51.9153 74.2643 51.9768 73.8978 51.8722 73.561L44.1833 48.8165ZM25.6921 72.7809L33.3811 48.0363C33.4856 47.6995 33.424 47.3332 33.2149 47.0491C33.0059 46.7651 32.6743 46.5975 32.3215 46.5975H30.3964L37.4992 38.0522L44.6018 46.5975H42.6767C42.3241 46.5975 41.9923 46.7651 41.7833 47.0491C41.5741 47.333 41.5125 47.6995 41.6171 48.0363L49.3061 72.7809H25.6921Z"
                  fill="#FFB606"
                ></path>
              </svg>
            </div>
            <div className=" font-semibold text-2xl   ">Highly Experienced</div>
            <div className=" font-semibold text-gray-600 w-[60%] flex items-center justify-center ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vero accusamus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde, iste?
            </div>
          </div>
          <div className="w-[27%] h-[70%] bg-white flex flex-col items-center justify-evenly text-center ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
              >
                <path
                  d="M25.721 37.0337C25.1828 36.7398 24.5092 36.938 24.2155 37.4758L20.7048 43.9057L16.4327 36.0808C16.2382 35.7246 15.8648 35.5029 15.4589 35.5029C15.0532 35.5029 14.6796 35.7246 14.4852 36.0807L8.00052 47.9578C7.99949 47.9597 7.99847 47.9614 7.99744 47.9633L6.00116 51.6196C5.70745 52.1575 5.9055 52.8314 6.44325 53.125C6.61214 53.2173 6.79422 53.2609 6.97396 53.2609C7.36668 53.2609 7.74725 53.0519 7.94866 52.6829L9.24447 50.3097L10.5325 51.5978C10.9658 52.0311 11.6682 52.0311 12.1015 51.5978L12.7963 50.903L14.6745 52.7812C14.8911 52.9979 15.175 53.1061 15.4589 53.1061C15.5385 53.1061 15.6177 53.0967 15.6958 53.0797L8.42005 66.4057C8.1265 66.9436 8.3244 67.6176 8.86214 67.9111C9.03104 68.0034 9.21312 68.0471 9.39285 68.0471C9.78558 68.0471 10.1661 67.838 10.3676 67.469L26.163 38.5388C26.4568 38.0014 26.2588 37.3274 25.721 37.0337ZM17.3373 48.5499L15.4591 50.4281L13.5808 48.5499C13.1475 48.1166 12.4451 48.1166 12.0118 48.5499L11.3171 49.2446L10.3528 48.2803L15.4591 38.9277L19.4408 46.221L18.3354 48.2458C17.9853 48.1772 17.6086 48.2786 17.3373 48.5499Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M5.0222 55.7272C4.48431 55.4335 3.81033 55.6316 3.51678 56.1693L0.135921 62.3615C-0.15778 62.8994 0.0402665 63.5734 0.578011 63.8669C0.746761 63.9592 0.928987 64.0029 1.10872 64.0029C1.50145 64.0029 1.88201 63.7938 2.08343 63.4248L5.46429 57.2327C5.75799 56.6949 5.55994 56.0209 5.0222 55.7272Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M74.8644 56.2966L67.0029 41.8979C67.0022 41.8966 67.0014 41.8953 67.0007 41.8938L64.7522 37.7755C64.4585 37.2376 63.7845 37.0396 63.2467 37.3334C62.7089 37.627 62.511 38.301 62.8045 38.8389L64.6479 42.215L63.6836 43.1793L62.9888 42.4846C62.5553 42.0513 61.8531 42.0513 61.4196 42.4846L59.5416 44.3628L57.6635 42.4846C57.23 42.0513 56.5278 42.0513 56.0944 42.4846L55.3996 43.1793L54.4348 42.2145L59.5414 32.8623L60.3159 34.2807C60.6094 34.8185 61.2833 35.0164 61.8213 34.7229C62.3592 34.4294 62.5571 33.7553 62.2635 33.2175L60.5154 30.0157C60.321 29.6594 59.9475 29.4378 59.5416 29.4378C59.1358 29.4378 58.7624 29.6594 58.5677 30.0155L52.6395 40.8721L38.6097 15.1753V11.3906H50.2221C50.6328 11.3906 51.0099 11.1639 51.2022 10.801C51.3947 10.4382 51.371 9.99888 51.1405 9.65889L48.4556 5.69531L51.1405 1.73174C51.371 1.39175 51.3947 0.952441 51.2022 0.5896C51.0097 0.226904 50.6327 0 50.2221 0H37.5004C36.8876 0 36.3909 0.496728 36.3909 1.10947V15.1753L26.6964 32.9314C26.4028 33.4693 26.6007 34.1433 27.1385 34.4369C27.6767 34.7309 28.3504 34.5327 28.6439 33.9948L31.2858 29.1561L32.5738 30.4441C33.0071 30.8774 33.7095 30.8774 34.1428 30.4441L34.8376 29.7494L36.7158 31.6276C36.9324 31.8442 37.2163 31.9525 37.5002 31.9525C37.7841 31.9525 38.0681 31.8441 38.2848 31.6276L40.1629 29.7494L40.8576 30.4441C41.2911 30.8774 41.9933 30.8774 42.4268 30.4441L43.7148 29.1561L64.6328 67.4692C64.8343 67.8382 65.2148 68.0473 65.6076 68.0473C65.7872 68.0473 65.9694 68.0035 66.1382 67.9113C66.6761 67.6178 66.874 66.9438 66.5804 66.4059L55.3606 45.8559C55.6574 45.8663 55.9575 45.7594 56.1841 45.5328L56.8789 44.838L58.757 46.7162C58.9736 46.9329 59.2577 47.0411 59.5416 47.0411C59.8255 47.0411 60.1095 46.9327 60.3261 46.7162L62.2042 44.838L62.899 45.5328C63.3324 45.9661 64.0347 45.9661 64.4681 45.5328L65.7562 44.2447L72.9168 57.3598C73.1183 57.7288 73.4987 57.9378 73.8916 57.9378C74.0712 57.9378 74.2534 57.894 74.4222 57.8019C74.9601 57.5084 75.158 56.8345 74.8644 56.2966ZM46.1971 6.31772L48.1304 9.17183H38.6097V2.21909H48.1304L46.1971 5.07319C45.9425 5.44893 45.9425 5.94185 46.1971 6.31772ZM41.6424 28.0907L40.9476 27.3959C40.5141 26.9626 39.8119 26.9626 39.3784 27.3959L37.5004 29.2742L35.6221 27.3959C35.1888 26.9626 34.4864 26.9626 34.0531 27.3959L33.3584 28.0907L32.3941 27.1264L37.5004 17.7738L42.6067 27.1264L41.6424 28.0907Z"
                  fill="#FFB606"
                ></path>
                <path
                  d="M44.1833 48.8165H46.9666C47.3968 48.8165 47.7882 48.5677 47.971 48.1782C48.1539 47.7887 48.0948 47.3288 47.8197 46.9979L38.3523 35.6074C38.1415 35.3538 37.8289 35.207 37.4992 35.207C37.1694 35.207 36.8567 35.3537 36.646 35.6074L27.1786 46.9979C26.9035 47.3288 26.8446 47.7887 27.0273 48.1782C27.21 48.5677 27.6015 48.8165 28.0317 48.8165H30.8151L23.1261 73.561C23.0215 73.8978 23.0832 74.2642 23.2922 74.5482C23.5013 74.8322 23.8329 74.9998 24.1856 74.9998H50.8127C51.1653 74.9998 51.4971 74.8322 51.7061 74.5482C51.9153 74.2643 51.9768 73.8978 51.8722 73.561L44.1833 48.8165ZM25.6921 72.7809L33.3811 48.0363C33.4856 47.6995 33.424 47.3332 33.2149 47.0491C33.0059 46.7651 32.6743 46.5975 32.3215 46.5975H30.3964L37.4992 38.0522L44.6018 46.5975H42.6767C42.3241 46.5975 41.9923 46.7651 41.7833 47.0491C41.5741 47.333 41.5125 47.6995 41.6171 48.0363L49.3061 72.7809H25.6921Z"
                  fill="#FFB606"
                ></path>
              </svg>
            </div>
            <div className=" font-semibold text-2xl   ">Highly Experienced</div>
            <div className=" font-semibold text-gray-600 w-[60%] flex items-center justify-center ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vero accusamus Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde, iste?
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" w-28 rounded-lg items-center justify-center flex h-10 bg-orange-300 ">
            Learn More
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}