/* -------------------------------------------------------------------------- */
/*                             Completed Component                            */
/* -------------------------------------------------------------------------- */

// import useState, useEffect
import { useState, useEffect } from "react";

// import useOutletContex
import { useOutletContext } from "react-router-dom";

function Completed() {
	// completed data state
	const [completedData, setCompletedData] = useState([]);
	// outlet context
	const { dataContainer, searchData, triggerData, riskData } =
		useOutletContext();

	// it is responsible for displaying the completed data
	// set completed data state
	useEffect(() => {
		let dataArray = [...dataContainer];

		// if search data is not empty then we need to include the fields as well
		if (searchData !== "") {
			const searchCompletedData = dataArray.filter((data) => {
				return (data?.user?.fullname
					?.toLowerCase()
					.includes(searchData?.toLowerCase()) &&
					data?.status === "completed") ||
					(data?.user?.email
						?.toLowerCase()
						?.includes(searchData?.toLowerCase()) &&
						data?.status === "completed") ||
					(data?.action?.name
						.toLowerCase()
						.includes(searchData?.toLowerCase()) &&
						data?.status === "completed") ||
					(data?.action?.email
						.toLowerCase()
						.includes(searchData?.toLowerCase()) &&
						data?.status === "completed")
					? data
					: null;
			});

			dataArray = [...searchCompletedData];
		}

		// if trigger data is not empty then we need to include the fields as well
		if (triggerData !== "") {
			const triggerCompletedData = dataArray.filter((data) => {
				return data?.actionReason?.toLowerCase() ===
					triggerData?.toLowerCase() && data?.status === "completed"
					? data
					: null;
			});

			dataArray = [...triggerCompletedData];
		}

		// if risk data is not empty then we need to include the fields as well
		if (riskData !== "") {
			const riskCompletedData = dataArray.filter((data) => {
				return data?.riskLevel?.toLowerCase() ===
					riskData?.toLowerCase() && data?.status === "completed"
					? data
					: null;
			});

			dataArray = [...riskCompletedData];
		}

		// it will get all the fields having pending status
		if (searchData === "" && triggerData === "" && riskData === "") {
			const completedData = dataContainer.filter((data) => {
				return data?.status === "completed" ? data : null;
			});

			dataArray = [...completedData];
		}

		setCompletedData([...dataArray]);
	}, [dataContainer, riskData, triggerData, searchData]);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>
							<div>User</div>
						</th>
						<th>
							<div>
								Risk level{" "}
								<span className="header-image">
									<img
										src="/public/images/chevrons-up-down.svg"
										alt="chevrons-up-down"
									/>
								</span>
							</div>
						</th>
						<th>
							<div>Action reason</div>
						</th>
						<th>
							<div>
								Time to close{" "}
								<span className="header-image">
									<img
										src="/public/images/chevrons-up-down.svg"
										alt="chevrons-up-down"
									/>
								</span>
							</div>
						</th>
						<th>
							<div>
								Data added on{" "}
								<span className="header-image">
									<img
										src="/public/images/chevrons-up-down.svg"
										alt="chevrons-up-down"
									/>
								</span>
							</div>
						</th>
						<th>
							<div>Action taken by</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{completedData &&
						completedData.map((dataItem, i) => {
							return (
								<tr key={i}>
									<td>
										<div className="data-container">
											<div className="name-email-data">
												<div className="data-name">
													{dataItem?.user?.fullname}
												</div>
												<div className="data-email">
													{dataItem?.user?.email}
												</div>
											</div>
											<div className="data-icon">
												<img
													src="/public/images/external-link.svg"
													alt="share link image"
												/>
											</div>
										</div>
									</td>
									<td>
										<div className="image-level-data">
											<div className="data-image">
												<img
													src={`/public/images/Ellipse-${dataItem?.riskLevel?.toLowerCase()}.svg`}
													alt="level image"
												/>
											</div>
											<div
												className={`data-level ${dataItem?.riskLevel?.toLowerCase()}`}
											>
												{dataItem?.riskLevel}
											</div>
										</div>
									</td>
									<td>
										<div className="reason">
											{dataItem?.actionReason}
										</div>
									</td>
									<td>
										<div className="days">{`${dataItem?.days} days`}</div>
									</td>
									<td>
										<div className="date">
											{dataItem?.date}
										</div>
									</td>
									<td>
										<div className="action-date">
											<div className="data-answer">
												{dataItem?.action?.name}
											</div>
											<div className="data-date">
												{dataItem?.action?.email}
											</div>
										</div>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</>
	);
}

export default Completed;
