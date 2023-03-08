import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { data } from "./data";

function App() {
	const [filteredItems, setFilteredItems] = useState(() => {
		return JSON.parse(localStorage.getItem("filteredItems")) || [];
	});

	useEffect(() => {
		localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
	}, [filteredItems]);

	return (
		<div>
			<Header />
			<div className="bg-lightGreyishCyanBG mb-12">
				<div className="container mx-auto relative bg-lightGreyishCyan min-h-screen px-8">
					{filteredItems.length !== 0 && (
						<Filter
							setFilteredItems={setFilteredItems}
							filteredItems={filteredItems}
						/>
					)}

					<div className="pt-20 flex flex-col gap-12">
						{data.map((data) => {
							const techStack = [
								...data.tools,
								...data.languages,
								data.role,
								data.level,
							];
							const filter = filteredItems.every((tech) =>
								techStack.includes(tech)
							);

							if (!filter && filteredItems.length !== 0) return;

							return (
								<Card
									data={data}
									key={data.id}
									setFilteredItems={setFilteredItems}
									filteredItems={filteredItems}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
