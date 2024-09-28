<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';
	import Logo from '$lib/assets/logo.png';
	import { images } from '$lib/assets/photos/directory';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>OffShape - FRC9663</title>
</svelte:head>

<header class="flex flex-col items-center justify-center p-8">
	<div class="mt-20 cool-font text-5xl text-center md:text-6xl lg:text-7xl font-bold">Contact Us</div>

	<div class="flex flex-col md:flex-row justify-center items-center m-8 w-full">
		<div class="flex flex-col items-center md:mr-8 mb-4 md:mb-0">
			<table class="text-left">
				<tr>
					<td class="px-2">
						<Icon icon="octicon:mail-24" class="text-black text-4xl" />
					</td>
					<td class="px-4 py-4 text-lg">OffShape9663@gmail.com</td>
				</tr>
				<tr>
					<td class="px-2">
						<Icon icon="iconoir:youtube" class="text-black text-4xl" />
					</td>
					<td class="px-4 py-4 text-lg">@OffshapeRobotics</td>
				</tr>
				<tr>
					<td class="px-2">
						<Icon icon="hugeicons:instagram" class="text-black text-4xl" />
					</td>
					<td class="px-4 py-4 text-lg">offshape_robotic</td>
				</tr>
				<tr>
					<td class="px-2">
						<Icon icon="carbon:location" class="text-black text-4xl" />
					</td>
					<td class="px-4 text-lg text-left">
						<p>Western Research Park,</p>
						<p>999, Collip Circle.</p>
					</td>
				</tr>
			</table>
		</div>

		<div class="flex flex-col items-start md:ml-8">
			<b class="mb-2 mt-5 text-lg">Team Contacts</b>
			<table class="mt-1 text-left">
				<tr class="p-3">
					<td class="py-3">
						<i class="font-semibold">Mentor - Haydar Neal</i>
						<p class="text-sm">Email: neal.haydar@gmail.com</p>
						<p class="text-sm">Phone: 519-694-1849</p>
					</td>
				</tr>
				<tr>
					<td class="py-3">
						<i class="font-semibold">Mentor - Nolan Khoshaien</i>
						<p class="text-sm">Email: khoshaien.nolan@gmail.com</p>
						<p class="text-sm">Phone: 226-881-4442</p>
					</td>
				</tr>
				<tr>
					<td class="py-3">
						<i class="font-semibold">Member - Anthony Li</i>
						<p class="text-sm">Email: anthonyli8738@gmail.com</p>
					</td>
				</tr>
			</table>
		</div>
	</div>

	<span class="cool-font p-5 text-5xl text-center md:text-6xl lg:text-7xl font-bold">Form</span>
	<iframe
		class="flex self-center pb-10 w-full max-w-lg"
		src="https://docs.google.com/forms/d/e/1FAIpQLSfn03OWj_sgO_1ez52EZHv1NMD-eyPFv31RkqA4OGnhe0JPJA/viewform?embedded=true"
		width="640"
		height="1520"
		frameborder="0"
		marginheight="0"
		marginwidth="0">Loading…</iframe
	>
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
