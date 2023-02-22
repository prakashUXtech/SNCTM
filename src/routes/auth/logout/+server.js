/** @type {import("./$types").RequestHandler} */
export function POST({ locals, cookies }) {
  locals.user = {};

  cookies.delete("access_token", { path: "/" });
  cookies.delete("j", { path: "/" });

  return new Response("", {
    status: 302,
    headers: {
      "Location": "/"
    }
  });

}