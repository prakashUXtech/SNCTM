import { browser } from "$app/environment";
import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
import { from } from "@apollo/client/link/core/core.cjs";
import { HttpLink} from "@apollo/client/link/http/http.cjs";
import { onError } from "@apollo/client/link/error/error.cjs";
import { apolloClient } from "$lib/store";

/** @type {import("./$types").LayoutLoad} */
export async function load({ data, parent }) {
  // let xxx = await parent();
  // console.log("xxx", xxx);

// Log any GraphQL errors or network error that occurred
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = new HttpLink({
    uri: import.meta.env.VITE_API_SERVER_URL + "/graphql",
    headers: {
      Authorization: data?.access_token ? `Bearer ${data.access_token}` : ""
    },
    fetch: !browser ? fetch : undefined
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    ssrMode: !browser,
    link: from([errorLink, link]),
    cache,
    connectToDevTools: true
  });

  apolloClient.set(client)

  return {
    client: client,
    user: data?.user,
    access_token: data?.access_token
  };
}