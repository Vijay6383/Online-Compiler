import React, { useState } from "react";
import hero from "../../../assets/Hero.png";
import footerImg from "../../../assets/footer.png";
import topImg from "../../../assets/top.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Home.css";

const Home = () => {
  const [index, setIndex] = useState(0);

  const items = [
    {
      heading: "Item 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 5",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 6",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 7",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 8",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 9",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 10",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 11",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
    {
      heading: "Item 12",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia.",
    },
  ];

  const handleNext = () => {
    setIndex(index + 3);
  };

  const handlePrev = () => {
    setIndex(index - 3);
  };

  var settings = {
    // dots: true,
    infinite: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <div className="relative min-h-screen">
				<img src={topImg} alt="" className="absolute right-0 hidden lg:flex" />
				<div className="flex flex-col lg:flex-row-reverse justify-between items-stretch text-gray-700 lg:mx-40 lg:mt-0 mt-12">
					<img src={hero} className="lg:w-1/3 rounded-lg lg:pt-40" alt="" />
					<div className="text-center p-6 lg:pt-12">
						<h1 className="lg:text-3xl font-bold text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</h1>
						<p className="pt-6 pb-12">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi. Lorem ipsum dolor sit amet.
						</p>
						<Link to="">
							<button className="btn btn-outline btn-warning">
								Learn More
							</button>
						</Link>
					</div>
				</div>
				<img
					src={footerImg}
					alt=""
					className="absolute left-0 bottom-14 hidden lg:flex"
				/>
			</div> */}

      <div className="container relative">
        <img
          src={topImg}
          alt="top-curve-img"
          className="absolute right-0  z-0  lg:flex  custom-img-size"
        />
        <div className="grid grid-cols-2 p-12 changing-flex">
          <div className="flex justify-center items-start flex-col gap-8 my-24 z-10 mx-24">
            <h1 className="text-start lg:text-xl text-black font-bold text-style">
              LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
              INDUSTRY
            </h1>
            <p className="text-start width-changed">
              Code Tikki is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <Link to="">
              <button className="btn btn-outline btn-warning">
                Learn More
              </button>
            </Link>
          </div>
          <div>
            <img
              src={hero}
              className="z-10 absolute right-8 top-8 custom-img2-size position-changed"
              alt="image"
            />
          </div>
        </div>
        <img
          src={footerImg}
          alt=""
          className="absolute left-0 bottom-0  lg:flex custom-img-size"
        />
      </div>

      {/* start */}
      <div className=" relative border-2 p-6 mx-6 mb-6">
        <h2 className="text-3xl  font-semibold text-gray-700 uppercase">
          Crystal Events
        </h2>

        <Slider {...settings}>
          <div className="p-6 m-2 border-2  text-gray-600 ">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6  m-2 border-2 text-gray-600 ">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 m-2 border-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
          <div className="p-6 border-2 m-2 text-gray-600">
            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
              Event <br /> Name
            </h2>
            <p className="font-semibold lg:text-base text-sm">description</p>
            <p className="text-xs border-b-2 pt-10 font-semibold lg:w-24">
              Read More
            </p>
          </div>
        </Slider>

        <div className=" absolute flex justify-between transform -translate-y-1/2 left-4 right-4  top-[162px] ">
          <div className=" absolute flex justify-between transform -translate-y-1/2 left-4 right-4  top-[126px] ">
            <a href={`#slide`} className="-ml-3">
              ❮
            </a>
            <a href={`#slide`} className="-mr-3">
              ❯
            </a>
          </div>
        </div>
        {/* end */}

        {/* wining section */}
        <div className="border-2 p-6 mx-6 mb-6 relative">
          <h2 className="text-3xl font-semibold text-gray-700 uppercase">
            Recent Winners
          </h2>

          <Slider {...settings}>
            <div className="  border-2 ">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  border-2">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  border-2">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  border-2">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  border-2">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  border-2">
              <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">
                    Name
                  </h2>
                  <p className="font-semibold pt-2 lg:text-base text-sm">
                    description
                  </p>
                </div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className=" absolute flex justify-between transform -translate-y-1/2 left-4 right-4  top-[162px] ">
            <a href={`#slide`} className="-ml-3">
              ❮
            </a>
            <a href={`#slide`} className="-mr-3">
              ❯
            </a>
          </div>
        </div>
        <div className="border-2 p-6 mx-6 mb-6">
          <h2 className="text-3xl font-semibold text-gray-700 uppercase">
            Sponsors
          </h2>
          <div className="flex flex-col lg:flex-row justify-around items-center gap-12 p-6 m-6">
            <div className="w-full border-2 py-12"></div>
            <div className="w-full border-2 py-12"></div>
            <div className="w-full border-2 py-12"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 p-6 m-6">
            <div className="w-full lg:w-96 border-2 py-12"></div>
            <div className="w-full lg:w-96 border-2 py-12"></div>
          </div>
        </div>
        <div className="border-2 p-6 mx-6 mb-6">
          <h2 className="text-3xl font-semibold text-gray-700 uppercase">
            Volunteer
          </h2>
          <div className="flex flex-col lg:flex-row justify-around items-center gap-4 border-2 py-6 px-12 m-6">
            {index > 0 && (
              <button
                className="mr-3 text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline"
                onClick={handlePrev}
              >
                &lt;
              </button>
            )}
            <div>
              <div className="w-full border-2">
                <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
              </div>
              <p className="text-sm text-gray-500 lg:px-8 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto eius expedita eaque ut officia{" "}
              </p>
            </div>
            <div>
              <div className="w-full border-2">
                <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
              </div>
              <p className="text-sm text-gray-500 lg:px-8 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto eius expedita eaque ut officia{" "}
              </p>
            </div>
            <div>
              <div className="w-full border-2">
                <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
              </div>
              <p className="text-sm text-gray-500 lg:px-8 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto eius expedita eaque ut officia{" "}
              </p>
            </div>
            {index + 3 < items.length && (
              <button
                className="ml-3 text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline"
                onClick={handleNext}
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
