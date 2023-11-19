/* -------------------------------------------------------------------------- */
/*                              Profile Component                             */
/* -------------------------------------------------------------------------- */

// import user data
import { userData } from "../../utils/details";

function Profile() {
	// get user data from local storage and set it to userData object
	// if data is not present at local storage then set data to empty strings
	userData.name = localStorage.getItem("name") ?? "";
	userData.email = localStorage.getItem("email") ?? "";

	return (
		<>
			<div className="profile-container">
				<div className="profile-image">
					<img
						src="/public/images/profileImage.svg"
						alt="profile image"
					/>
				</div>
				<div className="profile-content">
					<p className="profile-name">{userData.name}</p>
					<p className="profile-email">{userData.email}</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
