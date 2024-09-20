
<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';

	import Logo from "$lib/assets/logo.png";
	import { images } from '$lib/assets/photos/directory';
	import Confetti from 'svelte-confetti';

	let makeItRain = false;

	let clickCount = 0;

	$: if (clickCount > 4) {
		makeItRain = true;
	}
</script>

<svelte:head>
	<title>OffShape - FRC9663</title>
</svelte:head>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between; /* Adjusted to space-between */
        height: 100%;
    }

    .logo {
        position: absolute;
        bottom: -84%; /* Adjust as needed */
        left: 50%; /* Adjust as needed to move it slightly to the left */
        transform: rotate(-16deg); /* Rotate the logo */
        z-index: 2; /* Ensure the logo is on top */
				width: 70%;
    }

		.logo:active {
				transform: rotate(-16deg) scale(0.9);
		}

    .bottom-div {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

</style>

<header style="height:100%; overflow: hidden">
	<div class="sm:w-1/2 ml-4">
		<span class="text-7xl cool-font">A <i class="mr-2">FIRST Robotics</i> Community Team in <span class="text-primary-800">London, Ontario, Canada</span></span>
		<br />
		<Button size="xl" class="robo-font">About the Team</Button>
		<Button size="xl" class="robo-font">Our Mission</Button>
	</div>
	<div class="sm:w-[46%] sm:visible" style="position: relative;">
		<Carousel {images} duration={5000} class="rounded-none rounded-l-lg border-l-4 border-t-4 border-b-4 sm:border-primary-800 bg-primary-800" imgClass="rounded-md">
		</Carousel>
        <button type="button" on:click={() => (clickCount++)}>
            <img src={Logo} class="logo" />
        </button>
	</div>

	<div class="bottom-div bg-primary-200 border-t-4 border-primary-700 pt-1 pb-1 pl-1">
		<span class="font-bold text-primary-800 robo-font uppercase sm:visible">
			Copyright (c) 2024 OffShape Robotics - All rights reserved
			- <a href="https://www.instagram.com/offshape_robotics/" class="underline decoration-2 decoration-dashed">@offshape_robotics</a> on Instagram
			- <a href="https://www.youtube.com/@OffshapeRobotics" class="underline decoration-2 decoration-dashed">@OffShapeRobotics</a> on Youtube
			- <a href="https://www.thebluealliance.com/team/9663" class="underline decoration-2 decoration-dashed">The Blue Alliance</a>
		</span>
	</div>
</header>

{#if makeItRain}
<div style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;">
	<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration={5000} amount={800} fallDistance="100vh" />
</div>
{/if}