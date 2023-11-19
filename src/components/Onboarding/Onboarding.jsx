/* -------------------------------------------------------------------------- */
/*                            Onboarding Component                            */
/* -------------------------------------------------------------------------- */

// import useOutletContext hook
import { useOutletContext } from "react-router-dom";

// import ElementLayout
import ElementLayout from "../../layouts/ElementLayout";

function Onboaring() {
	// context of icon for showing sidebar/navbar
	const { activeIcon, handleActiveIcon } = useOutletContext();

	return (
		<>
			<ElementLayout
				heading="Onboaring"
				activeIcon={activeIcon}
				handleActiveIcon={handleActiveIcon}
			></ElementLayout>
		</>
	);
}

export default Onboaring;
