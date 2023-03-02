<script>
	import Hero from "$lib/components/Hero.svelte";
	import ExclusiveContent from "$lib/components/ExclusiveContent.svelte";
	import ExclusiveOrder from "./ExclusiveOrder.svelte";
	import MinimumMembership from "./MinimumMembership.svelte";
	import WelcomeWomen from "./WelcomeWomen.svelte";
	import BeginApplication from "./BeginApplication.svelte";
	import Footer2 from "$lib/footer/Footer2.svelte";
	
	let heroImage = 'https://snctm-svelte2.pages.dev/_app/immutable/assets/poolside-64a8dfa3.jpg';
	let header = "Apply to Attend"
</script>

<div class="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
	<div class="carousel-item w-screen h-screen">
		<Hero  heroImage={heroImage} header={header}/>
	</div>
	<div class="carousel-item lg:w-screen lg:h-screen">
		<ExclusiveOrder />
	</div>
	<div class="carousel-item lg:w-screen lg:h-screen">
		<MinimumMembership />
	</div>
	<div class="carousel-item w-screen h-screen">
		<WelcomeWomen />
	</div>
	<div class="carousel-item w-screen h-screen">
		<BeginApplication />
	</div>
	<div class="carousel-item w-full">
		<Footer2 />
	</div>
</div>