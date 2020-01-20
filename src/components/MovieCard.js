import React from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";

import { cardStyle, styles } from "../styles/styles";

export default function MovieCard({ cardTitle, data, mediaQuery, index }) {
  const classes = cardStyle();
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
        <div style={mediaQuery ? styles.queryWeb : styles.queryMobile}>
          {data[index].map((movie, index) => {
            //data[index] is for specifying which array of movie data to use
            //the movie data being received is an array with 3 indexes
            //each card display a different index
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
