export const QUERY_ME = gql`
me {
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

export const QUERY_ME_MIN = gql`
me {
username
email
}
`