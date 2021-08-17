import { gql } from "apollo-server";

const schema = gql`
  scalar Date

  type Cabinet {
    id: ID!
    name: String!
    address: String!
    phone: String!
  }
  type Patient {
    id: ID!
    cin: String!
    sex: String
    firstName: String
    lastName: String
    email: String
    address: String
    zipCode: Int
    assurance: String
    birthday: String
    profession: String
    country: String
    numberPhone: String
  }
  
  type User {
    username: ID!
    role: String!
  }

  type DoctorDb {
    id: String!
    lastName: String!
    firstName: String!
    adresse: String!
    numberPhone: String!
    speciality: String!
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

    createPatient(cin: String!
        sex: String
        firstName: String
        lastName: String
        email: String
        address: String
        zipCode: Int
        assurance: String
        birthday: String
        profession: String
        country: String
        numberPhone: String): Patient!

  }

  type Query {
    userSession(me: Boolean!): UserSession
    allCabinet: [Cabinet]
    getCabinetById(cabinetId: String!): Cabinet
    getDoctors: [DoctorDb]
    getAllPatients: [Patient]
    getPatientById(patientId: String!): Patient!
  }
`;

export default schema;
