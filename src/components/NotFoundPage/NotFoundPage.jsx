// import useNavigate
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
	const navigate = useNavigate();

	const handleBackFunction = () => {
		navigate(-1, { replace: true });
	};

	return (
		<>
			<div className="page-not-found">
				<h2>Sorry, page not found! 404 Error</h2>
				<button className="back-button" onClick={handleBackFunction}>
					Go Back
				</button>
			</div>
		</>
	);
}

export default NotFoundPage;
