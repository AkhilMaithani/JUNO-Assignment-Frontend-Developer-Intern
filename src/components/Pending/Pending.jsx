/* -------------------------------------------------------------------------- */
/*                              Pending Component                             */
/* -------------------------------------------------------------------------- */

// import useState, useEffect
import { useState, useEffect } from "react";

// import useOutletContex
import { useOutletContext } from "react-router-dom";

function Pending() {
	// pending data state
	const [pendingData, setPendingData] = useState([]);
	// outlet contexts
	const { dataContainer, searchData, triggerData, riskData } =
		useOutletContext();

	// it is responsible for displaying the pending data
	// set pending data state
	useEffect(() => {
		let dataArray = [...dataContainer];

		// if search data is not empty then we need to include the fields as well
		if (searchData !== "") {
			const searchPendingData = dataArray.filter((data) => {
				return (data?.user?.fullname
					?.toLowerCase()
					.includes(searchData?.toLowerCase()) &&
					data?.status === "pending") ||
					(data?.user?.email
						?.toLowerCase()
						?.includes(searchData?.toLowerCase()) &&
						data?.status === "pending")
					? data
					: null;
			});

			dataArray = [...searchPendingData];
		}

		// if trigger data is not empty then we need to include the fields as well
		if (triggerData !== "") {
			const triggerPendingData = dataArray.filter((data) => {
				return data?.triggerReason?.toLowerCase() ===
					triggerData?.toLowerCase() && data?.status === "pending"
					? data
					: null;
			});

			dataArray = [...triggerPendingData];
		}

		// if risk data is not empty then we need to include the fields as well
		if (riskData !== "") {
			const riskPendingData = dataArray.filter((data) => {
				return data?.riskLevel?.toLowerCase() ===
					riskData?.toLowerCase() && data?.status === "pending"
					? data
					: null;
			});

			dataArray = [...riskPendingData];
		}

		// it will get all the fields having pending status
		if (searchData === "" && triggerData === "" && riskData === "") {
			const pendingData = dataContainer.filter((data) => {
				return data?.status === "pending" ? data : null;
			});

			dataArray = [...pendingData];
		}

		setPendingData([...dataArray]);
	}, [dataContainer, riskData, searchData, triggerData]);

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
							<div>Trigger reason</div>
						</th>
						<th>
							<div>
								In queue for{" "}
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
							<div>Previously reviewed</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{pendingData &&
						pendingData.map((dataItem, i) => {
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
													src={`/public/images/Ellipse-${dataItem?.riskLevel.toLowerCase()}.svg`}
													alt="level image"
												/>
											</div>
											<div
												className={`data-level ${dataItem?.riskLevel.toLowerCase()}`}
											>
												{dataItem?.riskLevel}
											</div>
										</div>
									</td>
									<td>
										<div className="reason">
											{dataItem?.triggerReason}
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
												{dataItem?.reviewed?.action}
											</div>
											<div className="data-date">
												{dataItem?.reviewed?.date}
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

export default Pending;
