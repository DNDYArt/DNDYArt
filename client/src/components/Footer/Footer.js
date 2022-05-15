import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const Footer = () => {
	const context = useContext(UserContext);

	return (
		<>
			<footer className="appFooter">
				<div className="lineOne">
					<h5 className="h5">
						© 2022 DNDY Art Curators | Made with REACT | Repo this on {" "}
						<span>
							<a
								target="_blank"
								href="https://github.com/DNDYArt"
							>
								GITHUB
							</a>
						</span>
					</h5>
				</div>
				<div className="lineTwo">
					<Link
						to={
							context.currentUser.loggedIn
								? "/artistprofile"
								: "/artist"
						}
						className="artistLink"
					>
						Artist Portal
					</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
