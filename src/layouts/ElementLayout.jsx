/* --------------------------------------------------------------------------- */
/*                                Element Layout                               */
/* --------------------------------------------------------------------------- */

// import PropTypes
import PropTypes from "prop-types";

// import icons
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function ElementLayout({ heading, children, activeIcon, handleActiveIcon }) {
	return (
		<>
			<div className="element-container">
				<div className="hide-icon-container">
					<div className="hide-icon" onClick={handleActiveIcon}>
						{activeIcon ? <RxCross1 /> : <FaBars />}
					</div>
				</div>
				<h2 className="">{heading}</h2>
				{children}
			</div>
		</>
	);
}

ElementLayout.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.array,
	activeIcon: PropTypes.bool,
	handleActiveIcon: PropTypes.func,
};

export default ElementLayout;
