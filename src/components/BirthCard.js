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

export default function BirthCard({
  cardTitle,
  mTitle,
  mInfo,
  mImg,
  mediaQuery
}) {
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
        <Card style={{ display: "flex", width: 350, marginBottom: 10 }}>
          {mTitle === null ? null : (
            <>
              <CardMedia
                image={mImg}
                title="Movie"
                component="img"
                style={{ width: 175 }}
              ></CardMedia>
              <div style={{ marginLeft: 10 }}>
                <Typography gutterBottom variant="subtitle1">
                  {mTitle}
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
                  {mInfo}
                </Typography>
              </div>
            </>
          )}
        </Card>
      </Card>
    </>
  );
}
