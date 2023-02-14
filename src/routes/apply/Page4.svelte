<div class="lg:h-screen h-auto w-screen  flex justify-center items-center bg-base-100">
	<div class="max-w-screen-lg mx-auto  flex flex-col py-10 px-4 justify-center items-center">
		<div class="space-y-8 flex justify-center items-center">
			<center><img src="line/line2-apply-page.svg" class="" alt="" /></center>
			<img src="images/apply-img-3.png" class="w-[60%]" alt="" />
			<!-- <img src="images/navlogo-black.png" class="absolute w-32 top-0 " alt=""> -->
		</div>

		<div>
			<div class="flex sm:flex-row flex-col items-start space-x-2 max-w-3xl my-5 ">
				{#each Array(2) as _}
					<div class="h-16 w-[4.5rem] bg-base-200 rounded-xl grid place-items-center flex-shrink-0">
						<img class="h-8 w-8 object-contain" src="images/apply-img-4.png" alt="" />
					</div>

					<div class="text-sm flex-1">
						<h4 class="font-bold font-Bodani  text-lg">Completely Confidential</h4>
						<p class="">Applications are sent using TLS encryption protocols to protect.</p>
					</div>
				{/each}
			</div>

			<center>
				<button
					class="btn normal-case shadow-xl text-center btn-md 
                    hover:bg-secondary/50 hover:border-none   
                    flex sm:px-44 px-20 py-1 rounded-md border-2 
                    justify-between my-4 text-neutral text-xl font-bold 
                    bg-accent/60 border-secondary space-x-3"
					>Begin</button
				>
				<p class="text-neutral">
					*Something important that user should know before starting the application.
				</p>
			</center>
		</div>
	</div>
</div>
