<script lang="ts">
	// import logo from '../../../static/logo.svg';
	import { slide } from 'svelte/transition';
	import Logotype from '$lib/Logotype.svelte';
	let hidden = true;
	const toggleMenu = () => {
		hidden = !hidden;
	};
	let y: number;
	function clickOutside(node, { enabled: initialEnabled, cb }) {
		const handleOutsideClick = ({ target }) => {
			if (!node.contains(target)) {
				cb();
			}
		};
		function update({ enabled }) {
			if (enabled) {
				window.addEventListener('click', handleOutsideClick);
			} else {
				window.removeEventListener('click', handleOutsideClick);
			}
		}
		update({ enabled: initialEnabled });
		return {
			update,
			destroy() {
				window.removeEventListener('click', handleOutsideClick);
			}
		};
	}
</script>

<svelte:window bind:scrollY={y} />

<div
	class:shadow-lg={y > 5}
	class="md:hidden sticky top-0 z-50 flex py-2 h-14 bg-[#222222]"
	use:clickOutside={{ enabled: !hidden, cb: () => (hidden = true) }}
>
	<div class="flex w-auto">
		<div class="mx-auto">
			<a href="/">
				<Logotype color="snctm-brown" />
			</a>
		</div>
		<!--        <a-->
		<!--                id="home"-->
		<!--                href="/"-->
		<!--                class="text-3xl text-gray-700 font-nunito font-medium tracking-wide ml-2 mr-6">svelvet</a-->
		<!--        >-->
	</div>
	<button class="outline-none mobile-menu-button absolute right-5 mt-2" on:click={toggleMenu}>
		<div id="navMenu" class:active={!hidden}>
			<span /><span /><span />
		</div>
	</button>
</div>

{#if !hidden}
	<div
		transition:slide
		class="md:hidden absolute w-auto z-50 mobile-menu border px-8 bg-gray-100 text-gray-700"
	>
		<ul class="">
			<li>
				<a on:click={toggleMenu} href="/experience" class="block py-4">The Experience</a>
			</li>
			<li>
				<a on:click={toggleMenu} href="/membership" class="block py-4">Membership</a>
			</li>
			<li>
				<a on:click={toggleMenu} href="/events" class="block py-4">Events</a>
			</li>
			<li>
				<a on:click={toggleMenu} href="/boutique" class="block py-4">Boutique</a>
			</li>
			<li>
				<a on:click={toggleMenu} href="/apply" class="block py-4">Apply</a>
			</li>
			<li>
				<a on:click={toggleMenu} href="/contact" class="block py-4">Contact Us</a>
			</li>
			<li>
				<form name="login" action="/auth/login" method="post">
					<button type="submit" class="block py-4"> Sign In </button>
				</form>
			</li>
		</ul>
	</div>
{/if}

<style>
	#navMenu > span {
		display: block;
		width: 28px;
		height: 3px;
		border-radius: 3px;
		@apply bg-snctm-brown;
	}
	#navMenu > span:not(:last-child) {
		margin-bottom: 7px;
	}
	#navMenu,
	#navMenu > span {
		transition: all 0.2s ease-in-out;
	}
	#navMenu.active {
		transition-delay: 0.4s;
		transform: rotate(45deg);
	}
	#navMenu.active > span:nth-child(2) {
		width: 0;
	}
	#navMenu.active > span:nth-child(1),
	#navMenu.active > span:nth-child(3) {
		transition-delay: 0.2s;
	}
	#navMenu.active > span:nth-child(1) {
		transform: translateY(10px);
	}
	#navMenu.active > span:nth-child(3) {
		transform: translateY(-10px) rotate(90deg);
	}

	a,
	button {
		font-family: 'Playfair Display SC', serif;
		font-size: 1.4rem;
	}
</style>
