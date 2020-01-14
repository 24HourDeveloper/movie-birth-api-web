import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./App.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  }
}));

function App() {
  const classes = useStyles();
  const [date, setDate] = useState("2020-01-13");

  const changeDate = e => {
    setDate(e.target.value);
  };

  const getDate = async () => {
    console.log(date);
    const response = await fetch(
      `http://localhost:8080/api/movie?birth=${date}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <TextField
        id="date"
        label="Enter Your Birthday"
        type="date"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={changeDate}
      />
      <br />
      <Button variant="contained" color="primary" onClick={getDate}>
        Submit Birthday
      </Button>
    </div>
  );
}

export default App;
