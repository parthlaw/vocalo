import React, { useState } from "react";
import "./Nav.css";
import menu from "./menu.png";
import { graphql } from "react-apollo";
import { addWordMutation, getWordsQuery } from "../queries/queries";
const Nav = ({ setSearch, mutate, changeTemp }) => {
  const [addWord, setAddWord] = useState("");
  const handleSubmit = () => {
    mutate({
      variables: {
        word_id: addWord,
      },
      refetchQueries: [{ query: getWordsQuery }],
    });
    changeTemp();
  };
  return (
    <div>
      <nav className="navbar">
        <label
          className="navbar-toggle"
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <img src={menu} alt="Menu" />
        </label>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav">
          <li>
            <label className="nav-links" htmlFor="chkHome">
              Add Word
            </label>
            <input type="checkbox" id="chkHome"></input>

            <ul className="Add">
              <li>
                <input
                  type="text"
                  className="AddBox"
                  onChange={(e) => {
                    setAddWord(e.target.value);
                  }}
                />
                <br />
                <button
                  onClick={(e) => {
                    addWord ? handleSubmit() : e.preventDefault();
                  }}
                >
                  Submit
                </button>
              </li>
            </ul>
          </li>
          <li>
            <label className="nav-links" htmlFor="chkSearch">
              Search
            </label>
            <input type="checkbox" id="chkSearch"></input>

            <ul className="Search">
              <li>
                <input
                  type="text"
                  className="SearchBox"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default graphql(addWordMutation)(Nav);
