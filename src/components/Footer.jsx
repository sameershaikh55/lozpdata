import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/linkdin.svg";
import skype from "../assets/skype.svg";
import logoDark from "../assets/logoDark.png";
// import phone from "../assets/phone.svg";
// import message from "../assets/message.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer_container">
				<div className="d-flex justify-content-around h4 mb-5">
					<Link to="/travelHelp">Travel Help</Link>
					<Link to="/healthcare">Healthcare</Link>
					<Link to="/construction">Construction</Link>
					<Link to="/education">Education</Link>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div className="imgContainer ml-5 ml-sm-0 pr-5 py-2">
						<img src={logoDark} alt="logo" />
					</div>
					<div className="ml-5 mt-n1 py-2 imgContainer2">
						<a
							target="_blank"
							href="https://www.facebook.com/LozpDataSolutions/"
							rel="noreferrer"
						>
							<img src={fb} alt="facebook" />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/lozpdata/"
							rel="noreferrer"
						>
							<img src={insta} alt="instagram" className="ml-3" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/lozpdatasolutions/"
							rel="noreferrer"
						>
							<img src={linkdin} alt="linkdin" className="ml-3" />
						</a>
						<a
							target="_blank"
							href="https://join.skype.com/invite/dh0IZGiUglqF"
							rel="noreferrer"
						>
							<img src={skype} alt="skype" className="ml-3" />
						</a>
					</div>
				</div>
				{/* <div className="d-flex justify-content-center mt-4 mx-auto align-items-center">
					<div className="d-flex align-items-center mr-4">
						<img src={message} alt="message" />
						<a className="ml-2 mt-1 text-dark h5" href="info@gmail.com">
							info@gmail.com
						</a>
					</div>
					<div className="d-flex align-items-center ml-4">
						<img src={phone} alt="phone" />
						<a className="ml-2 mt-1 text-dark h5" href="877596621">
							877596621
						</a>
					</div>
				</div> */}
			</div>
			<div className="copyWriteLine text-center pt-4 pb-4 px-1 text-white">
				© 2020Lozpdata . All Rights Reserved. Terms Of Use. Privacy Policy.
			</div>
		</>
	);
};

export default Footer;
