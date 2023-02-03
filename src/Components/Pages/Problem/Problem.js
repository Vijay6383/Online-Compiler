import React from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

import { Link } from "react-router-dom";
import "./Problem.css";
const Problem = () => {
	// Sample array For testing
	const problems = [
		{
			id: "P_01",
			Name: "Problem 1",
			Level: "Beginner",
			Topic: ["Topic 1", "Topic 3"],
		},
		{
			id: "P_02",
			Name: "Problem 2",
			Level: "Advanced",
			Topic: ["Topic 3"],
		},
		{
			id: "P_03",
			Name: "Problem 3",
			Level: "Beginner",
			Topic: ["Topic 2"],
		},
	];
	// Sample array For testing
	const levels = ["Beginner", "Intermediate", "Advanced", "Masters"];
	// Sample array For testing
	const Topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"];
	const [Filter, setFilter] = React.useState({
		Level: "Beginner",
		Topics: "",
	});
	const [ProblemSet, setProblemSet] = React.useState(
		problems.filter((element) => {
			return element.Level === "Beginner";
		})
	);
	const [markerLocation, setLocation] = React.useState({ width: "106px" });

	React.useEffect(() => {
		updateListDOM();
	}, [Filter]);

	const onOptionChangeHandler = (event) => {
		const { value, name } = event.target;
		setFilter((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const updateListDOM = () => {
		if (Filter.Topics === "") {
			setProblemSet(
				problems.filter((element) => {
					return element.Level === Filter.Level;
				})
			);
		} else {
			setProblemSet(
				problems.filter((element) => {
					return (
						element.Level === Filter.Level &&
						element.Topic.includes(Filter.Topics)
					);
				})
			);
		}
	};

	const handleState = (e) => {
		const location = {
			left: `${e.target.offsetLeft}px`,
			width: `${e.target.offsetWidth}px`,
		};
		setLocation(location);
	};
	return (
		<>
			<div className="lg:px-24 pt-12 px-6 pb-6 lg:pb-0">
				<div className="flex justify-start items-center text-gray-500 text-sm font-semibold underline">
					<BsFillCaretLeftFill></BsFillCaretLeftFill>
					<Link to="/">Back to Code Tikki</Link>
				</div>
				<h2 className="text-3xl font-semibold mb-3 text-gray-700">Problems</h2>
				<div className="flex justify-start gap-2 mb-2 text-xs font-medium ">
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
			<div
				className="mx-6 mb-6"
				style={{
					boxShadow: "inset 0px 3px 6px #00000029, 0px 3px 6px #00000029",
				}}>
				<div className="flex flex-col lg:flex-row border-2 text-gray-600">
					{/* <div class="border-r-2 m-1 px-4 pt-4">
                        <input type="text" placeholder="Search" className="px-3 py-2 w-full border rounded-lg border-gray-300" />
                        <div className="flex gap-5 text-xs mb-4">
                            <p className='border-b-2'>Recommended</p>
                            <p>Custom</p>
                        </div>
                        <select name="" id="" className='w-full shadow-md text-gray-500 select select-accent '>
                            <option value="" >Levels</option>
                            <option value="" >Levels 1</option>
                            <option value="" >Levels 2</option>
                        </select>
                        <p className='border-b-2 lg:w-20 text-xs mb-4 mt-2'>About Levels</p>
                        <h4>Topics</h4>
                        <p className='text-xs mb-4'>Popular Topics</p>
                        <ul className='text-xs'>
                            <li><Link to=''>Topic 1</Link></li>
                            <li><Link to=''>Topic 2</Link></li>
                            <li><Link to=''>Topic 3</Link></li>
                            <li><Link to=''>Topic 4</Link></li>
                            <li><Link to=''>Topic 5</Link></li>
                        </ul>
                    </div> */}
					<div className="border-r-2 m-1 px-4 pt-4 filterSection">
						<div className="searchBox">
							<SlMagnifier className="magnifyGlass"></SlMagnifier>
							<input type="text" placeholder="SEARCH" className="search" />
						</div>
						<ul className="filter_mode">
							<div className="marker" style={markerLocation}></div>
							<li>
								<button
									className="button"
									id="recommended"
									onClick={handleState}>
									Recommended
								</button>
							</li>
							<li>
								<button className="button" onClick={handleState}>
									Custom
								</button>
							</li>
						</ul>
						<div className="level_selection">
							<select
								className="level_menu"
								name="Level"
								onChange={onOptionChangeHandler}>
								{levels.map((levels, index) => {
									return <option key={index}>{levels}</option>;
								})}
							</select>
							<Link to="/" className="link">
								About Levels
							</Link>
						</div>
						<div className="topics_selection">
							<h2>Topics</h2>
							<span>Popular Topics</span>
							<div onChange={onOptionChangeHandler} className="topics_list">
								{Topics.map((topics, index) => {
									return (
										<label key={index} className="topicbox">
											<input type="radio" value={topics} name="Topics" />
											{topics}
										</label>
									);
								})}
							</div>
						</div>
					</div>

					<div className="grow p-6 tableHolder">
						<div className="flex items-baseline mb-4">
							<p className="text-xl pr-2">Level : </p>
							<p className="level_dom">{Filter.Level}</p>
						</div>
						<div className="">
							<table className="table w-full">
								<thead>
									<tr>
										<th>Poblem Id</th>
										<th>Name</th>
										<th>Difficulty Level</th>
									</tr>
								</thead>
							</table>
							<div className="scrollit">
								<table className="table w-full ">
									<tbody>
										{ProblemSet.map((prob, index) => {
											return (
												<tr key={index}>
													<td>{prob.id}</td>
													<td>{prob.Name}</td>
													<td>{prob.Level}</td>
												</tr>
											);
										})}

										{/* <tr>
											<td>Completed</td>
											<td>P_02</td>
											<td>Problem2</td>
										</tr> */}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Problem;
