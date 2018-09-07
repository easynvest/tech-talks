import gql from 'graphql-tag';

const searchQuery = gql`
  query searchQuery($search: String!) {
    organization(username: $search) {
      name
      repositories {
        name
        language
        stargazers_count
      }
    }
    videos(keyword: $search) {
      id
      channelId
      title
      description
      publishedAt
    }
  }
`;

export default searchQuery;
