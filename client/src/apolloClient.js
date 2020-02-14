import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"

// tells apolloprovider connect info for backend database

let apolloClient = null

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
  // single line if statement. If gralQLErrors = true, console.log every error message in the errors.
})

const httpLink = createHttpLink({
  uri: "https://y9mhz9pl.api.sanity.io/v1/graphql/staging_th_dummy/default",
  credentials: "include"
})

apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

export default apolloClient
