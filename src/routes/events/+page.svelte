<script>
	import Events from './Events.svelte';
	import Benifits from './Benifits.svelte';
	import ElegantOrder from './ElegantOrder.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer2 from "$lib/footer/Footer2.svelte";
	import ExclusiveContent from '$lib/components/ExclusiveContent.svelte';
	
	let heroImage = 'https://snctm-svelte2.pages.dev/_app/immutable/assets/table_set-4b4e0779.jpg';
	let header = "Soirees"
</script>


<div class="h-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item h-screen w-screen">
		<Hero heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item lg:h-full w-screen">
		<Events/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<Benifits/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<ElegantOrder/>
	</div> 
	<div class="carousel-item h-full w-screen">
		<ExclusiveContent/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>

