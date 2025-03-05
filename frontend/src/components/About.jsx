import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import { FaLifeRing, FaList, FaScreenpal, FaUpDown } from "react-icons/fa6";
import {
  FaEnvelope,
  FaInbox,
  FaMap,
  FaMapMarkedAlt,
  FaUser,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      className="max-padd-container px-16 xl:px-28 "
    >
      <div
        className="flex items-center flex-col lg:flex-row gap-12"
      >
        {/* IMAGE LEFT SIDE */}
        <div className="flex-1" >
          <div className="relative">
            <img src={about1} alt="about1" className="rounded-3xl" />
            <span className="absolute top-8 left-8 bg-white font-semibold !px-2 rounded-full medium-14">
              San Francisco
            </span>
          </div>
        </div>
        {/* INFO RIGHT SIDE */}
        <div className="flex-1">
          <h2 className="h2">
            Empowering You to Find Your Dream Home 🏡, Effortlessly
          </h2>
          <p className="font-bold !mt-5 text-gray-600">
            Your dream home is just a decision away—explore, connect, and make
            it yours with confidence.
          </p>
          <div className="flex flex-col gap-6 !mt-5 font-bold ">
            <div className="flex gap-3">
              <FaScreenpal className="text-lime-500" />
              <p className="text-gray-600">Virtual property tours and viewings</p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-lime-500" />
              <p className="text-gray-600">Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaMap className="text-lime-500" />
              <p className="text-gray-600">Interactive floor plans and maps</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-lime-500" />
              <p className="text-gray-600">Access to off-market properties</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="text-lime-500" />
              <p className="text-gray-600">Direct messaging with agents and owners</p>
            </div>
          </div>
        </div>
      </div>

      {/* About2 */}
      <div className="flex items-center flex-col lg:flex-row gap-12 !mt-30">
        {/* INFO LEFT SIDE */}
        <div className="flex-1">
          <h2 className="h2">
            Simplifying Your Real Estate Journey Every Step of the Way
          </h2>
          <p className="!mt-5 font-bold text-gray-600" >
            Turning your home search into a seamless journey—where every step is
            simple, smart, and stress-free.
          </p>
          <div className="flex flex-col gap-6 !mt-5 font-bold">
            <div className="flex gap-3">
              <FaList className="text-lime-500" />
              <p className="text-gray-600">In-app scheduling for property viewings</p>
            </div>
            <div className="flex gap-3">
              <FaUpDown className="text-lime-500" />
              <p className="text-gray-600">Real-time market price updates</p>
            </div>
            <div className="flex gap-3">
              <FaInbox className="text-lime-500" />
              <p className="text-gray-600">User-friendly interface for smooth navigation</p>
            </div>
            <div className="flex gap-3">
              <FaUser className="text-lime-500" />
              <p className="text-gray-600">Detailed agent and realtor profiles</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkedAlt className="text-lime-500" />
              <p className="text-gray-600">Access to off-market properties</p>
            </div>
          </div>
        </div>
        {/* IMAGE RIGHT SIDE */}
        <div className="flex-1">
          <div
            className="relative flex justify-end"
          >
            <img src={about2} alt="about1" className="rounded-3xl" />
            <span className="absolute top-8 right-8 bg-white font-semibold !px-2 rounded-full medium-14">
              Golden Coast
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
