<script>
  import { fade } from 'svelte/transition';
</script>

<form name = "login" action = "/auth/login" method = "post">
  <button type="submit" transition:fade
          class="text-sm uppercase tracking-widest mt-1 text-snctm-brown login-button leading-tight border border-snctm-brown px-2 py-1 shadow hover:shadow-sm hover:underline" >
    Sign In
  </button>
</form>

<style>
    .login-button {
        grid-row: 1;
        grid-column: 1;

        /*font-family: "Playfair Display SC", serif;*/
        /*font-family: scotch-display-compressed, serif;*/
        font-family: semplicitapro, sans-serif

    }
</style>