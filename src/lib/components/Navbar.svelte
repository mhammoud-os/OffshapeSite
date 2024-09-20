<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';

	import Logo from "$lib/assets/logo.png";
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;

	let activeClass = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent font-bold robo-font uppercase';
	let nonActiveClass = 'text-primary-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold robo-font uppercase';
</script>

<Navbar class="sticky top-0 bg-primary-200 border-b-4 border-primary-700">
	<NavBrand href="/">
		<img src={Logo} class="me-3 h-16" alt="Capybara" />
		<span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white cool-font mt-1 text-primary-900" style="line-height: 0.8;">
  		OffShape
  		<span style="display: block; line-height: 0.8;">Robotics</span>
		</span>
	</NavBrand>
	<NavUl class="order-1" {activeUrl} {activeClass} {nonActiveClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/sponsors">Sponsors</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
