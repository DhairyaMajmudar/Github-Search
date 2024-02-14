import Body from "./components/Body";
import Header from "./components/Header";

import { useSelector } from "react-redux";
import { selectUserName } from "./redux/slice/userSlice";

// Fetching Github GraphQl API
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const defaultName = "DhairyaMajmudar";
const userName = JSON.stringify(defaultName) || "DhairyaMajmudar";

const { data } = await client.query({
  query: gql`
      {
        user(login: ${userName}) {
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

export default function Home() {
  const userName = useSelector(selectUserName);

  return (
    <ApolloProvider client={client}>
      <section className="flex justify-center">
        <div>
          <Header />
          <Body
            name={user.name}
            bio={user.bio}
            avatarUrl={user.avatarUrl}
            company={user.company}
            websiteUrl={user.websiteUrl}
            followers={user.followers.totalCount}
            following={user.following.totalCount}
            pullRequests={user.pullRequests.totalCount}
            twitterUsername={user.twitterUsername}
          />
        </div>
      </section>
    </ApolloProvider>
  );
}
