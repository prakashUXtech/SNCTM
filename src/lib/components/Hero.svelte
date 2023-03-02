<script>
	import { page } from '$app/stores';
	import MainNav from '../header/MainNav.svelte';
	$:routeId = $page.route.id
	import Navbar from './Navbar.svelte';
	export let heroImage,header,artbox;
</script>

<div class="w-screen {routeId=="/contact" ? "h-[120vh]" :"h-screen"} ">
	<section
		class="bg-cover bg-center w-full h-full relative"
		style="background-image: url({heroImage});"
	>
	<div class="absolute top-0 left-0 inset-0 bg-black/30"></div>
	<div class="w-full">
		<!-- <Navbar /> -->
		<MainNav />
	</div>
		
	<div class="max-w-5xl mx-auto h-[85vh]  relative">
			<div class="space-y-1 absolute lg:left-0 left-10 top-28">
				<img src="line/group-line.svg" alt="">
			</div>
			<div class="absolute lg:right-0 right-10 bottom-16">
				<img src="line/line4.svg" alt="">
			</div>
		
		<div
			class="max-w-lg w-full mx-auto text-center absolute bottom-36 left-0 
			right-0 "
		>
		<div class="{artbox ? "flex flex-col items-center lg:flex-row" :""} gap-x-5">
			<h1 class="text-4xl pl-20 font-Bodoni font-bold mt-5 text-accent">{header}</h1>
			
			<div class="grid w-[131px] h-[72px] place-items-center relative {!artbox ? "hidden" :""} 
			bg-center bg-cover bg-[url('images/highsensual-art.svg')]">
				<h3 class="font-Bodoni text-2xl font-bold text-white">ART</h3>
			</div>
		</div>
		{#if routeId != "/contact"}<div class="h-[.5px] w-[20rem] mt-4 bg-accent"></div>{/if}
	</div>
		
	</div>
	<!-- {#if routeId == "/membership"}
		<div class="absolute w-screen -bottom-5 backdrop-blur-[20px] bg-opacity-30 ">
			<img src="images/membership-img-1.png" alt="">
		</div>
	{/if} -->
	</section>
</div>
