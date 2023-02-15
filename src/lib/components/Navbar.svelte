<script>
    import { page } from "$app/stores"
    $: routeId = $page.route.id

    let mobileNav = false
</script>

<nav class="max-w-3xl px-4 mx-auto pt-8">
    <div class="flex justify-between">
        <a href="/">
            <div class="flex space-x-5 items-center">
                <img src="/images/navlogo.svg" alt="">
                <h1 class="text-4xl text-accent/70 font-Bodoni">SNTCM</h1>
            </div>
        </a>
        <div class="space-x-2">   
            <button class="border-2 btn-sm mt-3 text-primary/70">SIGN IN</button>
            <button on:click={()=>{mobileNav=!mobileNav}}
            class="border-2 btn-sm mt-3 text-white/70 md:hidden">
                Menu
            </button>
        </div>
     
    </div>
    <div class="font-mono relative">
        <ul class="lg:flex hidden justify-between text-accent/60 mt-5 mb-2">
            <li class=""><a href="/experience" class:tabActive={routeId === "/experience"}>THE EXPERIENCE</a></li>
            <li><a href="/membership" class:tabActive={routeId === "/membership"}>MEMBERSHIP</a></li>
            <li><a href="/events" class:tabActive={routeId === "/events"}>EVENTS</a></li>
            <li><a href="/our-story" class:tabActive={routeId === "/our-story"}>OURSTORY</a></li>
            <li><a href="/apply" class:tabActive={routeId === "/apply"}>APPLY</a></li>
            <li><a href="/contact" class:tabActive={routeId === "/contact"}>CONTACT US</a></li>
        </ul>
        <div> <hr class="ml-0s border-accent/50 lg:flex hidden"> </div>
        {#if mobileNav}
        <ul class="flex absolute top-0 w-full z-50 flex-col divide-y md:hidden justify-between text-accent/60 mt-12 mb-2">
            <a href="/experience" class:tabActive={routeId === "/experience"}>THE EXPERIENCE</a>
            <a href="/membership" class:tabActive={routeId === "/membership"}>MEMBERSHIP</a>
            <a href="/events" class:tabActive={routeId === "/events"}>EVENTS</a>
            <a href="/our-story" class:tabActive={routeId === "/our-story"}>OURSTORY</a>
            <a href="/apply" class:tabActive={routeId === "/apply"}>APPLY</a>
            <a href="/contact" class:tabActive={routeId === "/contact"}>CONTACT US</a>
        </ul>
        {/if}
    </div>
</nav>