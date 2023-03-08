import React, { useState, useEffect } from "react";
import headerImageBG from "../assets/images/bg-header-mobile.svg";
import headerImageBGLG from "../assets/images/bg-header-desktop.svg";

function Header() {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 640) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
	}, [isMobile]);

	return (
		<div className="h-[15vh] bg-primary">
			<img
				src={isMobile ? headerImageBG : headerImageBGLG}
				alt=""
				className="h-full w-full lg:object-cover"
			/>
		</div>
	);
}

export default Header;
