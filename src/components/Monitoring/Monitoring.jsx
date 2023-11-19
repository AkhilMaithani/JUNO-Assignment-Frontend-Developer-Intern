/* -------------------------------------------------------------------------- */
/*                            Monitoring Component                            */
/* -------------------------------------------------------------------------- */

// import useState for state management, useEffect - react
import { useState, useEffect } from "react";

// import Outlet, useOutletContext hook
import { Outlet, useOutletContext } from "react-router-dom";

// import components
import NestedNavbar from "./NestedNavbar";
import NestedOptions from "./NestedOptions";

// import ElementLayout
import ElementLayout from "../../layouts/ElementLayout";

// import css
import "../../style/Monitoring.css";

function Monitoring() {
	// context of icon for showing sidebar/navbar
	const { activeIcon, handleActiveIcon } = useOutletContext();

	const [dataContainer, setDataContainer] = useState([]);
	const [searchData, setSearchData] = useState("");
	const [triggerData, setTriggerData] = useState("");
	const [riskData, setRiskData] = useState("");

	useEffect(() => {
		const fetchData = async (path) => {
			try {
				const response = await fetch(path);
				const resData = await response.json();
				setDataContainer([...resData]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData("/src/utils/data.json");
	}, []);

	return (
		<>
			<ElementLayout
				heading="Monitoring"
				activeIcon={activeIcon}
				handleActiveIcon={handleActiveIcon}
			>
				<NestedNavbar />
				<NestedOptions
					searchData={searchData}
					triggerData={triggerData}
					riskData={riskData}
					setSearchData={setSearchData}
					setRiskData={setRiskData}
					setTriggerData={setTriggerData}
				/>
				<div className="outer-table-container">
					<div className="inner-table-container">
						<Outlet
							context={{
								dataContainer,
								searchData,
								triggerData,
								riskData,
							}}
						/>
					</div>
				</div>
			</ElementLayout>
		</>
	);
}

export default Monitoring;
