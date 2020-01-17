import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  movieCard: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
    width: "80%",
    padding: 10
  },
  movieCard2: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
    width: "100%",
    padding: 5
  }
});

export default function MovieCard({ cardTitle, data, mediaQuery, index }) {
  const classes = useStyles();
  return (
    <>
      <Card
        className={mediaQuery ? classes.movieCard : classes.movieCard2}
        elevation={3}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {cardTitle}
        </Typography>
        <hr />
        <div
          style={
            mediaQuery
              ? {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around"
                }
          }
        >
          {data[index].map((movie, index) => {
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
  );
}
