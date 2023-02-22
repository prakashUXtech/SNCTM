  /**
   * @type {import('@sveltejs/kit').Post}
   */
export async function POST( { request }) {
  return new Response(undefined, {
    status: 302,
    headers: {
      "Location": import.meta.env.VITE_API_SERVER_URL + '/api/connect/auth0',
    }
  })
}
