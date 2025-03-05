import React from "react";
import { Link } from "react-router-dom";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import { FaStar } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="max-padd-container bg-hero bg-cover bg-no-repeat h-[722px] w-full">
      <div
        className="relative top-38 xs:top-54"
      >
        <h1 className="h1 capitalize max-w-[41rem]">
          Discover Your Dream Property Today
        </h1>
        <p className="my-5 max-w-[33rem] font-bold text-green-900 text-2xl">
          Your Dream Home 🏡 Awaits – Let’s Find It Together.
        </p>
        {/* BOTTON */}
        <br />
        <div className="inline-flex items-center justify-center gap-4 bg-white rounded ring-1 ring-slate-950/5 mt-4">
          <div className="text-center regular-14 leading-light pl-5 cursor-default">
            <p className="!regular-14 font-semibold ">
              <span className="uppercase font-bold">10% off</span> on All Properties
            </p>
          </div>
          <Link
            to={"/listing"}
            className="btn-dark !rounded-tl-none !rounded-bl-none !rounded-sm"
          >
            Explore Your Future Home
          </Link>
        </div>

        <div className="flex flex-col gap-4 max-w-64">
          {/* CLIENT IMAGE */}
          <br />
          <div className="flex relative mt-12">
            <img
              src={client1}
              alt="Client 1"
              className="h-[46px] border-2 border-white shadow-sm rounded-full"
            />
            <img
              src={client2}
              alt="Client 2"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-8"
            />
            <img
              src={client3}
              alt="Client 3"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-16"
            />
            <img
              src={client1}
              alt="Client 1"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-24"
            />
            <img
              src={client2}
              alt="Client 2"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-32"
            />
            <img
              src={client3}
              alt="Client 3"
              className="h-[46px] border-2 border-white shadow-sm rounded-full absolute left-40"
            />
            <div className="h-[46px] w-[64px] border-2 border-white shadow-sm bg-slate-500/70 text-white absolute left-48 rounded-full flexCenter text-xs font-semibold ">
              210k+
            </div>
          </div>
        </div>
        <br />
        <div className="h5 !font-semibold max-w-52">
          Bringing Dream Homes to Life. 🏡
        </div>
      </div>
      <div
        className="flex flex-col relative top-40 "
      >
        <div className="flex gap-2 text-yellow-500 text-xs">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div
        className="bold-14 sm:bold-16 relative top-42 font-bold"
      >
        127k{" "}
        <span className="regular-14 sm:regular-16 font-semibold">
          Excellent Reviews
        </span>
      </div>
    </section>
  );
};

export default Hero;
