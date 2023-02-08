import React from 'react';
import hero from "../../../assets/Hero.png";
import footerImg from "../../../assets/footer.png";
import topImg from "../../../assets/top.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Home.css";

const Home = () => {

	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,

				}
			}

		]
	};
	return (
		<>
			<div className="container relative">
				<img
					src={topImg}
					alt="top-curve-img"
					className="absolute right-0  z-0  lg:flex  custom-img-size"
				/>
				<div className="grid grid-cols-2 p-12 changing-flex">
					<div className="flex justify-center items-start flex-col gap-8 my-24 z-10 mx-24">
						<h1 className="text-start lg:text-xl text-black font-bold text-style !leading-none  ">
							LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
							INDUSTRY
						</h1>
						<p className="text-start width-changed">
							Code Tikki is the best platform to help you enhance your skills, expand
							your knowledge and prepare for technical interviews.
						</p>
						<Link to="">
							<button className="btn btn-outline btn-warning">Learn More</button>
						</Link>
					</div>
					<div>
						<img
							src={hero}
							className="z-10 absolute right-8 top-8 custom-img2-size position-changed"
							alt="hero"
						/>
					</div>
				</div>
				<img
					src={footerImg}
					alt=""
					className="absolute left-0 bottom-0  lg:flex custom-img-size"
				/>
			</div>


			{/* event */}

			<div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow' >

					<div className='flex  justify-around items-center p-6 my-14 bg-white h-[300px] w-[80%] mx-auto rectangle-box-shadow'>
						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>

								<div className="content-box max-w-[90%]  m-4 p-6 border-2 text-gray-600 h-fit" key={index}>
									<h2 className="font-bold border-b-2 pb-2 uppercase text-xl leading-none  w-24 text-style">
										<div>Event</div> 
										<div>Name</div>  
									</h2>
									<p className="font-semibold lg:text-base text-sm w-[200px] h-[100px] ">description</p>
									<p className="text-xs border-b-2 pt-2 font-semibold uppercase w-24 text-style">
										Read More
									</p>
								</div>
							)}


						</Slider>
					</div>
				</div>
			</div>


			{/* wining section */}
			<div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Recent Winners
					</h2>
					<div className='flex  justify-around items-center p-6 my-10 bg-white h-[300px] w-[80%] mx-auto rectangle-box-shadow'>

						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>
								<div className="!flex justify-between max-w-[90%]  m-4 p-6 max-[321px]:p-2 border-2 
								 text-gray-600 h-[250px]" key={index}>
									<div className='flex flex-col '>
										<h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24 text-style">
											Name
										</h2>
										<p className="font-semibold pt-2 lg:text-base text-sm">
											description
										</p>
									</div>
									<div className="avatar w-20  rounded-full h-fit overflow-hidden ">
										<img src="https://placeimg.com/192/192/people" alt="avatar" />
									</div>
								</div>
							)}
						</Slider>
					</div>
				</div>
			</div>


			{/* Sponsors */}

			<div className="conatiner h-[600px] max-[769px]:h-[350px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Sponsors
					</h2>
					<div className='flex flex-col lg:flex-row justify-around items-center content-center
					 container2 max-[426px]:!p-[20px]'>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card1 max-[426px]:!w-[90%] "></div>
						<div className="cursor-pointer transition duration-500 max-[769px]:hidden hover:scale-110 card1"></div>
						<div className="cursor-pointer transition duration-500 max-[769px]:hidden hover:scale-110 card1"></div>
					</div>
					<div className='flex items-center flex-col lg:flex-row justify-center p-16 max-[769px]:hidden content-center container3'>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card2"></div>
						<div className="cursor-pointer transition duration-500 hover:scale-110 card2"></div>
					</div>
				</div>
			</div>


			{/* volunteer */}

			<div className="conatiner h-[500px] mb-5 ">
				<div className='border-2 px-2 py-3 mx-3 mb-6 h-[200px] rectangle-box-shadow'>
					<h2 className="text-3xl font-semibold text-gray-700 
					uppercase mt-[25px] ml-[50px] text-style">
						Volunteer
					</h2>
					<div className='flex  justify-around items-center p-6 my-10 bg-white h-[350px] w-[80%] mx-auto rectangle-box-shadow'>


						<Slider {...settings}>
							{Array(6).fill(1).map((e, index) =>
								<div className="!flex flex-col items-center max-w-[90%]  h-fit" key={index}>
									<div className=" m-4 p-6 border-[1px] border-solid  border-[#707070]
								  w-[200px] h-[200px] max-[376px]:w-[150px] max-[376px]:h-[150px]">

									</div>
									<div className='text-center text-[13px] text-[#707070]'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</div>

								</div>
							)}
						</Slider>
					</div>
				</div>
			</div>

		</>
	);
};

export default Home;