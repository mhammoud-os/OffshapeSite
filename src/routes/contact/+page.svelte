<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';
	import Logo from '$lib/assets/logo.png';
	import { images } from '$lib/assets/photos/directory';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>OffShape - FRC9663</title>
</svelte:head>
		
<header style="">
	<div class="flex flex-col">
		<div class=" cool-font p-10 text-7xl text-center">Contact Us</div>

		<div class="flex flex-row justify-center m-2">
			<table class="justify-self-center mr-2">
				<tr>
					<th><Icon icon="octicon:mail-24" style="color: black; font-size: 40px;" /></th>
					<th class="px-10">OffShape9663@gmail.com</th>
				</tr>
				<tr>
					<th><Icon icon="iconoir:youtube" style="color: black; font-size: 40px;" /></th>
					<th>@OffshapeRobotics</th>
				</tr>
				<tr>
					<th><Icon icon="hugeicons:instagram" style="color: black; font-size: 40px;" /></th>
					<th>offshape_robotic</th>
				</tr>
				<tr>
					<th><Icon icon="carbon:location" style="color: black; font-size: 40px;" /></th>
					<th
						><p>Western Research Park,</p>
						<p>999, Collip Circle.</p></th
					>
				</tr>
			</table>

			<div>
				<b class="mb-4">Team Contacts</b>
				
				<table class="mt-1 text-left">
				<tr class="p-3">
					<th class="py-3">
					<i>Mentor - Haydar Neal</i>
					<p>Email: neal.haydar@gmail.com</p>
					<p>Phone: 519-694-1849</p>
					</th>
				</tr>
				<tr>
					<th class="py-3">
					<i>Mentor - Nolan Khoshaien </i>
					<p>Email: khoshaien.nolan@gmail.com</p>
					<p>Phone: 226-881-4442</p>
					</th>
				</tr>
				<tr>
					<th class="py-3">
					<i>Member - Anthony Li</i>
					<p>Email: anthonyli8738@gmail.com</p>
					</th>
				</tr>

				</table>
			</div>
		</div>

		<span class="cool-font p-10 text-6xl text-center">Form</span>
		<iframe
			class="flex self-center pb-10"
			src="https://docs.google.com/forms/d/e/1FAIpQLSfn03OWj_sgO_1ez52EZHv1NMD-eyPFv31RkqA4OGnhe0JPJA/viewform?embedded=true"
			width="640"
			height="1520"
			frameborder="0"
			marginheight="0"
			marginwidth="0">Loading…</iframe
		>
	</div>

	<!--
	<div class="bottom-div bg-primary-200 border-t-4 border-primary-700 pt-1 pb-1 pl-1">
    <span class="font-bold text-primary-800">Copyright © 2024 OffShape Robotics - All rights reserved</span>
</div>
	-->
</header>

<style>
	.logo {
		position: absolute;
		bottom: -84%; /* Adjust as needed */
		left: 50%; /* Adjust as needed to move it slightly to the left */
		transform: rotate(-16deg); /* Rotate the logo */
		z-index: 2; /* Ensure the logo is on top */
		width: 70%;
	}
</style>