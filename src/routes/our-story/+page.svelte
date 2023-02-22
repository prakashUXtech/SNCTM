<script>
	import Hero from "$lib/components/Hero.svelte";
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Story from "./Story.svelte";
	import Story1 from "./Story1.svelte";
	import Story2 from "./Story2.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	
	let heroImage = 'images/hero-ourStory.png';
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
		<Story1/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Story2/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>