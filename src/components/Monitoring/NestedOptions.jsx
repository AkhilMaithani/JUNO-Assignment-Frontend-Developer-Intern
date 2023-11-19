/* -------------------------------------------------------------------------- */
/*                          Nested Options Component                          */
/* -------------------------------------------------------------------------- */

// import PropTypes
import { PropTypes } from "prop-types";

// import icons - ri
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

// import css
import "../../style/NestedOptions.css";

function NestedOptions({
	searchData,
	triggerData,
	riskData,
	setSearchData,
	setTriggerData,
	setRiskData,
}) {
	// it will toggle the active class on the trigger and risk selectors
	// it will show the options field in order to select data
	const handleToggleClick = (action) => {
		if (action === "trigger") {
			document
				.getElementsByClassName("select-options-trigger")[0]
				.classList.toggle("active");

			document
				.getElementsByClassName("trigger-icon")[0]
				.classList.toggle("active");
		} else if (action === "risk") {
			document
				.getElementsByClassName("select-options-risk")[0]
				.classList.toggle("active");

			document
				.getElementsByClassName("risk-icon")[0]
				.classList.toggle("active");
		}
	};

	// it will handle the risk data state
	// it will set risk level data
	const handleRiskData = (event) => {
		setRiskData(event?.target?.innerText);
		handleToggleClick("risk");
	};

	// it will handle the trigger data state
	// it will set trigger reason data
	const handleTriggerData = (event) => {
		setTriggerData(event?.target?.innerText);
		handleToggleClick("trigger");
	};

	// it will handle the search data state
	// it will set search data
	const handleSearchData = (event) => {
		setSearchData(event?.target?.value);
	};

	// it will reset the trigger reason state
	const handleResetTrigger = () => {
		setTriggerData("");
		handleToggleClick("trigger");
	};

	// it will reset the risk state
	const handleResetRisk = () => {
		setRiskData("");
		handleToggleClick("risk");
	};

	return (
		<>
			<div className="navigation-option-container">
				<div className="inner-navigation-option-container">
					{/* search container */}
					<div className="search-container">
						<div className="search-icon">
							<IoIosSearch />
						</div>
						<input
							type="search"
							placeholder="Search"
							name="search"
							value={searchData}
							onChange={handleSearchData}
						/>
					</div>
					{/* select option container - trigger reason */}
					<div className="select-container">
						<div className="select-box">
							<input
								type="text"
								placeholder="Trigger reason"
								value={triggerData}
								name="triggerLevel"
								readOnly
							/>
							<div
								className="trigger-icon trigger-icon-1"
								onClick={() => handleToggleClick("trigger")}
							>
								<FaChevronDown />
							</div>
						</div>
						<div className="select-options select-options-trigger">
							<div
								className="option"
								onClick={handleResetTrigger}
							>
								Reset trigger reason
							</div>
							<div className="option" onClick={handleTriggerData}>
								Hard flag
							</div>
							<div className="option" onClick={handleTriggerData}>
								Temp flag
							</div>
							<div className="option" onClick={handleTriggerData}>
								Restricted flag
							</div>
							<div className="option" onClick={handleTriggerData}>
								Un flag
							</div>
							<div className="option" onClick={handleTriggerData}>
								Reviewed
							</div>
							<div className="option" onClick={handleTriggerData}>
								IP change
							</div>
							<div className="option" onClick={handleTriggerData}>
								FIFO
							</div>
							<div className="option" onClick={handleTriggerData}>
								Flagged
							</div>
							<div className="option" onClick={handleTriggerData}>
								Closed
							</div>
							<div className="option" onClick={handleTriggerData}>
								Cleared
							</div>
							<div className="option" onClick={handleTriggerData}>
								SOI requested
							</div>
						</div>
					</div>
					{/* select option container - trigger reason */}
					<div className="select-container">
						<div className="select-box">
							<input
								type="text"
								placeholder="Risk level"
								name="riskLevel"
								value={riskData}
								readOnly
							/>
							<div
								className="risk-icon risk-icon-1"
								onClick={() => handleToggleClick("risk")}
							>
								<FaChevronDown />
							</div>
						</div>
						<div className="select-options select-options-risk">
							<div className="option" onClick={handleResetRisk}>
								Reset risk level
							</div>
							<div className="option" onClick={handleRiskData}>
								Low
							</div>
							<div className="option" onClick={handleRiskData}>
								Medium
							</div>
							<div className="option" onClick={handleRiskData}>
								High
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

NestedOptions.propTypes = {
	searchData: PropTypes.string,
	triggerData: PropTypes.string,
	riskData: PropTypes.string,
	setSearchData: PropTypes.func,
	setTriggerData: PropTypes.func,
	setRiskData: PropTypes.func,
};

export default NestedOptions;
