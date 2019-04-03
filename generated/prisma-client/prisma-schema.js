module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateApartment {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Apartment {
  id: ID!
  name: String!
  city: String!
  address: String
  phone: String
}

type ApartmentConnection {
  pageInfo: PageInfo!
  edges: [ApartmentEdge]!
  aggregate: AggregateApartment!
}

input ApartmentCreateInput {
  name: String!
  city: String!
  address: String
  phone: String
}

type ApartmentEdge {
  node: Apartment!
  cursor: String!
}

enum ApartmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  city_ASC
  city_DESC
  address_ASC
  address_DESC
  phone_ASC
  phone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApartmentPreviousValues {
  id: ID!
  name: String!
  city: String!
  address: String
  phone: String
}

type ApartmentSubscriptionPayload {
  mutation: MutationType!
  node: Apartment
  updatedFields: [String!]
  previousValues: ApartmentPreviousValues
}

input ApartmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApartmentWhereInput
  AND: [ApartmentSubscriptionWhereInput!]
  OR: [ApartmentSubscriptionWhereInput!]
  NOT: [ApartmentSubscriptionWhereInput!]
}

input ApartmentUpdateInput {
  name: String
  city: String
  address: String
  phone: String
}

input ApartmentUpdateManyMutationInput {
  name: String
  city: String
  address: String
  phone: String
}

input ApartmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  AND: [ApartmentWhereInput!]
  OR: [ApartmentWhereInput!]
  NOT: [ApartmentWhereInput!]
}

input ApartmentWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createApartment(data: ApartmentCreateInput!): Apartment!
  updateApartment(data: ApartmentUpdateInput!, where: ApartmentWhereUniqueInput!): Apartment
  updateManyApartments(data: ApartmentUpdateManyMutationInput!, where: ApartmentWhereInput): BatchPayload!
  upsertApartment(where: ApartmentWhereUniqueInput!, create: ApartmentCreateInput!, update: ApartmentUpdateInput!): Apartment!
  deleteApartment(where: ApartmentWhereUniqueInput!): Apartment
  deleteManyApartments(where: ApartmentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  apartment(where: ApartmentWhereUniqueInput!): Apartment
  apartments(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Apartment]!
  apartmentsConnection(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApartmentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  apartment(where: ApartmentSubscriptionWhereInput): ApartmentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    