import auth0client from "$lib/auth0Client.js";

/** @type {import("@sveltejs/kit").Handle} */
export async function handle({ event, resolve }) {
  const access_token = event.cookies.get("access_token");
  const j = event.cookies.get("j") || "";

  if (access_token) {
    // @ts-ignore
    event.locals.access_token = j;

    if (!event.locals?.user) {
      let auth0user;

      try {
        auth0user = await auth0client({ access_token: access_token });
      } catch (e) {
        console.log("auth error", e);

        // return new Response(JSON.stringify({error: 'Authentication error'}), {
        //   status: 401,
        //   statusText: 'Authentication error'
        // })

        auth0user = null;
      }

      event.locals.user = auth0user;
    }
  }

  // endpoint call
  return resolve(event);
}

