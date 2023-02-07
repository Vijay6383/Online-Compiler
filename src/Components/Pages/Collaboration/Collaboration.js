import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Collaboration = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-4 p-6 mx-6 mb-6">
        <div className="w-full border-2 rounded-lg rounded-t-none">
          <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
            Business Partnership
          </h2>
          <h3 className="p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide">
            Content
          </h3>
          <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
            <Link className="text-gray-500 shadow-md border-2 px-2 py-1">
              Read More
            </Link>
            <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg rounded-t-none">
          <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
            Business Partnership
          </h2>
          <h3 className="p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide">
            Content
          </h3>
          <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
            <Link className="text-gray-500 shadow-md border-2 px-2 py-1">
              Read More
            </Link>
            <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg rounded-t-none">
          <h2 className="bg-orange-400 p-3 text-white font-bold text-center">
            Business Partnership
          </h2>
          <h3 className="p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide">
            Content
          </h3>
          <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
            <Link className="text-gray-500 shadow-md border-2 px-2 py-1 rounded-xl">
              Read More
            </Link>
            <Link className="bg-orange-400 shadow-md text-white px-2 py-1">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-700 mb-6">
        <h3 className="uppercase text-xl">get in touch with us</h3>
        <h3 className="text-sm mb-4">Tagline</h3>
        <Link className="bg-orange-400 text-white px-2 py-1">Contact Us</Link>
      </div>
    </>
  );
};

export default Collaboration;
