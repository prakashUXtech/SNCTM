<script>
	import Hero from "$lib/components/Hero.svelte";
	import ContactForm from "./ContactForm.svelte";
	let heroImage = 'images/herohome.png';
	let header=""
</script>

<div class="h-screen w-screen carousel overflow-x-hidden">
	<div class=" w-screen h-screen relative">
		<Hero heroImage={heroImage} header={header}/>
	</div>
	<div class="absolute left-0 right-0 sm:top-[14%] top-[10%] ">
		<ContactForm/>
	</div>

</div>