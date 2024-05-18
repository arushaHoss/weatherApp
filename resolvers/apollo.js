import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

// Create an Apollo Client instance
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Your GraphQL API endpoint
});

// Install the Vue Apollo plugin
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
