/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(180, 29%, 50%)",
				lightGreyishCyanBG: "hsl(180, 52%, 96%)",
				lightGreyishCyanFT: "hsl(180, 31%, 95%)",
				darkGreyishCyan: "hsl(180, 8%, 52%)",
				veryDarkGreyishCyan: "hsl(180, 14%, 20%)",
			},
		},
	},

	plugins: [],
};
