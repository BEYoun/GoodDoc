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


export type Cabinet = {
  __typename?: 'Cabinet';
  id: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createUserClient: Profile;
  createUserSession: UserSession;
  deleteUserSession: Scalars['Boolean'];
  createCabinet: Cabinet;
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  role: Scalars['String'];
};


export type MutationCreateUserClientArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  role: Scalars['String'];
  cabinetId: Scalars['String'];
};


export type MutationCreateUserSessionArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeleteUserSessionArgs = {
  me: Scalars['Boolean'];
};


export type MutationCreateCabinetArgs = {
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  username: Scalars['String'];
  cabinet: Cabinet;
};

export type Query = {
  __typename?: 'Query';
  userSession?: Maybe<UserSession>;
  allCabinet?: Maybe<Array<Maybe<Cabinet>>>;
  getCabinetById?: Maybe<Cabinet>;
};


export type QueryUserSessionArgs = {
  me: Scalars['Boolean'];
};


export type QueryGetCabinetByIdArgs = {
  cabinetId: Scalars['String'];
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

export type CreateCabinetMutationVariables = Exact<{
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
}>;


export type CreateCabinetMutation = (
  { __typename?: 'Mutation' }
  & { createCabinet: (
    { __typename?: 'Cabinet' }
    & Pick<Cabinet, 'id' | 'name' | 'address' | 'phone'>
  ) }
);

export type CreateAssistantMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
  cabinetId: Scalars['String'];
}>;


export type CreateAssistantMutation = (
  { __typename?: 'Mutation' }
  & { createUserClient: (
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'username'>
  ) }
);

export type CreateDoctorMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
  cabinetId: Scalars['String'];
}>;


export type CreateDoctorMutation = (
  { __typename?: 'Mutation' }
  & { createUserClient: (
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'username'>
  ) }
);

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

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'role'>
  ) }
);

export type GetAllCabinetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCabinetQuery = (
  { __typename?: 'Query' }
  & { allCabinet?: Maybe<Array<Maybe<(
    { __typename?: 'Cabinet' }
    & Pick<Cabinet, 'id' | 'name' | 'address' | 'phone'>
  )>>> }
);

export type GetCabinetByIdQueryVariables = Exact<{
  cabinetId: Scalars['String'];
}>;


export type GetCabinetByIdQuery = (
  { __typename?: 'Query' }
  & { getCabinetById?: Maybe<(
    { __typename?: 'Cabinet' }
    & Pick<Cabinet, 'id' | 'name' | 'address' | 'phone'>
  )> }
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


export const CreateCabinetDocument = gql`
    mutation CreateCabinet($name: String!, $address: String!, $phone: String!) {
  createCabinet(name: $name, address: $address, phone: $phone) {
    id
    name
    address
    phone
  }
}
    `;
export type CreateCabinetMutationFn = Apollo.MutationFunction<CreateCabinetMutation, CreateCabinetMutationVariables>;

/**
 * __useCreateCabinetMutation__
 *
 * To run a mutation, you first call `useCreateCabinetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCabinetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCabinetMutation, { data, loading, error }] = useCreateCabinetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreateCabinetMutation(baseOptions?: Apollo.MutationHookOptions<CreateCabinetMutation, CreateCabinetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCabinetMutation, CreateCabinetMutationVariables>(CreateCabinetDocument, options);
      }
export type CreateCabinetMutationHookResult = ReturnType<typeof useCreateCabinetMutation>;
export type CreateCabinetMutationResult = Apollo.MutationResult<CreateCabinetMutation>;
export type CreateCabinetMutationOptions = Apollo.BaseMutationOptions<CreateCabinetMutation, CreateCabinetMutationVariables>;
export const CreateAssistantDocument = gql`
    mutation CreateAssistant($password: String!, $username: String!, $cabinetId: String!) {
  createUserClient(
    password: $password
    username: $username
    role: "assistant"
    cabinetId: $cabinetId
  ) {
    id
    username
  }
}
    `;
export type CreateAssistantMutationFn = Apollo.MutationFunction<CreateAssistantMutation, CreateAssistantMutationVariables>;

/**
 * __useCreateAssistantMutation__
 *
 * To run a mutation, you first call `useCreateAssistantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssistantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssistantMutation, { data, loading, error }] = useCreateAssistantMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      cabinetId: // value for 'cabinetId'
 *   },
 * });
 */
export function useCreateAssistantMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssistantMutation, CreateAssistantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssistantMutation, CreateAssistantMutationVariables>(CreateAssistantDocument, options);
      }
export type CreateAssistantMutationHookResult = ReturnType<typeof useCreateAssistantMutation>;
export type CreateAssistantMutationResult = Apollo.MutationResult<CreateAssistantMutation>;
export type CreateAssistantMutationOptions = Apollo.BaseMutationOptions<CreateAssistantMutation, CreateAssistantMutationVariables>;
export const CreateDoctorDocument = gql`
    mutation CreateDoctor($password: String!, $username: String!, $cabinetId: String!) {
  createUserClient(
    password: $password
    username: $username
    role: "doctor"
    cabinetId: $cabinetId
  ) {
    id
    username
  }
}
    `;
export type CreateDoctorMutationFn = Apollo.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>;

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      cabinetId: // value for 'cabinetId'
 *   },
 * });
 */
export function useCreateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(CreateDoctorDocument, options);
      }
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = Apollo.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = Apollo.BaseMutationOptions<CreateDoctorMutation, CreateDoctorMutationVariables>;
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
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  createUser(password: $password, username: $username, role: "admin") {
    username
    role
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetAllCabinetDocument = gql`
    query getAllCabinet {
  allCabinet {
    id
    name
    address
    phone
  }
}
    `;

/**
 * __useGetAllCabinetQuery__
 *
 * To run a query within a React component, call `useGetAllCabinetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCabinetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCabinetQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCabinetQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCabinetQuery, GetAllCabinetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCabinetQuery, GetAllCabinetQueryVariables>(GetAllCabinetDocument, options);
      }
export function useGetAllCabinetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCabinetQuery, GetAllCabinetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCabinetQuery, GetAllCabinetQueryVariables>(GetAllCabinetDocument, options);
        }
export type GetAllCabinetQueryHookResult = ReturnType<typeof useGetAllCabinetQuery>;
export type GetAllCabinetLazyQueryHookResult = ReturnType<typeof useGetAllCabinetLazyQuery>;
export type GetAllCabinetQueryResult = Apollo.QueryResult<GetAllCabinetQuery, GetAllCabinetQueryVariables>;
export const GetCabinetByIdDocument = gql`
    query GetCabinetById($cabinetId: String!) {
  getCabinetById(cabinetId: $cabinetId) {
    id
    name
    address
    phone
  }
}
    `;

/**
 * __useGetCabinetByIdQuery__
 *
 * To run a query within a React component, call `useGetCabinetByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCabinetByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCabinetByIdQuery({
 *   variables: {
 *      cabinetId: // value for 'cabinetId'
 *   },
 * });
 */
export function useGetCabinetByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCabinetByIdQuery, GetCabinetByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCabinetByIdQuery, GetCabinetByIdQueryVariables>(GetCabinetByIdDocument, options);
      }
export function useGetCabinetByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCabinetByIdQuery, GetCabinetByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCabinetByIdQuery, GetCabinetByIdQueryVariables>(GetCabinetByIdDocument, options);
        }
export type GetCabinetByIdQueryHookResult = ReturnType<typeof useGetCabinetByIdQuery>;
export type GetCabinetByIdLazyQueryHookResult = ReturnType<typeof useGetCabinetByIdLazyQuery>;
export type GetCabinetByIdQueryResult = Apollo.QueryResult<GetCabinetByIdQuery, GetCabinetByIdQueryVariables>;
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