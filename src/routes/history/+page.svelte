<script>
	import { Button, Carousel, Indicator } from 'flowbite-svelte';
	//import { seasons } from './seasons';
	import robot1 from '$lib/assets/photos/robot.jpg';
	const seasons = [
		{
			year: "2023-2024",
			game: "CRESCENDO",
			achievements: [
				{ name: "Waterloo Event", awards: ["Event Winners"]},
				{ name: "Windsor Event", awards: ["8th Alliance Captain", "Rookie All-Star Award", "Qualified for the Provincial Championship"]}
			],
			description: "Crescendo is played on a 27 by 54-foot field covered in grey carpet, divided in half by a white line. Each alliance has zones for scoring: the Wing, Stage Zone, Amp Zone, and Source Zone. The game involves scoring Notes, which are orange foam rings, at their opponent's Speaker or their own Amp. At the end of the match, robots can earn additional points by climbing chains at their Stage. Notes are 10-inch diameter rings, with High Notes marked by white tape.\n",
			robotPic: robot1,
			links: [
				{ name: "Match Video", url: "https://www.youtube.com/watch?v=WAGds1yBNKo " },
				{ name: "Event Results", url: "https://www.thebluealliance.com/team/9663/2024" },
				{ name: "CAD file", url: "https://cad.onshape.com/documents/4c8ac4bd66d66883c9c00560/w/9a53c24093a0be3f172c2b80/e/8fdd3228dc22222c9c70a73e" }
			]
		},
		// Add more seasons as needed
	];
</script>

<svelte:head>
	<title>OffShape - History</title>
</svelte:head>

<div class="pt-32 mb-20 bg-cover bg-left-bottom bgimage">
	<div class="p-4 flex justify-center">
		<span class="text-center text-6xl cool-font text-primary-50"><i>OffShape Robotics History</i></span>
	</div>
	<div class="p-4 py-0 flex justify-center">
		<span class="text-center block mt-1 text-3xl leading-tight cool-font text-primary-100 font-medium"><i>Our journey through the seasons</i></span>
	</div>
</div>

{#each seasons as season}
	<div class="justify-center flex mt-8 mb-4">
		<div class="max-w-lg mx-4 bg-primary-400  border-primary-800 border-4 rounded-xl shadow-md overflow-hidden lg:max-w-7xl">
			<div class="lg:flex">
				<div class="lg:shrink-0">
					<img class="h-full w-full object-cover" src={season.robotPic} alt={`Robot for ${season.year}`}>
				</div>

				<div class="p-8 border-primary-800 border-t-4 lg:border-l-4 lg:border-0">
					<h1 class="text-4xl text-neutral-50 cool-font font-semibold">{season.year}</h1>

					<p class="mt-4 text-neutral-50 text-sm lg:text-lg">
					<span class="text-2xl mt-4 underline-offset-4 underline">Game: {season.game}</span>
					</p>
					<br>
					<p class="mt-2 text-neutral-50 text-sm lg:text-lg">
						<b>Description of event:</b> {season.description} <br>
					</p>

					<p class="mt-4 text-neutral-50 text-sm lg:text-lg">
						{#each season.achievements as event}
							<p class="text-2xl mt-4"><b>{event.name}</b></p>
							<p class="mb-1"> <b>Achievements:</b></p>
							<ul class="mt-1 list-disc list-inside">
								{#each event.awards as award}
									<li class = "text-primary-50">
										<span>{award}</span>
									</li>
								{/each}
							</ul>
						{/each}
					</p>
					<!-- Links Section -->
					<div class="mt-4">
						<h2 class="text-neutral-50 text-lg font-semibold">Links:</h2>
						<ul class="mt-2 list-disc list-inside">
							{#each season.links as link}
								<li class = "text-primary-50">
									<a href={link.url} class="text-primary-200 hover:underline hover:text-primary-100" target="_blank" rel="noopener noreferrer">{link.name}</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}