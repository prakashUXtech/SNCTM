<script>
  import { fade } from 'svelte/transition';
</script>

<form action="/auth/logout" method="post">
  <button transition:fade class="text-sm uppercase tracking-widest mt-1 text-snctm-brown logout-button btn-light leading-tight border border-snctm-brown px-2 py-1  shadow hover:shadow-sm hover:underline">
    Log Out
  </button>
</form>

<style>
    .logout-button {
        /*grid-row: 1;*/
        /*grid-column: 1;*/
    }
</style>