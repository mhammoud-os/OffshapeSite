<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';

	import Logo from "$lib/assets/logo.png";
	import { images } from '$lib/assets/photos/directory';
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
		<img src={Logo} class="logo" />
	</div>
</header>