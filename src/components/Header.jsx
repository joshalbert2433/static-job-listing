import React from "react";
import headerImageBG from "../assets/images/bg-header-mobile.svg";

function Header() {
	return (
		<div className="h-[15vh] bg-primary">
			<img src={headerImageBG} alt="" className="w-full h-full" />
		</div>
	);
}

export default Header;
