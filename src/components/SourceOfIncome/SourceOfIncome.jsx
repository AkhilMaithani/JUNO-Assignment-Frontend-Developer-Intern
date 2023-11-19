/* -------------------------------------------------------------------------- */
/*                         Source Of Income Component                         */
/* -------------------------------------------------------------------------- */

// import useOutletContext hook
import { useOutletContext } from "react-router-dom";

// import ElementLayout
import ElementLayout from "../../layouts/ElementLayout";

function SourceOfIncome() {
	// context of icon for showing sidebar/navbar
	const { activeIcon, handleActiveIcon } = useOutletContext();

	return (
		<>
			<ElementLayout
				heading="Source of Income"
				activeIcon={activeIcon}
				handleActiveIcon={handleActiveIcon}
			></ElementLayout>
		</>
	);
}

export default SourceOfIncome;
