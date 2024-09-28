<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';
	import Logo from "$lib/assets/firstlogo.png";
	import { images } from '$lib/assets/photos/directory';
	import { portraits } from '$lib/assets/portraits/directory';
	import {awards} from '$lib/assets/awards/directory';
	import Background from "$lib/assets/background-about.jpg";
</script>

<svelte:head>
	<title>OffShape - FRC9663</title>
</svelte:head>

<style>
.bgimage {
  background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(224, 194, 162, 0.2)), url('$lib/assets/photos/waterloo_game1.jpg');
  background-attachment: fixed;
  background-position: 0% 160%;

}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 195px;
  height: 190px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: transparent;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}

</style>
<!--
<div class="p-4 flex justify-center">
    <span class=" text-2xl cool-font"><i class="mr-2">FRC #9663</i></span>
</div>
<div class="p-10 bg-[url('{Background}')]">
-->
<header>

	<div class="mt-24 flex flex-col">
			<div class=" cool-font p-10 text-7xl text-center">Sponsors</div>
	</div>

	<div class="w-full p-4 justify-center flex my-2">
		<div class="w-full max-w-lg flex flex-row w-1/6 h-40 rounded-lg bg-primary-400 border-primary-800 border-4  justify-center items-center">
				<img src="https://www.ocftd.org/images/logo.svg" class="p-5"/>
		</div>
	</div>

</header>