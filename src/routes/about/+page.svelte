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
@media (max-width: 768px) {
    .bgimage {
        background-attachment: scroll; /* Change to scroll for mobile */
        background-position: center; /* Adjust position for mobile */
    }
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
<div class="mt-20 p-10 py-0 lg:py-32 mb-20 bg-cover bg-left-bottom bgimage">
    <!-- For the outer divs, set the alignment based on screen size -->
    <div class="p-4 flex justify-start lg:justify-end">
        <!-- Set the text alignment to left on mobile and right on larger screens -->
        <span class="mt-10 text-left lg:text-right text-6xl cool-font text-primary-100"><i>We are OffShape Robotics</i></span>
    </div>
    <div class="p-4 flex justify-start lg:justify-end">
        <span class="text-left lg:text-right block mt-1 text-3xl leading-tight cool-font text-primary-100 font-medium"><i>A team of amazing people</i></span>
    </div>
</div>

<div class="justify-center flex">
    <div class="max-w-lg mx-4 bg-primary-400  border-primary-800 border-4 rounded-xl shadow-md overflow-hidden lg:max-w-5xl ">
        <div class="lg:flex">
            <div class="lg:shrink-0">
            <img class="h-48 w-full object-cover lg:h-full lg:max-w-lg" src={images[4].src} alt="Group photo">
            </div>
            <div class="p-8 border-primary-800 border-t-4 lg:border-l-4 lg:border-0" >
            <p class="mt-2 text-neutral-50 text-sm lg:text-lg" >
                Offshape Robotics team #9663 is a robotics team made up of local high
                school students determined to thrive in the FIRST® Robotics Competition.
                Offshape Robotics was founded in the season of 2023-2024 by <a href="https://ocftd.org" class="text-primary-200 hover:underline hover:text-primary-100" target="_blank" rel="noopener noreferrer">Ontario Center for Talent Development (OCFTD)</a> . With our talented
                students and your help, we can accomplish extraordinary results. The team can
                reach more students and promote STEM ideals with your assistance. Members gain lifelong
                skills in business, teamwork, management, leadership, computer science, and
                engineering through this program. By providing the chance for students to improve
                their talents in a practical and hands-on manner, it prepares them for
                university, college, and potential future jobs.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="overflow-hidden mt-20 p-4 flex justify-center">
    <img src={Logo} class="h-20" />
    <span class="mt-20 text-center text-6xl cool-font">What is First Robotics?</span>
    <img src={Logo} class="h-20" />
</div>
<div class="justify-center flex">
    <div class="max-w-lg mx-4 bg-primary-400  border-primary-800 border-4 rounded-xl shadow-md overflow-hidden lg:max-w-5xl ">
        <div class="lg:flex">
            <div class="p-8 border-primary-800 border-b-4 lg:border-r-4 lg:border-0" >
                <p class="mt-2 text-neutral-50 text-sm lg:text-lg" >
                    <b class="text-xl">F</b>or <b class="text-xl">I</b>nspiration and <b class="text-xl">R</b>ecognition of <b class="text-xl">S</b>cience and <b class="text-xl">T</b>echnology
                    inspires young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.
                </p>
            </div>
            <div class="lg:shrink-0">
                <div class="h-48 w-full object-cover lg:h-32 lg:max-w-lg">
                    <img class="object-cover w-full h-94" src={images[3].src} alt="Group photo">
                </div>
            </div>
        </div>
    </div>
</div>
<div class="p-4 flex justify-center">
    <span class="mt-32 text-center text-6xl cool-font">Our Achievements </span>
</div>
<div class="justify-center flex">
    <div class="mx-auto overflow-hidden ">
        <div class="flex flex-wrap justify-center">
        {#each awards as image}
            <div class="max-w-lg mx-auto my-10 bg-primary-400  border-primary-800 border-4 rounded-xl shadow-md overflow-hidden lg:max-w-5xl ">
                <div class="flex">
                <div class="lg:shrink-0">
                    <img src={image.src2} alt="" class=" object-scale-down border-primary-800 border-b-4 h-48 sm:h-56 lg:h-96">
                    </div>
                    <div class="lg:shrink-0 ">
                            <img src={image.src} alt="" class=" object-scale-down border-primary-800 border-b-4 h-48 sm:h-56 lg:h-96">
                    </div>
                </div>
                <h1 class="text-3xl text-center cool-font">{image.title}</h1>
            </div>
        {/each}
        </div>
    </div>
</div>

<div class="p-4 flex justify-center">
    <span class="mt-20 text-center text-6xl cool-font">Meet the Team</span>
</div>

<div class="mx-auto overflow-hidden max-w-7xl  ">
    <div class="flex flex-wrap justify-center">
        {#each portraits as image}
            <div class="lg:shrink-0 p-5 py-10 cool-font">
                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={image.src} alt="" class=" object-scale-down border-primary-800 border-4 rounded-xl">
                        <h1 class="text-lg">{image.name}</h1>
                    </div>
                    <div class="flip-card-back bg-primary-300  border-4 border-primary-800 rounded-xl p-5">
                        <p>{image.description}</p>
                    </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

    <div class="p-4 flex justify-center">
        <span class="mt-20 text-center text-6xl cool-font">Team Host</span>
    </div>
    <div class="p-2 flex justify-center">
        <a href="https://ocftd.org" class="text-2xl text-primary-900 hover:underline hover:text-primary-500" target="_blank" rel="noopener noreferrer">Ontario Center for Talent Development (OCFTD)</a>
    </div>
    <a href="https://ocftd.org" target="_blank">
    <div class="mb-10 w-full justify-center flex my-2">
        <div class="w-full max-w-lg flex flex-row w-1/6 h-40 rounded-lg bg-primary-400 border-primary-800 hover:bg-primary-300 border-4  justify-center items-center">
            <img src="https://www.ocftd.org/images/logo.svg" class="p-5"/>
        </div>
    </div>
    </a>

</header>