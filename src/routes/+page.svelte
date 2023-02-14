<script>
	import Society from "$lib/components/home/Society.svelte";
	import ExclusiveOrder from "$lib/components/home/ExclusiveOrder.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	let heroImage='images/home/home-hero.png'
	let header = "Know yourself"
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Society/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<ExclusiveOrder/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<ExclusiveContent/>
	</div>
</div>
	
