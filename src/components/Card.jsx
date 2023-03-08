import React from "react";

function Card(props) {
	const {
		company,
		contract,
		featured: isFeatured,
		languages,
		level,
		new: isNew,
		location,
		logo,
		position,
		postedAt,
		role,
		tools,
	} = props.data;

	const { setFilteredItems, filteredItems } = props;

	return (
		<div
			className={`relative shadow-md shadow-primary bg-white  rounded-md px-6 py-8 flex flex-col gap-4 lg:flex-row lg:static lg:px-8 lg:gap-8 ${
				isFeatured ? "border-l-4 border-primary" : ""
			}`}
		>
			<div className="absolute lg:static z-50 -top-6 lg:flex lg:content-center">
				<img src={logo} alt="" className="w-14 lg:w-24" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex gap-4 mt-4 lg:mt-0">
					<h4 className="text-primary font-bold">{company}</h4>
					<div className="flex gap-4 h-6 ">
						{isNew && (
							<div className="font-bold px-2 pt-[1px] rounded-2xl bg-primary text-lightGreyishCyanFT items-center">
								NEW!
							</div>
						)}
						{isFeatured && (
							<div className=" font-bold bg-veryDarkGreyishCyan px-2 pt-[1px] rounded-2xl text-lightGreyishCyanFT">
								FEATURED
							</div>
						)}
					</div>
				</div>
				<p className="font-bold tracking-wider text-veryDarkGreyishCyan lg:text-xl">
					{position}
				</p>
				<ul className="flex gap-2 lg:gap-6">
					<li className="text-darkGreyishCyan">{postedAt}</li>
					<li className="text-darkGreyishCyan">•</li>
					<li className="text-darkGreyishCyan">{contract}</li>
					<li className="text-darkGreyishCyan">•</li>

					<li className="text-darkGreyishCyan">{location}</li>
				</ul>
			</div>

			<div className="h-[1px] bg-darkGreyishCyan my-2 lg:hidden"></div>
			<ul className=" flex gap-4 flex-wrap lg:flex-grow lg:justify-end lg:content-center">
				{role && (
					<li
						className="text-lg font-bold bg-lightGreyishCyanFT rounded-sm text-primary py-0.5 px-2 hover:bg-primary hover:text-lightGreyishCyanFT cursor-pointer"
						onClick={() => {
							setFilteredItems((prevState) => {
								return !prevState.includes(role)
									? [...prevState, role]
									: prevState;
							});
						}}
					>
						{role}
					</li>
				)}
				{level && (
					<li
						className="text-lg font-bold bg-lightGreyishCyanFT rounded-sm text-primary py-0.5 px-2 hover:bg-primary hover:text-lightGreyishCyanFT cursor-pointer"
						onClick={() => {
							setFilteredItems((prevState) => {
								return !prevState.includes(level)
									? [...prevState, level]
									: prevState;
							});
						}}
					>
						{level}
					</li>
				)}
				{languages?.map((language) => {
					return (
						<li
							className="text-lg font-bold bg-lightGreyishCyanFT rounded-sm text-primary py-0.5 px-2 hover:bg-primary hover:text-lightGreyishCyanFT cursor-pointer"
							key={language}
							onClick={() => {
								setFilteredItems((prevState) => {
									return !prevState.includes(language)
										? [...prevState, language]
										: prevState;
								});
							}}
						>
							{language}
						</li>
					);
				})}
				{tools?.map((tool) => {
					return (
						<li
							className="text-lg font-bold bg-lightGreyishCyanFT rounded-sm text-primary py-0.5 px-2 hover:bg-primary hover:text-lightGreyishCyanFT cursor-pointer"
							key={tool}
							onClick={() => {
								setFilteredItems((prevState) => {
									return !prevState.includes(tool)
										? [...prevState, tool]
										: prevState;
								});
							}}
						>
							{tool}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Card;
