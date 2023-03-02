<script>
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Privilage from "./Privilage.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	import Benefits from "./Benefits.svelte";
	import MComesFirst from "./MComesFirst.svelte";
	import Membership from "./Membership.svelte";
	import OurMembers from "./OurMembers.svelte";

	let heroImage = 'https://snctm-svelte2.pages.dev/_app/immutable/assets/tux_room-15f19dfe.jpg';
	let header = "A Society of Libertines "
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero heroImage={heroImage} header={header} />
	</div>
	<div class="carousel-item w-screen h-screen">
		<Benefits />
	</div>
	<div class="carousel-item w-screen h-screen">
		<MComesFirst/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<Privilage/>
	</div>
	<div class="carousel-item py-20 lg:py-0 lg:w-screen lg:h-screen">
		<Membership/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<OurMembers/>
	</div>
	<div class="carousel-item w-screen h-screen">
		<ExclusiveContent/>
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>