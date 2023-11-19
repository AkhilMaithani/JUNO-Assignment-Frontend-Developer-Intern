/* -------------------------------------------------------------------------- */
/*                             Overview Component                             */
/* -------------------------------------------------------------------------- */

// import useEffect
import { useEffect } from "react";

// import useOutletContext hook
import { useOutletContext } from "react-router-dom";

// import toast - rt
import { toast } from "react-toastify";

// import ElementLayout
import ElementLayout from "../../layouts/ElementLayout";

function Overview() {
	// context of icon for showing sidebar/navbar
	const { activeIcon, handleActiveIcon } = useOutletContext();

	useEffect(() => {
		toast.info("Please move to the Monitoring tab.", {
			position: toast.POSITION.BOTTOM_RIGHT,
			className: "toast-message",
		});
	}, []);

	return (
		<>
			<ElementLayout
				heading="Overview"
				activeIcon={activeIcon}
				handleActiveIcon={handleActiveIcon}
			></ElementLayout>
		</>
	);
}

export default Overview;
