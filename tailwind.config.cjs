/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Bodoni: ['scotch-display-condensed','sans-serif'],
				Simplicity : ['semplicitapro', 'sans-serif']
			},
			colors: {
				'snctm-brown': '#eae1cf',
				'events-white': '#D8C196',
				'event-darkorange': '#BA8D37',
				'event-hr': '#DDCDAE',
				'event-navlink': '#AFA693',
				'event-hero': '#EAE1CF',
				'event-hero-hr': '#F5E3BF',
				'content-primary': '#27272A',
				'society-border-hr': '#BB8E35',
				'exclusive-border': '#78643E',
				'exclusive-white': '#FFFFFF',
				'daring-black': '#151515',
				'experince-gray': '#DCDCDC',
				'experience-event-white': '#F5F5F5',
				'story-gray': '#E3E3E3',
				'story-headline-white': '#F3F3F3',
				'story-bg': '#1B1B1B',
				'contact-heading-white': '#D3D3D3',
				'contact-form-clr': '#78643E',
				'button-color': '#CAAC71',
				'apply-page-bg': '#F1E9D5'
			},
		}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/forms'),
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#EFA71C',
					secondary: '#CAAC71',
					accent: '#F5E3BF',
					neutral: '#27272A',
					'base-100': '#e7e5e4',
					'base-200': '#e7e5e4',
					info: '#facc15',
					success: '#36D399',
					warning: '#ea580c',
					error: '#dc2626'
				}
			}
		],
		styled: false
	}
};
