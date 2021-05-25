import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createUserSession: UserSession;
  deleteUserSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateUserSessionArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeleteUserSessionArgs = {
  me: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  userSession?: Maybe<UserSession>;
};


export type QueryUserSessionArgs = {
  me: Scalars['Boolean'];
};


export type User = {
  __typename?: 'User';
  username: Scalars['ID'];
  role: Scalars['String'];
};

export type UserSession = {
  __typename?: 'UserSession';
  createdAt: Scalars['Date'];
  expiresAt: Scalars['Date'];
  user: User;
};

export type CreateUserSessionMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserSessionMutation = (
  { __typename?: 'Mutation' }
  & { createUserSession: (
    { __typename?: 'UserSession' }
    & Pick<UserSession, 'expiresAt' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'role'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUserSession'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { userSession?: Maybe<(
    { __typename?: 'UserSession' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'role'>
    ) }
  )> }
);


export const CreateUserSessionDocument = gql`
    mutation CreateUserSession($username: String!, $password: String!) {
  createUserSession(username: $username, password: $password) {
    user {
      username
      role
    }
    expiresAt
    createdAt
  }
}
    `;
export type CreateUserSessionMutationFn = Apollo.MutationFunction<CreateUserSessionMutation, CreateUserSessionMutationVariables>;

/**
 * __useCreateUserSessionMutation__
 *
 * To run a mutation, you first call `useCreateUserSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSessionMutation, { data, loading, error }] = useCreateUserSessionMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserSessionMutation, CreateUserSessionMutationVariables>(CreateUserSessionDocument, options);
      }
export type CreateUserSessionMutationHookResult = ReturnType<typeof useCreateUserSessionMutation>;
export type CreateUserSessionMutationResult = Apollo.MutationResult<CreateUserSessionMutation>;
export type CreateUserSessionMutationOptions = Apollo.BaseMutationOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  deleteUserSession(me: true)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  userSession(me: true) {
    user {
      username
      role
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;