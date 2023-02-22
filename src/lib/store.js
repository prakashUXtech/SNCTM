import { writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({} );
export const couple = writable(false );
export const apolloClient = writable(null);
export const bgImage = writable("");