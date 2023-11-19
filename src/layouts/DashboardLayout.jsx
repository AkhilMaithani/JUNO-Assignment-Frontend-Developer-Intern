/* -------------------------------------------------------------------------- */
/*                              Dashboard Layout                              */
/* -------------------------------------------------------------------------- */

// import Outlet
import { Outlet } from "react-router-dom";

// import useState - r
import { useState } from "react";

// import Component
import Logo from "../components/Navbar/Logo";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Navbar/Profile";

// import css
import "../style/layout.css";

function DashboardLayout() {
	const [activeIcon, setActiveIcon] = useState(false);

	const handleActiveIcon = () => {
		setActiveIcon(!activeIcon);

		document
			.getElementsByClassName("sidebar-conatiner")[0]
			.classList.toggle("float-sidebar");
	};

	return (
		<>
			<section className="dashboard-outer-section">
				<div className="dashboard-inner-section">
					<aside className="sidebar-conatiner">
						<div className="sidebar">
							<Logo />
							<Navbar />
						</div>
						<Profile />
					</aside>
					<div className="component">
						<Outlet context={{ activeIcon, handleActiveIcon }} />
					</div>
				</div>
			</section>
		</>
	);
}

export default DashboardLayout;
