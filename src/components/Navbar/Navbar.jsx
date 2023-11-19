/* -------------------------------------------------------------------------- */
/*                              Nabvar Component                              */
/* -------------------------------------------------------------------------- */

// import NavLink Component
import { NavLink } from "react-router-dom";

// import navbar items values
import { navbarItems } from "../../utils/details";

// import css
import "../../style/Navbar.css";

function Navbar() {
	return (
		<>
			<nav className="navbar-container">
				<ul className="inner-navbar-container">
					{navbarItems.map(({ link, title, end }) => (
						<li key={title} className="navbar-item-container">
							<NavLink
								className={({ isActive }) =>
									isActive
										? "navbar-item navbar-item-active"
										: "navbar-item"
								}
								to={link}
								end={end}
							>
								{title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
