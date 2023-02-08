import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Discussion.css";

const Discussion = () => {
	const discussion_topics = [
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
		{
			head: "Heading",
			subhead: "SubHeading",
			content: "Content",
			src: "https://placeimg.com/192/192/people",
		},
	];
	return (
		<>
			<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0">
				<div>
					<div className="flex justify-start items-center text-gray-500 text-sm font-semibold underline">
						<BsFillCaretLeftFill></BsFillCaretLeftFill>
						<Link to="/competition">Back to Code Tikki</Link>
					</div>
					<h2
						className=" font-semibold mb-3 text-gray-700"
						style={{ font: "31px/37px Pretzel" }}>
						Discussions
					</h2>
					<div className="flex lg:justify-center gap-2 mb-2 text-xs font-medium">
						<select
							name=""
							id=""
							className="shadow-md text-gray-500 select select-accent border-2">
							<option value="">Categories</option>
							<option value="">Categories 1</option>
							<option value="">Categories 2</option>
						</select>
						<select
							name=""
							id=""
							className="shadow-md text-gray-500 select select-accent border-2">
							<option value="">Latest</option>
							<option value="">Latest 1</option>
							<option value="">Latest 2</option>
						</select>
					</div>
				</div>
				<input
					type="text"
					placeholder="Search"
					className="px-3 py-2 w-full max-w-xs border rounded-md border-gray-300"
				/>
			</div>
			<div className="conatiner h-[1000px] mb-5 ">
				<div
					className="border-2 px-2 py-3 mx-3 mb-6 h-[150px]"
					style={{ boxShadow: "inset 0px 0px 10px 0px rgb(0 0 0 / 16%)" }}>
					<div className="flex flex-col justify-around items-center gap-4 p-6  mb-6  w-[95%] m-auto">
						<div className="rear_head">
							{/* {uppercase text-sm flex justify-between mb-2} */}
							<h2>topics</h2>
							<h2>views</h2>
						</div>
						<div className="flex flex-col gap-2 dicussion_holder">
							{discussion_topics.map((topic, index) => {
								return (
									<div
										key={index}
										className="flex justify-between items-center border-2 p-2">
										<div className="disc_topics self-start">
											<h3 style={{ fontSize: "20px" }}>{topic.head}</h3>
											<h4 style={{ fontSize: "18px" }}>{topic.subhead}</h4>
											<p style={{ fontSize: "15px" }}>{topic.content}</p>
										</div>
										<div className="avatar">
											<div className="rounded">
												<img src={topic.src} alt="" />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Discussion;
