import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import GetConnected from "../components/GetConnected";
import MainHeader from "../components/MainHeader";
import OurProcess from "../components/OurProcess";
import Sidebar from "../components/Sidebar";
import Technologies from "../components/Technologies";
import WebDevelopmentSection from "../components/WebDevelopmentSection";
import development from "../assets/appDevelopment.png";
import { useHooks } from "../Hooks/useHooks";

const AppDevelopment = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="appDevelopmentHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">App Development</h1>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
			<br />
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="font-weight-bold">
						<span className="themeText">Industry Leaders In</span> App
						Development
					</h1>
					<h4 className="row text-secondary">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto">
							When It Comes To Website Development, We Push The Limits And Set
							New Standards By Creating Functionally Rich And Aesthetically
							Stunning Websites. Best-In-Class UX And Compelling
						</div>
					</h4>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<WebDevelopmentSection heading="APP" image={development} />
			<OurProcess />
			<Technologies />
			<br />
			<GetConnected />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default AppDevelopment;
