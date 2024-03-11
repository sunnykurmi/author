import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-96 bg-[#111111]">
      <div className="footer-top flex h-[80%]">
        <div className="Edum w-[35%]  h-full px-40 pt-16  max-[600px]:px-0 max-[600px]:pt-2">
          <img
            src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2022/12/logo-edu-white.png"
            alt=""
            className="mb-3"
          />
          <div className="flex items-center gap-3">
            <i className="ri-smartphone-line text-yellow-500 text-2xl"></i>
            <h1 className="text-zinc-50">1234567890</h1>
          </div>
          <div className="flex items-center gap-3 mt-2 mb-2">
            <i className="ri-map-pin-fill text-yellow-500 text-2xl"></i>
            <h1 className="text-zinc-50">58 Howard Street #2 San Francisco</h1>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-mail-fill text-yellow-500 text-2xl"></i>
            <h1 className="text-zinc-50">contact@eduma.com</h1>
          </div>
          <div className="logos-container text-zinc-50 text-2xl flex gap-3 mt-2">
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-product-hunt-line"></i>
          </div>
        </div>
        <div className="companyLinks flex  justify-evenly w-[65%] pt-16">
          <div className="company max-[600px]:hidden text-zinc-50">
            <h1 className="text-2xl font-semibold mb-3">Company</h1>
            <p className="mt-5">About</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Contact</p>
            <p className="mt-2">Become a Teacher</p>
          </div>
          <div className="company max-[600px]:hidden text-zinc-50">
            <h1 className="text-2xl font-semibold mb-3">Company</h1>
            <p className="mt-5">About</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Contact</p>
            <p className="mt-2">Become a Teacher</p>
          </div>
          <div className="company max-[600px]:hidden text-zinc-50">
            <h1 className="text-2xl  font-semibold mb-3">Company</h1>
            <p className="mt-5">About</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Contact</p>
            <p className="mt-2">Become a Teacher</p>
          </div>
          <div className="company text-zinc-50">
            <h1 className="text-2xl font-semibold mb-3">Company</h1>
            <p className="mt-5">About</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Contact</p>
            <p className="mt-2">Become a Teacher</p>
          </div>
        </div>
      </div>
      <div className="footer-btm h-[20%] border-t-2 border-zinc-200 flex items-center justify-between text-zinc-50 px-32 py-5">
        <p>Premium LMS & Online Education WordPress Theme</p>
        <div className="flex gap-5">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Sitemap</a>
          <a href="">Purchase</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
