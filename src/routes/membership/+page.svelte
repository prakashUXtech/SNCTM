<script>
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Privilage from "./Privilage.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	import Screen1 from "./Screen1.svelte";
	import Screen2 from "./Screen2.svelte";
	import Screen4 from "./Screen4.svelte";
	import Screen5 from "./Screen5.svelte";

	let heroImage = 'https://snctm-svelte2.pages.dev/_app/immutable/assets/tux_room-15f19dfe.jpg';
	let header = "A Society of Libertines "
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero heroImage={heroImage} header={header} />
	</div>
	<div class="carousel-item w-screen h-screen">
		<Screen1/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Screen2/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Privilage/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Screen4/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Screen5/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<ExclusiveContent/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>