<script>
	import Hero from "$lib/components/Hero.svelte";
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Story from "./Story.svelte";
	import Art from "./Art.svelte";
	import NewEra from "./NewEra.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	
	let heroImage = 'images/our-story/hero.png';
	let header="Our Story"
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Story/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Art/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<NewEra/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>