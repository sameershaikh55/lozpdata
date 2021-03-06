import React from "react";
import portal1 from "../assets/portal1.svg";
import portal2 from "../assets/portal2.svg";
import portal3 from "../assets/portal3.svg";
import portal4 from "../assets/portal4.svg";
import portal5 from "../assets/portal5.svg";

const TravelPortal = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="display-4 themeText">Travel Portal</h1>
					<h4 className="row text-secondary mt-4">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting,
						</div>
					</h4>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="row">
					<div className="ESpace col-11 col-sm-10 col-md-8 order-2 order-md-1 mt-5 mt-md-0 mx-auto align-self-center">
						<h1 className="display-4 grid_sideLine pl-4">
							Accommodation management
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-1 order-md-2 text-center">
						<img style={{ width: "70%" }} src={portal1} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-3 text-center mt-5">
						<img style={{ width: "70%" }} src={portal2} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-4 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Car Rental and hire
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-6 order-md-5 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Agency and Agent Details
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-5 order-md-6 text-center mt-5">
						<img style={{ width: "70%" }} src={portal3} alt="portal" />
					</div>

					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-7 text-center mt-5">
						<img style={{ width: "70%" }} src={portal4} alt="portal" />
					</div>
					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-8 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Booking Management System
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>

					<div className="ESpace col-11 col-sm-10 col-md-8 mx-auto order-10 order-md-9 align-self-center mt-5">
						<h1 className="display-4 grid_sideLine pl-4">
							Mobile Applications
						</h1>
						<h4 className="pl-4 mt-4 lightColor">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="ESpace col-8 col-sm-6 col-md-4 mx-auto order-9 order-md-10 text-center mt-5">
						<img style={{ width: "50%" }} src={portal5} alt="portal" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelPortal;
