// import purest from "purest";

// const auth0client = async function auth0({ access_token }) {
//   const auth0 = purest({ provider: 'auth0' });
//
//   return auth0
//     .get('userinfo')
//     .subdomain('snctm')
//     .auth(access_token)
//     .request()
//     .then(({ body }) => {
//       const username = body.username || body.nickname || body.name || body.email.split('@')[0];
//       const email = body.email || `${username.replace(/\s+/g, '.')}@strapi.io`;
//       const name = body.name;
//       const auth0Id = body.sub;
//       const picture = body.picture;
//       const membership = body['https://snctm.com/membership'];
//       const membership_start = body['https://snctm.com/membership_start'];
//       const membership_expires = body['https://snctm.com/membership_expires'];
//
//       return {
//         username,
//         email,
//         name,
//         auth0Id,
//         picture,
//         membership,
//         membership_start,
//         membership_expires,
//       };
//     });
// }

// Re-do previous function to use fetch instead of purest
// import fetch from 'node-fetch';
const user = async function auth0user({ access_token }) {
  const auth
    = 'https://snctm.auth0.com/userinfo'
    + '?access_token=' + access_token;
  const response = await fetch(auth);
  const body = await response.json();
  const username = body.username || body.nickname || body.name || body.email.split('@')[0];
  const email = body.email || `${username.replace(/\s+/g, '.')}@strapi.io`;
  const name = body.name;
  const auth0Id = body.sub;
  const picture = body.picture;
  const membership = body['https://snctm.com/membership'];
  const membership_start = body['https://snctm.com/membership_start'];
  const membership_expires = body['https://snctm.com/membership_expires'];

  return {
    username,
    email,
    name,
    auth0Id,
    picture,
    membership,
    membership_start,
    membership_expires,
  };

}




// export default auth0client;
export default user;