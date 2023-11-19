/* -------------------------------------------------------------------------- */
/*                           Nested Navbar Component                          */
/* -------------------------------------------------------------------------- */

// import useState
import { useState } from "react";

// import NavLink
import { NavLink } from "react-router-dom";

// import componenstś
import CloseAccount from "./CloseAccount";

// import css
import "../../style/NestedNavbar.css";

function NestedNavbar() {
	// manage modal state
	const [showModal, setShowModal] = useState(false);

	const handleModalVisibility = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<div className="navigation-panel-container">
				<div className="inner-navigation-panel-container">
					<nav className="nested-links">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nested-link-item nested-link-item-active"
									: "nested-link-item"
							}
							to="."
							end
						>
							<div className="pending">Pending</div>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "nested-link-item nested-link-item-active"
									: "nested-link-item"
							}
							to="completed"
						>
							<div className="completed">Completed</div>
						</NavLink>
					</nav>
					<div
						className="button-container"
						onClick={handleModalVisibility}
					>
						<div className="button-icon">
							<img
								src="/public/images/x-circle.svg"
								alt="cross icon"
							/>
						</div>
						<div className="button-content">Close account</div>
					</div>
				</div>
				<div className="line"></div>
			</div>
			{showModal === true ? (
				<CloseAccount handleModalVisibility={handleModalVisibility} />
			) : null}
		</>
	);
}

export default NestedNavbar;
