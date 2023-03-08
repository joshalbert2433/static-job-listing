import React from "react";
import exitButton from "../assets/images/icon-remove.svg";

function Filter({ setFilteredItems, filteredItems }) {
	return (
		<div className="bg-white shadow-md shadow-primary -mt-12 lg:-mt-10 rounded-md flex p-6 static lg:absolute top-0 left-0 right-0 lg:mx-8">
			<ul className="flex w-[90%] gap-4 flex-wrap">
				{filteredItems.map((item) => {
					return (
						<li className="bg-lightGreyishCyanFT flex rounded-md overflow-hidden text-primary font-bold text-lg">
							<div className="px-2 mt-1">{item}</div>
							<img
								src={exitButton}
								className="bg-primary p-2  cursor-pointer hover:bg-veryDarkGreyishCyan"
								onClick={() => {
									const filter = filteredItems.filter(
										(filteredItem) => filteredItem !== item
									);
									setFilteredItems(filter);
								}}
							/>
						</li>
					);
				})}
			</ul>
			<div className="w-[10%] flex items-center justify-end font-bold text-darkGreyishCyan ">
				<a
					className="hover:text-primary cursor-pointer"
					onClick={() => setFilteredItems([])}
				>
					Clear
				</a>
			</div>
		</div>
	);
}

export default Filter;
