<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>


<div
	class="max-w-2xl w-full mx-auto flex flex-col justify-center mt-10 px-5  text-center  "
	>
	<h1 class="text-5xl font-bold font-Bodoni text-base-100">Contact us</h1>
	<section
	class="bg-cover bg-center w-full h-full flex flex-col justify-center  items-center  max-w-3xl mx-auto my-10 py-10 px-5"
	style="background-image: url('images/exclusive-bg.png');"
	>
				<p class="text-neutral mb-10">
					Be first to receive exclusive content and information regarding upcoming events. We won’t
					share your information with anyone, ever.
				</p>
				<div class="w-[60%]">
				<form action="" >
					<div>
						<input
							type="text"
							placeholder="Name"
							class="border-b-[1px] py-1 bg-transparent text-neutral border-b-neutral/30 px-2 placeholder-secondary/100 w-full mb-5"
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email"
							class="border-b-[0.1px] py-1 bg-transparent text-neutral border-b-neutral/30 px-2 placeholder-secondary/100 w-full "
						/>
					</div>
                    <div>
						<input
							type="text"
							placeholder="Your Message"
							class="border-b-[0.1px] py-1 mt-20 bg-transparent text-neutral border-b-neutral/30 px-2 placeholder-secondary/100 w-full "
						/>
					</div>
					<div>
						<button class="btn btn-sm hover:bg-secondary hover:text-neutral hover:border-secondary 
						 rounded-none text-secondary/100 border-2 border-secondary bg-base-100/70 text-lg px-5 my-5"
							>SEND</button
						>
					</div>
				</form>
			</div>
				<p class="text-neutral/50  px-10 text-sm">.**There is no one who loves pain itself, who seeks after it and wants to have it.</p>
		</section>
	</div>
	
