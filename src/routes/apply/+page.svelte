<script>
	import Hero from "$lib/components/Hero.svelte";
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Page1 from "./Page1.svelte";
	import Page2 from "./Page2.svelte";
	import Page3 from "./Page3.svelte";
	import Page4 from "./Page4.svelte";
	let heroImage = 'images/apply/hero.png';
	let header = "Apply to Attend"
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero  heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Page1/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Page2/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Page3/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Page4/>
	</div>
</div>