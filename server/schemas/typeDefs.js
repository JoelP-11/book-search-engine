const { gql } = require('@apollo-client-express')

const typeDefs = gql`

type User {
_id: ID!
username: String!
email: String!
bookCount: Int
savedBooks [Book]
}

type Book {
authors: [String]
description: String!
bookId: String!
image: String
link: String
title: String!

}

input BookInput {
    authors: [String]
description: String!
bookId: String!
image: String
link: String
title: String!
}

type Auth {
token: ID
user: User
}

type Query{
me: User
}

type Mutation{
login(email: String!, password: String!, email: String!): Auth
login(email: String!, password: String!): Auth
saveBook(bookData: BookInput!): User
deleteBook(bookId: ID): User
}
`

module.exports = typeDefs;