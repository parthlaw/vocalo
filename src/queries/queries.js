import { gql } from "apollo-boost";

const getWordsQuery = gql`
  {
    words {
      word_id
      lexicalCategory
      pronunciations
      definitions
      examples
    }
  }
`;
const addWordMutation = gql`
  mutation addWord($word_id: String!) {
    addWord(word_id: $word_id) {
      word_id
    }
  }
`;
export { getWordsQuery, addWordMutation };
