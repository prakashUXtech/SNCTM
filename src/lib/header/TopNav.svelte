<script lang="ts">
	// import logo from '../../../static/logo.svg';
	// import logotype from '../../../static/small_logotype.png';
	import { page } from '$app/stores';
	import MobileHomeNav from './MobileHomeNav.svelte';
	// import MobileDocsNav from './MobileDocsNav.svelte';
	// import AuthenticationButton from "../buttons/AuthenticationButton.svelte";

	$: activeLink = `${$page.url.pathname}`;
	let y: number;

	$: routeId = $page.route.id;

	let inverse = false;
</script>

<svelte:window bind:scrollY={y} />
<!-- Toggled Mobile Navbar -->
<!--{#if activeLink.includes('docs')}-->
<!--    <MobileDocsNav />-->
<!--{:else}-->
<MobileHomeNav />
<!--{/if}-->

<nav class:xxshadow-lg={y > 5} class:pt-66={y > 100} class="relative">
	<ul class="lg:flex hidden justify-between text-accent/60 mt-5 mb-2">
		<a href="/experience" class="hover:underline" class:tabActive={routeId === '/experience'}
			>THE EXPERIENCE</a
		>

		<a href="/membership" class="hover:underline" class:tabActive={routeId === '/membership'}
			>MEMBERSHIP</a
		>
		<a href="/events" class="hover:underline" class:tabActive={routeId === '/events'}>EVENTS</a>
		<a href="/our-story" class="hover:underline" class:tabActive={routeId === '/our-story'}
			>OURSTORY</a
		>
		<a href="/apply" class="hover:underline" class:tabActive={routeId === '/apply'}>APPLY</a>
		<a href="/contact" class="hover:underline" class:tabActive={routeId === '/contact'}>CONTACT US</a
		>
	</ul>
	<div><hr class="ml-0s border-accent/50 lg:flex hidden" /></div>
</nav>

<style>
	nav {
		/*font-family: 'Playfair Display SC', serif;*/
		text-transform: uppercase;
		font-size: 0.9rem;
	}

	a {
		/*font-family: arno-pro-small-text, serif;*/
		/*font-family: "Playfair Display SC", serif;*/
		font-family: semplicitapro, sans-serif;
		/*text-transform: uppercase;*/
		/*font-weight: 600;*/
		letter-spacing: 0.075rem;
		font-size: 0.85rem;
		/*font-size: 13pt;*/
		/*color: #a09887;*/
		@apply text-snctm-brown;
	}
</style>
