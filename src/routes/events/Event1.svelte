

<div class="lg:h-auto h-auto w-screen bg-base-100 relative">
    <div class="lg:mx-20 mx-10 absolute left-0 top-10">
        <div class="flex flex-row">
            <hr class="border-neutral w-32 mt-5 mr-4">
            <h3 class="membership-text text-3xl font-bold  font-Bodoni">Events</h3>
        </div>
    </div>

    <div class="max-w-4xl px-4 mx-auto mt-3 p-10 pt-[5.5rem]">
        <div class="flex sm:flex-row flex-wrap gap-y-4 justify-end space-x-4">
            <button class="bg-base-200 px-6 py-1 text-sm rounded-md shadow-md">Feb 2023</button>
            <button class="bg-base-200 px-6 py-1 text-sm rounded-md btn-disabled">March 2023</button>
            <button class="bg-base-200 px-6 py-1 text-sm rounded-md btn-disabled">April 2023</button>
            <button class="bg-base-200 px-6 py-1 text-sm rounded-md btn-disabled">May 2023</button>
        </div>

        <div class="grid lg:grid-cols-2  grid-cols-1  gap-5 mt-5">
            {#each Array(3) as _}
            <div class="">
                <div class="relative">
                    <img src="images/newyork.png" class="w-[full]" alt="">
                    <div class="flex justify-between w-full px-3 absolute top-5">
                        <button class="btn btn-xs border-0 normal-case leading-none font-sans rounded-full 
                        text-[#AF8635] bg-event-hero-hr px-3">
                        Learn More
                    </button>
                        <div class="membership-text bg-base-200 font-bold font-Bodoni z-6 px-3">New York City</div>
                    </div>
                </div>
                <div class="flex justify-between px-3 py-2 bg-white">
                    <div>
                        <p class="sm:text-base text-sm font- font-semibold">Feb 2023 NYC Masquerade</p>
                        <p class="text-xs text-neutral/60">February 25, 2023, 7:00 PM</p>
                    </div>
                    <div class="mt-3">
                        <button class="btn shadow-lg normal-case btn-sm flex px-2 py-1 rounded-md border-2 
                        justify-between text-[#000000] hover:bg-info text-sm font-mono font-bold bg-event-hero-hr
                         border-button-color 
                        sm:space-x-3 space-x-1">
                            Book Now 
                        <span class="flex  ml-5">
                            <img src="images/arrow.svg" alt="">
                        </span></button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    <!-- <center class="mt-5">
       <p class="text-exclusive-border mb-3">Show More</p>
       <a href="/"><img src="images/downarrow.png" class="animate animate-bounce" alt=""></a>
    </center> -->
</div>