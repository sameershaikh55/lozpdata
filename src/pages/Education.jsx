import React from 'react'
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';
import { useHooks } from '../Hooks/useHooks';

const Education = () => {
    const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />  
            {/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="educationHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">Educations & Elearning Solutions</h1>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
        </>     
    )
}

export default Education
