<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	import {Carousel, Indicator } from 'flowbite-svelte';

	import Logo from "$lib/assets/logo.png";
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;

	let activeClass = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent font-bold robo-font uppercase';
	let nonActiveClass = 'text-primary-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold robo-font uppercase';


	let currentpage= 1;
	let toggle = 1;

	let width;
	let height;
</script>

<Navbar class="fixed top-0 bg-primary-200 border-b-4 border-primary-700">
	<NavBrand href="/">
		<img src={Logo} class="me-3 h-16" alt="Capybara" />
		<span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white cool-font mt-1 text-primary-900" style="line-height: 0.8;">
  		OffShape
  		<span style="display: block; line-height: 0.8;">Robotics</span>
		</span>
	</NavBrand>

	<NavUl class="sm:hidden order-1" {activeUrl} {activeClass} {nonActiveClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/history">history</NavLi>
		<NavLi href="/sponsors">Sponsors</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>

	<button type="button" on:click={() => (toggle*=-1)} class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-primary-800 rounded-lg">
		<span class="sr-only">Open main menu</span>
		<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
		</svg>
	</button>
	{#if toggle == -1}
	<div class="md:hidden w-full robo-font text-xl">
		<ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
			<li>
				{#if currentpage==1}
					<a href="/" class="block py-2 px-3 text-primary-800 bg-primary-500" on:click={() => (toggle*=-1, currentpage=1)}>Home</a>
				{/if}
				{#if currentpage!=1}
					<a href="/" class="block py-2 px-3 text-primary-800 bg-primary-400 hover:bg-primary-300" on:click={() => (toggle*=-1, currentpage=1)}>Home</a>
				{/if}
			</li>
			<li>
				{#if currentpage==2}
					<a href="/about" class="block py-2 px-3 text-primary-800 bg-primary-500" on:click={() => (toggle*=-1, currentpage=2)}>About</a>
				{/if}
				{#if currentpage!=2}
					<a href="/about" class="block py-2 px-3 text-primary-800 bg-primary-400 hover:bg-primary-300" on:click={() => (toggle*=-1, currentpage=2)}>About</a>
				{/if}
			</li>
			<li>
				{#if currentpage==3}
					<a href="/history" class="block py-2 px-3 text-primary-800 bg-primary-500 " on:click={() => (toggle*=-1, currentpage=3)}>History</a>
				{/if}
				{#if currentpage!=3}
					<a href="/history" class="block py-2 px-3 text-primary-800 bg-primary-400 hover:bg-primary-300" on:click={() => (toggle*=-1, currentpage=3)}>History</a>
				{/if}
			</li>
			<li>
				{#if currentpage==4}
					<a href="/sponsors" class="block py-2 px-3 text-primary-800 bg-primary-500 " on:click={() => (toggle*=-1, currentpage=4)}>Sponsors</a>
				{/if}
				{#if currentpage!=4}
					<a href="/sponsors" class="block py-2 px-3 text-primary-800 bg-primary-400 hover:bg-primary-300" on:click={() => (toggle*=-1, currentpage=4)}>Sponsors</a>
				{/if}
			</li>
			<li>
				{#if currentpage==5}
					<a href="/contact" class="block py-2 px-3 text-primary-800 bg-primary-500" on:click={() => (toggle*=-1, currentpage=5)}>Contact</a>
				{/if}
				{#if currentpage!=5}
					<a href="/contact" class="block py-2 px-3 text-primary-800 bg-primary-400 hover:bg-primary-300" on:click={() => (toggle*=-1, currentpage=5)}>Contact</a>
				{/if}
			</li>
		</ul>

	</div>
{/if}
</Navbar>
