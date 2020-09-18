import React from "react";
import Card from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./CardList.css";
import { graphql } from "react-apollo";
import { getWordsQuery } from "../../queries/queries";

//function ...............................
const CardList = (props) => {
  // this function is returned . It returns the filtered values of words which match with data entered in search field
  const displayWords = () => {
    var data = props.data;
    if (data.loading) {
      return <CircularProgress color="inherit" />;
    } else {
      const filteredWords = data.words.filter((data) => {
        return data.word_id.toLowerCase().includes(props.search.toLowerCase());
      });
      return filteredWords.map((word) => {
        return (
          <Card
            key={word.id}
            name={word.word_id}
            category={word.lexicalCategory}
            pronunciation={word.pronunciations}
            definition={word.definitions}
            sentence={word.sentence}
          />
        );
      });
    }
  };
  // main function return.............
  return <div className="CardList">{displayWords()}</div>;
};
export default graphql(getWordsQuery)(CardList);
