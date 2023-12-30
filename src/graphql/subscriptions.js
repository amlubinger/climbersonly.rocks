/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProblem = /* GraphQL */ `
  subscription OnCreateProblem(
    $filter: ModelSubscriptionProblemFilterInput
    $owner: String
  ) {
    onCreateProblem(filter: $filter, owner: $owner) {
      id
      title
      description
      grade
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProblem = /* GraphQL */ `
  subscription OnUpdateProblem(
    $filter: ModelSubscriptionProblemFilterInput
    $owner: String
  ) {
    onUpdateProblem(filter: $filter, owner: $owner) {
      id
      title
      description
      grade
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProblem = /* GraphQL */ `
  subscription OnDeleteProblem(
    $filter: ModelSubscriptionProblemFilterInput
    $owner: String
  ) {
    onDeleteProblem(filter: $filter, owner: $owner) {
      id
      title
      description
      grade
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
