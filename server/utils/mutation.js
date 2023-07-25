// this whole file needs work
export const ADD_USER = gql`

mutation addUser($username: String!, $email: String!, $
addUser())`

export const SAVE_BOOK = gql`
saveBook(bookData: $bookData) {
_id
username
email
bookCount
savedBooks {
bookId
authors
description
image
link
title
}
}
`

export const REMOVE_BOOK = gql`
saveBook(bookData: $bookData) {
_id
username
email
bookCount
savedBooks {
bookId
authors
description
image
link
title
}
}
`