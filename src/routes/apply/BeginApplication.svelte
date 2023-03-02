<script>
	const securityContent = [
		{
			img_url :'images/apply-img-4.png',
			title:'Completely Confidential',
			description: 'All applications are strictly confidential and reviewed solely by our Executive Council.'

		},
		{
			img_url :'images/apply/secure.svg',
			title:'Securely Sent',
			description: 'Applications are sent using TLS encryption protocols to protect.'
		}
	]
</script>

<div class="lg:h-screen h-auto w-screen  flex justify-center items-center bg-base-100">
	<div class="max-w-screen-lg mx-auto flex flex-col py-10 px-4 justify-center  items-center">
		<div class="space-y-8 flex justify-center items-center ">
			
			<img src="images/apply/begin.png" class="lg:w-[80%]" alt="" />
			<!-- <img src="images/navlogo-black.png" class="absolute w-32 top-0 " alt=""> -->
		</div>

		<div>
			<div class="flex sm:flex-row flex-col justify-between items-center 
			space-y-5 md:space-y-0 lg:space-x-2 max-w-3xl my-5 lg:pl-8">
				{#each securityContent as c}
					<div class="flex space-x-3"> 
						<div class="h-16 w-[4.5rem] bg-base-200 border border-primary rounded-xl grid 
						place-items-center flex-shrink-0">
							<img class="h-8 w-8 object-contain" src="{c.img_url}" alt="" />
						</div>
						<div class="text-sm flex-1 ">
							<h4 class="font-bold font-Bodoni text-lg">{c.title}</h4>
							<p class="">{c.description}</p>
						</div>
					</div>
					
				{/each}
			</div>

			<center class="pt-4">
				<button
					class="btn  normal-case shadow-xl text-center btn-md 
                    hover:bg-secondary/50 hover:border-none   
                    flex px-44 py-1 rounded-md border-2 
                    justify-between my-3 text-neutral text-lg font-bold 
                    bg-accent border-secondary space-x-3">
					Begin
				</button>
				<p class="text-neutral text-xs">
					*Something important that user should know before starting the application.
				</p>
			</center>
		</div>
	</div>
</div>
