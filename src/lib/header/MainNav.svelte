<script>
    import Logotype from "$lib/Logotype.svelte";
    import AuthenticationButton from "$lib/authentication-button/AuthenticationButton.svelte";
    import TopNav from "$lib/header/TopNav.svelte";
</script>

<nav class="max-w-screen-md px-4 mx-auto pt-8">
    <div class="hidden md:flex py-4 mx-auto justify-between">
        <a href="/">
          <Logotype color="snctm-brown" />
        </a>
        <div class="relative z-50">
          <AuthenticationButton />
        </div>
    </div>
    <TopNav />
</nav>

