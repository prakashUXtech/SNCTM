<div class="w-screen lg:h-screen h-auto  bg-base-100 ">
	<div class="flex flex-row justify-end items-center lg:mx-32 mx-10 py-10">
		<span class="membership-text text-xl text-right font-bold font-Bodoni ">
			Three Levels of Exclusive <br /> Mmembership
		</span>
		<hr class="border-[#78643E] w-32 ml-8" />
	</div>

	<div class="max-w-5xl px-4 mx-auto ">
		<div class="">
			<p class="text-[#676767] max-w-xs">
				Each level affords even more exclusive access and greater levels of privilege.
			</p>
			<div class="flex sm:flex-row flex-col pt-6 sm:space-x-4 space-x-0 sm:space-y-0 space-y-4 ">
				{#each Array(3) as _}
					<div class="flex flex-col justify-between">
						<div class="bg-[#FFFFFF] ">
							<img src="images/membership-img-5.png" 
							class="w-[22rem] py-1 flex justify-center" alt="" />
							<h4 class="text-[#94697E] bg-[#F8EFEF] text-center text-lg py-2">
								Aurum Membership
							</h4>
							<ul class="px-4 pt-2 pb-10 space-y-4 text-[#5B4824] leading-9">
								<li class="flex space-x-2">
									<img src="images/right.svg" alt="" />
									<p>Entry to all Masquerades</p>
								</li>
								<li class="flex space-x-2">
									<img src="images/right.svg" alt="" />
									<p>50% Off VIP tables & addons</p>
								</li>
								<li class="flex space-x-2">
									<img src="images/right.svg" alt="" />
									<p>50% Off Special Events</p>
								</li>
								<li class="flex space-x-2">
									<img src="images/right.svg" alt="" />
									<p>SNCTM Private Events</p>
								</li>
							</ul>
						</div>
						<button
							class="flex justify-between text-[#78643E] px-4 border-4 
							bg-[#F7F6E9] py-2 border-[#CAAC71] shadow-lg items-center"
						>
							<p>$12,500/Year</p>
							<a href="/" class="flex"><img src="images/arrow.svg" alt="" /></a>
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
