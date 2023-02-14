<script>
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
import Hero from "$lib/components/Hero.svelte";
	import Privilage from "./Privilage.svelte";
	import Screen1 from "./Screen1.svelte";
	import Screen2 from "./Screen2.svelte";
	import Screen4 from "./Screen4.svelte";
	import Screen5 from "./Screen5.svelte";
	let heroImage = 'images/membership/hero.png';
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
</div>