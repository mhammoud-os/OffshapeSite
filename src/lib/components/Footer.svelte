<script lang="ts">
	import {Footer } from 'flowbite-svelte';

	import Logo from "$lib/assets/logo.png";
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;

	let activeClass = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent font-bold robo-font uppercase';
	let nonActiveClass = 'text-primary-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold robo-font uppercase';
</script>

	<div class="bottom-div bg-primary-200 border-t-4 border-primary-700 pt-1 pb-1 pl-1">
		<span class="font-bold text-primary-800 robo-font uppercase sm:visible">
			Copyright (c) 2024 OffShape Robotics - All rights reserved
			- <a href="https://www.instagram.com/offshape_robotics/" class="underline decoration-2 decoration-dashed">@offshape_robotics</a> on Instagram
			- <a href="https://www.youtube.com/@OffshapeRobotics" class="underline decoration-2 decoration-dashed">@OffShapeRobotics</a> on Youtube
			- <a href="https://www.thebluealliance.com/team/9663" class="underline decoration-2 decoration-dashed">The Blue Alliance</a>
		</span>
	</div>