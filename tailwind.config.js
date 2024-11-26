/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			accent: '#A18A68',
			'dark-gray': '#707070',
			gray: '#D8D8D8',
			'light-gray': '#EFEFEF',
			red: '#D82700',
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
		},
		fontSize: {
			h1: [
				'2.0625rem',
				{
					fontWeight: '600',
				},
			],
			h2: [
				'1.625rem',
				{
					lineHeight: '35px',
					fontWeight: '400',
				},
			],
			h3: [
				'1.25rem',
				{
					lineHeight: '26px',
					fontWeight: '400',
				},
			],
			h4: [
				'1.25rem',
				{
					lineHeight: '20px',
					fontWeight: '500',
				},
			],
			h5: [
				'1rem',
				{
					lineHeight: '27px',
					fontWeight: '500',
				},
			],
			'body-l': [
				'1rem',
				{
					fontWeight: '700',
				},
			],
			'body-m': [
				'0.875rem',
				{
					fontWeight: '400',
				},
			],
			'body-s': [
				'0.75rem',
				{
					lineHeight: '20px',
					fontWeight: '400',
				},
			],
		},
	},
	plugins: [],
};
