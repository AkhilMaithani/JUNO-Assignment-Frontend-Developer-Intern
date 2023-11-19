/* -------------------------------------------------------------------------- */
/*                               Home Component                               */
/* -------------------------------------------------------------------------- */

// import useEffect - react
import { useEffect } from "react";

// import useNavigate - rrd
import { useNavigate } from "react-router-dom";

// import useForm - rhf
import { useForm } from "react-hook-form";

// import toast - rt
import { toast } from "react-toastify";

// import icon
import { LuMonitorDot } from "react-icons/lu";

// import Home css
import "../../style/Home.css";

function Home() {
	// navigate function
	const navigate = useNavigate();

	// form object
	const form = useForm();
	// register method, handleSubmit method, formState object
	const { register, handleSubmit, formState } = form;
	// for validation
	const { errors } = formState;

	// get data on form submission
	const onSubmit = (data) => {
		console.log(data);
		localStorage.setItem("name", `${data.name}`);
		localStorage.setItem("email", `${data.email}`);

		toast.success("Data added successfully.");

		navigate("dashboard", { replace: true });
	};

	// useEffect - welcome message and instructions
	useEffect(() => {
		toast.info("Please enter your full name and email to proceed.", {
			position: toast.POSITION.BOTTOM_RIGHT,
			className: "toast-message",
		});
		toast.info(
			"This information will be stored in local storage. Once stored, it needs to be cleared manually.",
			{
				position: toast.POSITION.BOTTOM_RIGHT,
				className: "toast-message",
			}
		);
	}, []);

	return (
		<>
			<section className="main-outer-section">
				<div className="main-inner-section">
					<div className="main-hero-section">
						<h1>JUNO</h1>
						<h2>Monitoring Application</h2>
						<div className="hero-image">
							<LuMonitorDot />
						</div>
						<p>
							Frontend Developer Intern | Assignment | by Akhil
							Maithani
						</p>
					</div>
					{/* form container */}
					<div className="main-content-section">
						<form
							className="form-container"
							noValidate
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="form-item">
								<label htmlFor="name">Full name</label>
								<input
									type="text"
									id="name"
									placeholder="Tony Stark"
									{...register("name", {
										required: {
											value: true,
											message: "Full name is required!",
										},
									})}
								/>
								<p className="error-message">
									{errors?.name?.message}
								</p>
							</div>
							<div className="form-item">
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									id="email"
									placeholder="ironman@gmail.com"
									{...register("email", {
										required: {
											value: true,
											message:
												"Email address is required!",
										},
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Invalid email address!",
										},
									})}
								/>
								<p className="error-message">
									{errors?.email?.message}
								</p>
							</div>

							<button type="submit">
								Go Ahead&nbsp;&nbsp;<span>&rarr;</span>
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
