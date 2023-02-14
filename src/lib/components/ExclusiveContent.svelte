<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<section
	class="bg-cover bg-center w-screen h-screen font-Bodoni "
	style="background-image: url('/images/home/footer-hero.png'); "
>
	<div class="max-w-2xl mx-auto flex justify-center items-center h-full">
		<div class="w-full mt-44 mx-4 lg:mx-0 px-4 sm:px-20 text-center border-secondary/50 
		border-[.2rem] bg-neutral/50 backdrop-blur-[15px] py-10">

			<h1 class="text-4xl text-base-100 mb-2 font-Bodoni font-bold">
				{routeId == '/events' ? 'SNCTM Private Events' : 'Exclusive Content'}
			</h1>
			<p class="text-base-100 text-sm font-sans">
				{routeId == '/events'
					? 'Experience the unparalleled world of SNCTM with your own discerning guests.'
					: 'Receive exclusive content and information regarding upcoming events'}
			</p>
			{#if routeId != '/events'}
				<div class=" mt-20 px-5">
					<input
						type="email"
						placeholder="Email Adress"
						class="border-0 py-1 bg-transparent text-base-100 border-b px-2
                        border-secondary/50 placeholder-info/60  w-full"
					/>
				</div>
			{/if}
			<div>
				<button
					class="btn btn-outline hover:bg-secondary hover:text-neutral hover:border-secondary 
                    btn-xs h-3 text-secondary shadow-lg border-2 
                    border-secondary px-2 my-5 text-sm font-mono rounded-none {routeId == '/events'
						? 'mt-28'
						: ''}">{routeId == '/events' ? 'LEARN MORE' : 'SUBSCRIBE'}</button
				>
			</div>
			<p class="text-base-100/30 ">
				{routeId == '/events'
					? 'Bespoke events can be produced for any occasion at any locale.'
					: '*All information remains confidential.'}
			</p>
		</div>
	</div>
</section>
