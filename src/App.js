import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./App.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    width: 350,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    paddingTop: "5%"
  },
  movieCard: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    width: "80%",
    padding: 10
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  button: {
    width: "100%"
  }
}));

function App() {
  const classes = useStyles();
  const [movieData, setMovieData] = useState([]);
  const [date, setDate] = useState("2020-09-14");
  const [movieInfo, setMovieInfo] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const changeDate = e => {
    setDate(e.target.value);
    console.log(date);
  };

  const getDate = async () => {
    const response = await fetch(
      `http://localhost:8080/api/movie?birth=${date}`
    );
    const data = await response.json();
    console.log(data);
    setMovieData(data);
    setMovieTitle(data[0].title);
    setMovieInfo(data[0].overview);
    setMovieImg(`https://image.tmdb.org/t/p/w500${data[0].poster_path}`);
  };

  return (
    <>
      <div className="App">
        <Card className={classes.card} elevation={3}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              What Movies Were Released On Your Birthday?
            </Typography>
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
            <Button
              variant="contained"
              color="primary"
              onClick={getDate}
              className={classes.button}
              elevation={2}
            >
              Submit Birthday
            </Button>
          </CardContent>
        </Card>
      </div>
      {movieData.length > 0 ? (
        <>
          <Card className={classes.movieCard} elevation={3}>
            <Typography gutterBottom variant="h5" component="h2">
              What Movies Were Released On Your Birthday?
            </Typography>
            <hr />
            <Card style={{ display: "flex", width: 350, marginBottom: 10 }}>
              {movieTitle === null ? null : (
                <>
                  <CardMedia
                    image={movieImg}
                    title="Movie"
                    component="img"
                    style={{ width: 175 }}
                  ></CardMedia>
                  <div style={{ marginLeft: 10 }}>
                    <Typography gutterBottom variant="subtitle1">
                      {movieTitle}
                    </Typography>
                    <hr />
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "wrap",
                        height: 150
                      }}
                    >
                      {movieInfo}
                    </Typography>
                  </div>
                </>
              )}
            </Card>
          </Card>

          <Card className={classes.movieCard} elevation={3}>
            <Typography gutterBottom variant="h5" component="h2">
              Movies Released The Month You Were Born
            </Typography>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              {movieData[1].map((movie, index) => {
                return (
                  <Card style={{ marginBottom: 10, width: 175 }} key={index}>
                    <CardMedia
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      title="Movie"
                      component="img"
                      style={{ width: 175 }}
                    ></CardMedia>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      style={{ textAlign: "center" }}
                    >
                      {movie.title}
                    </Typography>
                  </Card>
                );
              })}
            </div>
          </Card>

          <Card className={classes.movieCard} elevation={3}>
            <Typography gutterBottom variant="h5" component="h2">
              Movies Released This Year {date.substring(0, 4)}
            </Typography>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
              }}
            >
              {movieData[2].map((movie, index) => {
                return (
                  <Card style={{ marginBottom: 10, width: 175 }} key={index}>
                    <CardMedia
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      title="Movie"
                      component="img"
                      style={{ width: 175 }}
                    ></CardMedia>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      style={{ textAlign: "center" }}
                    >
                      {movie.title}
                    </Typography>
                  </Card>
                );
              })}
            </div>
          </Card>
        </>
      ) : null}
    </>
  );
}

export default App;
