import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import Card from "./Card";
import "./CardList.css";
import { graphql } from "react-apollo";
import { getWordsQuery } from "../queries/queries";
const CardList = (props) => {
  const [temp, setTemp] = useState(false);
  const changeTemp = () => {
    setTemp(!temp);
  };
  useEffect(() => {
    console.log(props);
  }, [props]);
  const displayWords = () => {
    var data = props.data;
    if (data.loading) {
      return <h1>Loading</h1>;
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

  return <div className="CardList">{displayWords()}</div>;
};
export default graphql(getWordsQuery)(CardList);
