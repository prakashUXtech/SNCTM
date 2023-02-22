// import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
// import { browser } from "$app/environment";
// import { fetch } from "$app"

// const link = new HttpLink({
//   uri: import.meta.env.VITE_API_SERVER_URL + '/graphql',
//   credentials: 'include',
//   fetch: !browser ? fetch : undefined,
// });
//
// const cache = new InMemoryCache();
//
// const apolloClient = new ApolloClient({
//   ssrMode: !browser,
//   link,
//   cache,
//   credentials: 'include',
// });
//
// export default apolloClient;