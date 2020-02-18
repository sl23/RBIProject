import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory"
import { onError } from "apollo-link-error"
import introspectionQueryResultData from "./fragmentTypes.json"

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

// tells apolloprovider connect info for backend database

let apolloClient = null
const cache = new InMemoryCache({ fragmentMatcher })

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
  cache
})

export default apolloClient
