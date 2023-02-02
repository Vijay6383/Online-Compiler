import React from "react";
import loginImg from "../../../assets/login.png";
// import footerImg from "../../../assets/footer.png";
import fbImage from "../../../assets/fb.png";
import googleImg from "../../../assets/google.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { ImCross } from "react-icons/im";

const Login = () => {
	const accounts = JSON.parse(localStorage.getItem("Accounts"));
	const [alertMsg, setAlertMsg] = React.useState("");
	// const accounts = [
	// 	{
	// 		Email: "TestUser1@mail.com",
	// 		Password: "Testing12",
	// 	},
	// 	{
	// 		Email: "TestUser2@mail.com",
	// 		Password: "Testing123",
	// 	},
	// ];

	const [signinDetails, setSigninDetails] = React.useState({
		Email: "",
		Password: "",
	});
	const [ActiveAccount, setActiveAccount] = React.useState({});
	function handleSubmit(e) {
		e.preventDefault();
		authentiate();
	}
	function GenerateAlert(msg, sign) {
		setAlertMsg(msg);
		document.querySelector(".alert_box").style.visibility = "visible";
		document.querySelector(".alert_box").style.backgroundColor = sign;

		setTimeout(() => {
			document.querySelector(".alert_box").style.visibility = "hidden";
		}, 1500);
	}
	function authentiate() {
		if (ActiveAccount === undefined) {
			GenerateAlert("No Account found!", "red");
		} else {
			localStorage.setItem("Active Account", ActiveAccount);
			GenerateAlert("Login Successful!", "green");
			setTimeout(() => {
				window.location.href = "./profile";
			}, 2000);
		}
	}
	function handleChange(e) {
		const { name, value } = e.target;
		setSigninDetails((prev) => {
			return { ...prev, [name]: value };
		});
	}

	function handleClick() {
		setActiveAccount(
			accounts.find(
				(item) =>
					item.Username === signinDetails.Username &&
					item.Password === signinDetails.Password
			)
		);
	}
	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
			<div>
				<Link to="/" className="cross">
					<ImCross className="absolute top-8 right-8 text-orange-600"></ImCross>
				</Link>
				<div className="alert_box">{alertMsg}</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium text-warning">
							Welcome To Code Tikki!
						</h1>
						<p className="text-gray-500 font-semibold">
							Create your code tikki account
						</p>
					</div>
					<div className="form-control">
						<input
							type="email"
							placeholder="E-mail"
							name="Email"
							className="border-b-2 p-3 outline-none"
							autoComplete="off"
							onChange={handleChange}
							value={signinDetails.Email}
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="password"
							name="Password"
							className="border-b-2 p-3 outline-none"
							onChange={handleChange}
							value={signinDetails.Password}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center mt-4">
							<input
								type="checkbox"
								className="checkbox checkbox-warning p-3"
							/>
							<span className="pl-2 text-sm text-gray-500">Remember me?</span>
						</div>
						<Link
							to="/ForgetPassword"
							className="pl-2 text-sm text-gray-500 mt-3 underline">
							Forgot Password?
						</Link>
					</div>
					<div className="form-control mt-6">
						<button
							className="btn btn-warning text-white button_t"
							type="submit"
							onClick={handleClick}>
							Login
						</button>
					</div>
				</form>
				<p className="text-gray-500 py-3 text-center">
					--- or sign in with ---
				</p>
				<div className="flex item-center justify-center">
					<a href="https://www.facebook.com/login/">
						<img src={fbImage} alt="" className="w-14" />
					</a>
					<a href="https://www.google.com/">
						<img src={googleImg} alt="" className="w-9" />
					</a>
				</div>

				<p className="text-sm text-gray-500 my-2 text-center">
					Don't have an account?
					<Link
						to="/Signup"
						className="underline hover:cursor-pointer button_t pl-8">
						Signup
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

export default Login;
