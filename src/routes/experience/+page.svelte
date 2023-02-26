<script>
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Daring from "./Daring.svelte";
	import Event0 from "./Event0.svelte";
	import Event1 from "./Event1.svelte";
	import Event2 from "./Event2.svelte";
	import Video from "./Video.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	
	let heroImage = "https://snctm-svelte2.pages.dev/_app/immutable/assets/harp-0f172c48.jpg";
	let header = "High Sensual "
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero heroImage={heroImage} header={header} artbox={true}/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Daring />
	</div>
	<div class="carousel-item w-screen h-screen">
		<Video/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Event0/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Event1/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Event2/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<ExclusiveContent/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>