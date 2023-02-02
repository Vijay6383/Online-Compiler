import React from "react";
import loginImg from "../../../assets/login.png";
// import footerImg from "../../../assets/footer.png";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "./Signup.css";
const Signup = () => {
	const getAccounts = () => {
		const data = localStorage.getItem("Accounts");
		if (data) {
			return JSON.parse(data);
		} else {
			return [];
		}
	};
	const [accounts, setAccounts] = React.useState(getAccounts);
	React.useEffect(() => {
		localStorage.setItem("Accounts", JSON.stringify(accounts));
	}, [accounts]);
	const [alertMsg, setAlertMsg] = React.useState("");
	const [newAcc, setnewAcc] = React.useState({
		Username: "",
		Password: "",
		Com_Password: "",
		Email: "",
		checked: false,
	});
	function handleSubmit(e) {
		e.preventDefault();
	}
	function handleClick() {
		/*
        Account Detection Meschanism needs validatior package to be imported 
		// if (!validator.isEmail(newAcc.Email)) {
		// 	alert("Incorrect Email Format !");
		// }
        */

		for (const key in newAcc) {
			if (newAcc[key] === "") {
				GenerateAlert("Please fill all the Requirements", "red");
				return;
			}
		}
		if (
			accounts.find(
				(item) =>
					item.Username === newAcc.Username || item.Email === newAcc.Email
			)
		) {
			GenerateAlert("Account already exist!", "red");
			return;
		} else if (newAcc.Password.length < 8) {
			GenerateAlert("Password Must be greater than 8 digits", "red");
			return;
		} else if (newAcc.Password !== newAcc.Com_Password) {
			GenerateAlert("Password Don't MatchUp", "red");
			return;
		} else if (!newAcc.checked) {
			GenerateAlert("Please Agree to terms and Conditions to Sign-UP", "green");
			return;
		} else {
			GenerateAlert("Account Created Successfully!!", "green");
			setAccounts((prev) => [...prev, newAcc]);
		}
	}
	function GenerateAlert(msg, sign) {
		setAlertMsg(msg);
		document.querySelector(".alert_box").style.visibility = "visible";
		document.querySelector(".alert_box").style.backgroundColor = sign;

		setTimeout(() => {
			document.querySelector(".alert_box").style.visibility = "hidden";
		}, 1500);
	}
	function handleChange(e) {
		const { name, value } = e.target;
		if (name === "checked") {
			setnewAcc((prev) => {
				return { ...prev, [name]: !prev.checked };
			});
		} else {
			setnewAcc((prev) => {
				return { ...prev, [name]: value };
			});
		}
	}
	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
			<div className="alert_box">{alertMsg}</div>
			<Link to="/" className="cross">
				<ImCross className="absolute top-8 lg:flex right-8 text-orange-600"></ImCross>
			</Link>
			<div>
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium text-warning ">
							Welcome To Code Tikki!
						</h1>
						<p className="text-gray-500 font-semibold">
							Create your code tikki account
						</p>
					</div>
					<div className="form-control">
						<input
							type="name"
							placeholder="User Name"
							className="border-b-2 p-3 outline-none"
							name="Username"
							onChange={handleChange}
							value={newAcc.Username}
							autoComplete="off"
						/>
					</div>
					<div className="form-control">
						<input
							type="email"
							placeholder="E-mail"
							name="Email"
							className="border-b-2 p-3 outline-none"
							onChange={handleChange}
							value={newAcc.Email}
							autoComplete="off"
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="password"
							name="Password"
							className="border-b-2 p-3 outline-none"
							onChange={handleChange}
							value={newAcc.Password}
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="Confirm password"
							name="Com_Password"
							className="border-b-2 p-3 outline-none"
							onChange={handleChange}
							value={newAcc.Com_Password}
						/>
					</div>
					<div className="flex items-center mt-4">
						<input
							type="checkbox"
							className="checkbox checkbox-warning p-3"
							name="checked"
							onChange={handleChange}
							checked={newAcc.checked}
						/>
						<span className="pl-2 text-sm text-gray-500">
							I agree to the terms and privacy policy
						</span>
					</div>
					<div className="form-control mt-6">
						<button
							className="button_t btn btn-warning text-white text-center"
							type="submit"
							onClick={handleClick}>
							Register
						</button>
					</div>
				</form>
				<p className="text-sm text-gray-500 my-2 text-center">
					Already have an account?
					<Link
						to="/login"
						className="underline hover:cursor-pointer button_t pl-8">
						Login
					</Link>
				</p>
			</div>
			<div className="text-center lg:text-left hero_img">
				<img className="w-full" src={loginImg} alt="" />
			</div>
		</div>
		/* <img
				src={footerImg}
				alt=""
				className="absolute bottom-0 hidden lg:flex"
			/> */
	);
};

export default Signup;
