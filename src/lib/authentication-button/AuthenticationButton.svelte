<script>
  import LoginButton from "./LoginButton.svelte";
  import LogoutButton from "./LogoutButton.svelte";
  import { page } from "$app/stores";
</script>

<div class="float-right login-button-container">
  {#if $page.data?.user?.username}
    <div class="text-snctm-brown">{$page.data?.user?.username}</div>
    <LogoutButton />
  {:else}
    <LoginButton />
  {/if}
</div>

<style>
    .login-button-container{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
</style>