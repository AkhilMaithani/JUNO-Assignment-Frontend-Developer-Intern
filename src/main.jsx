/* -------------------------------------------------------------------------- */
/*                                  main jsx file                                 */
/* -------------------------------------------------------------------------- */

/* --------- import react, react-dom, App Component, index css file --------- */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
