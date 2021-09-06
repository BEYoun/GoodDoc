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
    email: ID!
    role: String!
  }

  type City {
    id: Int
    name: String
    region_id: Region
  }

  type Speciality {
    id: Int
    name: String
  }
  type Region {
    id: Int
    name: String
  }

  type Doctor {
    id: Int!
    lastName: String!
    firstName: String!
    adresse: String!
    numberPhone: String!
    speciality: Speciality
    ville: City
    email: String
  }

  type Profile {
    id: ID!
    email: String!
    cabinet: Cabinet!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    user: User!
  }

  type PaginationDoctors {
    doctors: [Doctor]
    nbrPages: Int!
    page: Int!
  }

  type Mutation {
    createUser(password: String!, email: String!, role: String!): User!
    createUserClient(password: String!, email: String!, role: String!, cabinetId: String!): Profile!
    createUserSession(password: String!, email: String!): UserSession!
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
    getDoctors: PaginationDoctors!
    getAllPatients: [Patient]
    getPatientById(patientId: String!): Patient!
  }
`;

export default schema;
