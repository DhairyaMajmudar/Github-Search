import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

export async function fetch() {
    const httpLink = createHttpLink({
        uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
            },
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    // Replace with your user Dhiray
    const defaultName = "DhairyaMajmudar";
    const { data } = await client.query({
        query: gql`
      {
        user(login: ${"" || JSON.stringify(defaultName)}  ) {
          avatarUrl
          company
          websiteUrl
          name
          twitterUsername
          bio
          pullRequests {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
        }
      }
    `,
    });

    const { user } = data;

    const props = { user };

    return props;
}