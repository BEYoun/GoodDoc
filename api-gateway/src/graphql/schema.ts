import { gql } from "apollo-server";

const schema = gql`
  scalar Date

  type Cabinet {
    id: ID!
    name: String!
    address: String!
    phone: String!
  }
  
  type User {
    username: ID!
    role: String!
  }
  type Profile {
    id: ID!
    username: String!
    cabinet: Cabinet!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    user: User!
  }

  type Mutation {
    createUser(password: String!, username: String!, role: String!): User!
    createUserClient(password: String!, username: String!, role: String!, cabinetId: String!): Profile!
    createUserSession(password: String!, username: String!): UserSession!
    deleteUserSession(me: Boolean!): Boolean!
    
    createCabinet(name: String!, address: String!, phone: String!): Cabinet!
  }

  type Query {
    userSession(me: Boolean!): UserSession
    allCabinet: [Cabinet]
    getCabinetById(cabinetId: String!): Cabinet
  }
`;

export default schema;
