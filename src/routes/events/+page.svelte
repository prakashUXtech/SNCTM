<script>
	import Event1 from './Event1.svelte';
	import Event2 from './Event2.svelte';
	import Event3 from './Event3.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer2 from "$lib/footer/Footer2.svelte";

	import ExclusiveContent from '../../lib/components/ExclusiveContent.svelte';
	let heroImage = 'images/events/hero.png';
	let header = "Soirees"
</script>


<div class="h-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item h-screen w-screen">
		<Hero heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item h-full w-screen">
		<Event1/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<Event2/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<Event3/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<ExclusiveContent/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>

