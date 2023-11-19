/* -------------------------------------------------------------------------- */
/*                             App/Root Component                             */
/* -------------------------------------------------------------------------- */

// import router
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

// import layouts
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// import components
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Onboarding from "./components/Onboarding/Onboarding";
import Monitoring from "./components/Monitoring/Monitoring";
import Flagging from "./components/Flagging/Flagging";
import SourceOfIncome from "./components/SourceOfIncome/SourceOfIncome";
import Uar from "./components/UAR/UAR";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";

// import ToastContainer - rt
import { ToastContainer } from "react-toastify";
// import react toastify css
import "react-toastify/dist/ReactToastify.css";

// router configuration
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="dashboard" element={<DashboardLayout />}>
				<Route index element={<Overview />} />
				<Route path="onboarding" element={<Onboarding />} />
				<Route path="monitoring" element={<Monitoring />}>
					<Route index element={<Pending />} />
					<Route path="completed" element={<Completed />} />
				</Route>
				<Route path="flagging" element={<Flagging />} />
				<Route path="source-of-income" element={<SourceOfIncome />} />
				<Route path="uar" element={<Uar />} />
			</Route>
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
}

export default App;
