<script>
	import Hero from "$lib/components/Hero.svelte";
	import ContactForm from "./ContactForm.svelte";
	let heroImage = "https://snctm-svelte2.pages.dev/_app/immutable/assets/satin-57120830.jpg"
	let header=""
	import Footer2 from "$lib/footer/Footer2.svelte";
</script>

<div class="h-screen w-screen">
	<div class="h-[120vh] relative">
		<Hero heroImage={heroImage} header={header}/>
		<div class="absolute left-0 right-0 sm:top-[14%] top-[10%] ">
			<ContactForm/>
		</div>
	</div>
	
	<div class=" w-screen">
		<Footer2 />
	</div>
</div>