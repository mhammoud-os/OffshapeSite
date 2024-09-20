import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F5F2EF', // Lightest brown
					100: '#EDE0D4',
					200: '#E0C2A2',
					300: '#D3A379',
					400: '#C68550', // Medium brown
					500: '#B96828', // Default primary brown
					600: '#A2561E',
					700: '#8C4817',
					800: '#763A10',
					900: '#5F2D08' // Darkest brown
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;