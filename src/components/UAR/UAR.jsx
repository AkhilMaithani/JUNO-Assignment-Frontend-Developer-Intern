/* -------------------------------------------------------------------------- */
/*                                UAR Component                               */
/* -------------------------------------------------------------------------- */

// import useOutletContext hook
import { useOutletContext } from "react-router-dom";

// import ElementLayout
import ElementLayout from "../../layouts/ElementLayout";

function Uar() {
	// context of icon for showing sidebar/navbar
	const { activeIcon, handleActiveIcon } = useOutletContext();

	return (
		<>
			<ElementLayout
				heading="Uar"
				activeIcon={activeIcon}
				handleActiveIcon={handleActiveIcon}
			></ElementLayout>
		</>
	);
}

export default Uar;
