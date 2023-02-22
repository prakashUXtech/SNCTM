<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { FloatingLabelInput } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	import { Turnstile } from 'svelte-turnstile';
	import Input from '$lib/components/Input.svelte';
</script>

<div class="max-w-2xl w-full mx-auto flex flex-col justify-center mt-14 px-5  text-center  ">
	<h1 class="text-5xl font-bold font-Bodoni text-base-100 pink-gradient">Contact us</h1>
	<section
		class="bg-cover bg-center w-full h-full flex flex-col justify-center  items-center mt-5 max-w-3xl mx-auto py-14 px-10"
		style="background-image: url('images/exclusive-bg.png');"
	>
		<p class="text-neutral mb-4">
			Be first to receive exclusive content and information regarding upcoming events. We won’t
			share your information with anyone, ever.
		</p>
		<div class="w-full">
			<form method="POST" use:enhance class="flex flex-col w-full px-5 md:px-20 space-y-5">
				<Turnstile siteKey="0x4AAAAAAABejZKexgF5THqP" theme="dark" />

				<Input id="name" name="name" type="text" required={true} placeholder="Name" />
				<Input id="email" name="email" type="email" required={true} placeholder="Email Address" />
				<Input id="subject" name="subject" type="text" required={true} placeholder="Subject" />
				<Input id="message" name="message" type="text" required={true} placeholder="Message" />

				<button
					class="mx-auto button h-10 py-0 px-10 mt-5 mb-0 border border-zinc-500 uppercase text-zinc-500 hover:text-zinc-800"
					type="submit">Submit</button
				>
			</form>
		</div>
		<p class="text-neutral/50 mt-5 px-10 text-sm">
			*There is no one who loves pain itself, who seeks after it and wants to have it.
		</p>
	</section>
</div>
