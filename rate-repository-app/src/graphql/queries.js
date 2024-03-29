import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
    totalCount
    edges {
      node {
        id
        name
        ownerName
        createdAt
        fullName
        reviewCount
        ratingAverage
        forksCount
        stargazersCount
        description
        language
        ownerAvatarUrl
      }
      cursor
    }
  }
}
`

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      name
      ownerName
      createdAt
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

// export const GET_USER = gql`
//   query Me {
//     me {
//       id
//       username
//     }
//   }
// `;

export const GET_USER = gql`
query getCurrentUser($includeReviews: Boolean = false)
{
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            repository {
              reviews {
                edges {
                  node {
                    id
                    text
                    rating
                    createdAt
                    user {
                      id
                      username
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

export const GET_REPOSITORY_URL = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      url
    }
  }
`;

export const LOGIN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const GET_REVIEWS = gql`
query Node($repositoryId: ID!) {
  repository(id: $repositoryId) {
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`
