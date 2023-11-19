/* -------------------------------------------------------------------------- */
/*                               Modal Component                              */
/* -------------------------------------------------------------------------- */

// import PropTypes
import { PropTypes } from "prop-types";

// import useState - r
import { useState } from "react";

// import useEffect
import { useEffect } from "react";

// react icon
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

// import css
import "../../style/Modal.css";

function CloseAccount({ handleModalVisibility }) {
	// set button state whether it is active or not
	const [isActive, setIsActive] = useState(false);

	// handle form state
	const [formInputData, setFormInputData] = useState({
		emailData: "",
		uarData: "",
		reasonData: "",
		noteData: "",
		feeData: false,
	});

	// handle form data change
	const handleFormDataChange = (event) => {
		// handle email state
		if (event?.target?.name === "email") {
			setFormInputData({
				...formInputData,
				emailData: event?.target?.value,
			});

			// email validation
			if (
				formInputData?.emailData?.search(
					/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
				) === -1
			) {
				document
					.getElementsByClassName("error-message-data")[0]
					.classList.remove("hide"); // if string don't match
			} else
				document
					.getElementsByClassName("error-message-data")[0]
					.classList.add("hide"); // if string match
		}

		// handle uar state
		if (event?.target?.name === "uar") {
			setFormInputData({ ...formInputData, uarData: event?.target?.id });
		}

		// handle note state
		if (event?.target?.name === "note") {
			setFormInputData({
				...formInputData,
				noteData: event?.target?.value,
			});
		}

		// handle reason state
		if (event?.target?.className === "option") {
			// reset reason state
			if (event?.target?.innerText === "Reset reason") {
				setFormInputData({
					...formInputData,
					reasonData: "",
				});
			} else
				setFormInputData({
					...formInputData,
					reasonData: event?.target?.innerText,
				}); // set reason state if text is not reset reason

			// hide options field
			handleToggleOptions();
		}

		// handle fee state
		if (event?.target?.name === "fee") {
			setFormInputData({
				...formInputData,
				feeData: formInputData?.feeData === true ? false : true,
			});
		}
	};

	// handle toggle options
	// visible options field
	const handleToggleOptions = () => {
		document
			.getElementsByClassName("options-icon-field")[0]
			.classList.toggle("rotate-options");

		document
			.getElementsByClassName("select-options-data")[0]
			.classList.toggle("active");
	};

	// handle form submission
	const handleFormSubmit = (event) => {
		// prevent page loading
		// while submitting form
		event.preventDefault();

		// put form state in a local object
		const formData = { ...formInputData };

		// if any data is empty then don't log data just return
		if (
			formData?.emailData === "" ||
			formData?.uarData === "" ||
			formData?.reasonData === "" ||
			formData?.noteData === ""
		)
			return;

		// reset form state
		setFormInputData({
			emailData: "",
			uarData: "",
			reasonData: "",
			noteData: "",
			feeData: false,
		});

		// log form state data at console
		console.log(formData);
	};

	// add active functionality to close account button
	useEffect(() => {
		// if email, uar, reason, note data is present
		// then set of button to active
		if (
			formInputData?.emailData !== "" &&
			formInputData?.uarData !== "" &&
			formInputData?.reasonData !== "" &&
			formInputData?.noteData !== ""
		) {
			setIsActive(true);
		} else setIsActive(false); // if data is not present
	}, [
		formInputData.emailData,
		formInputData.uarData,
		formInputData.reasonData,
		formInputData.noteData,
	]);

	return (
		<>
			<section className="modal-background">
				<div className="modal-container">
					<div className="modal-title">
						<h3>Close account</h3>
						<div onClick={handleModalVisibility}>
							<RxCross2 />
						</div>
					</div>
					<div className="modal-body">
						<form noValidate onSubmit={handleFormSubmit}>
							<div className="email-container">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									value={formInputData?.emailData}
									onChange={handleFormDataChange}
									id="email"
									name="email"
								/>
								<p className="error-message error-message-data hide">
									Invalid email address!
								</p>
							</div>
							<div className="uar-container">
								<div className="uar-title">
									Want to file UAR
								</div>
								<div className="uar-content">
									<input
										type="radio"
										id="yes"
										name="uar"
										checked={
											formInputData?.uarData === "yes"
												? true
												: false
										}
										onChange={handleFormDataChange}
									/>
									<label htmlFor="yes">Yes</label>
								</div>
								<div className="uar-content">
									<input
										type="radio"
										id="no"
										name="uar"
										checked={
											formInputData?.uarData === "no"
												? true
												: false
										}
										onChange={handleFormDataChange}
									/>
									<label htmlFor="no">No</label>
								</div>
							</div>
							<div className="reason-container">
								<label htmlFor="reason">Reason</label>
								<div className="select-container">
									<div className="select-box">
										<input
											type="text"
											id="reason"
											name="reason"
											value={formInputData?.reasonData}
											readOnly
										/>
										<div
											className="trigger-icon options-icon-field"
											onClick={handleToggleOptions}
										>
											<FaChevronDown />
										</div>
									</div>
									<div className="select-options select-options-data">
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Reset reason
										</div>
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Flagging logics triggered
										</div>
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Random Reason 1
										</div>
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Random Reason 2
										</div>
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Random Reason 3
										</div>
										<div
											className="option"
											onClick={handleFormDataChange}
										>
											Random Reason 4
										</div>
									</div>
								</div>
							</div>
							<div className="note-container">
								<label htmlFor="note">Note</label>
								<textarea
									id="note"
									name="note"
									value={formInputData?.noteData}
									onChange={handleFormDataChange}
								></textarea>
							</div>
							<div className="modal-footer-container">
								<div className="fee-container">
									<input
										type="radio"
										id="fee"
										name="fee"
										checked={
											formInputData?.feeData === false
												? false
												: true
										}
										onChange={handleFormDataChange}
										onClick={handleFormDataChange}
									/>
									<label htmlFor="fee">
										Charge closure fee
									</label>
								</div>
								<div className="modal-button-container">
									<button
										className={`modal-button ${
											isActive ? "active" : null
										}`}
									>
										Close Account
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

CloseAccount.propTypes = {
	handleModalVisibility: PropTypes.func,
};

export default CloseAccount;
