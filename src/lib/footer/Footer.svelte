<script>
  // import Icon from 'svelte-awesome';
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import facebookSquare from 'svelte-awesome/icons/facebookSquare';
  import instagram from 'svelte-awesome/icons/instagram';
  import envelopeO from 'svelte-awesome/icons/envelopeO';
  // import { facebookSquare, cameraRetro } from "svelte-awesome/icons"; // alternative, more efficient import
</script>

<footer class="bg-gradient-to-t from-black h-full pb-5 px-5 md:px-0">
  <div class="w-full mx-auto grid grid-cols-3 pt-6">
    <div class="w-full md:space-x-8 col-span-2">
      <div class="text-white inline-block align-middle">
        <a href="/">PERFORMERS</a>
      </div>
      <div class="text-white inline-block align-middle">
        <a href="/">ETHOS</a>
      </div>
      <div class="text-white inline-block align-middle">
        <a href="/">FAQ</a>
      </div>
    </div>
<!--    <div class="">-->

<!--    </div>-->
    <div class="flex justify-end">
      <!--    <div class="inline-block" style="color:white;">-->
      <!--      <Icon data={facebookSquare} />-->
      <!--    </div>-->
      <div class="pr-5" style="color:white;">
        <a href="https://instagram.com/snctmsociety" target="_blank">
          <Icon data={instagram}  scale="1.5" />
        </a>
      </div>
      <div class="" style="color:white;">
        <a href="mailto:info@snctm.com">
          <Icon data={envelopeO} scale="1.5" />
        </a>
      </div>
    </div>
    <div class="col-span-3">
      <div class="w-full text-snctm-brown copyright text-xs">(c) 2022 SNCTM</div>
    </div>
  </div>
</footer>

<style>
  footer a {
      font-family: "semplicitapro", sans-serif;
      @apply text-snctm-brown;
      letter-spacing: 0.075rem;
      @apply text-xs;
      /*font-size: 0.85rem;*/
      /*font-size: 13pt;*/
  }
</style>