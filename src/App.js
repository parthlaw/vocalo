import CardList from "./Components/Card/CardList";
import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Scroll from "./Scroll";
const client = new ApolloClient({
  uri: "https://vocalo-server.herokuapp.com/graphql",
});
function App() {
  //storing search field values
  const [search, setSearch] = useState("");
  //................................

  //not of use currently
  const [temp, setTemp] = useState(false);
  const [check, setCheck] = useState([]);
  //..............................

  const changeTemp = () => {
    setTemp(!temp);
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="header">
          <Nav setSearch={setSearch} changeTemp={changeTemp} check={check} />
        </div>
        <Scroll>
          <div className="row">
            <div className="col-12">
              <CardList search={search} setCheck={setCheck} />
            </div>
          </div>
        </Scroll>
      </div>
    </ApolloProvider>
  );
}

export default App;
