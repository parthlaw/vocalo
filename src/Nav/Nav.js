import React, { useState } from "react";
import "./Nav.css";
import { graphql } from "react-apollo";
import { addWordMutation, getWordsQuery } from "../queries/queries";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Nav = ({ setSearch, mutate, changeTemp, check }) => {
  const [addWord, setAddWord] = useState("");
  const classes = useStyles();
  const handleSubmit = (e) => {
    console.log(check);
    if (check.length) {
      e.preventDefault();
    } else {
      mutate({
        variables: {
          word_id: addWord,
        },
        refetchQueries: [{ query: getWordsQuery }],
      });
      changeTemp();
    }
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#4E0D3A",
          borderRadius: "20px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            style={{ fontFamily: "Kumbh Sans" }}
            noWrap
          >
            Vocalo
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              style={{ fontFamily: "Kumbh Sans" }}
              placeholder="Search…"
              onChange={(e) => {
                setSearch(e.target.value);
                setAddWord(e.target.value);
              }}
              onKeyPress={(e) => (e.charCode === 13 ? handleSubmit(e) : null)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default graphql(addWordMutation)(Nav);
