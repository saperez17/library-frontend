import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query {
    allBooks {
      id
      title
      published
      author
      genres
    }
  }
`;

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
    }
  }
`;

export const EDIT_AUTHOR_BIRTH_YEAR = gql`
  mutation editAuthorBirthYear($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      id
      name
      born
    }
  }
`;
