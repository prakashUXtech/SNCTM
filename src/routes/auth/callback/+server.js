import auth0client from "$lib/auth0Client.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, locals }) {

  if (!url.searchParams.get('access_token')) {

    return new Response(JSON.stringify({error: 'Missing token'}), {
      status: 400,
      statusText: 'Missing token'
    })
  }

  locals.user = await auth0client({ access_token: url.searchParams.get('access_token') });

  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/auth/auth0/callback?access_token=${url.searchParams.get('access_token')}`);

  try{
    const data = await res.json();

    if (data.jwt) {
      locals.access_token = data.jwt;

      return new Response(JSON.stringify({error: 'Missing token'}), {
        status: 302,
          headers: {
            Location: "/",
            "set-cookie": [
              "j=" + data.jwt + "; Path=/; Max-Age=259200; HttpOnly; Secure; SameSite=Strict",
              "access_token=" + url.searchParams.get('access_token') + "; Path=/; Max-Age=259200; Secure; SameSite=Lax",
              ]
          }
      })
    }
    else {
      return new Response(JSON.stringify({error: 'Missing token'}), {
        status: 401,
        statusText: 'Invalid token'
      })
    }
  } catch {
    console.log('error');
  }
}