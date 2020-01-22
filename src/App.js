import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  useMediaQuery,
  Button
} from "@material-ui/core";
import Sharer from "sharer.npm.js";

import "./App.css";
import { styles } from "./styles/styles";
import MovieCard from "./components/MovieCard";
import BirthCard from "./components/BirthCard";
import CalendarCard from "./components/CalendarCard";
import ShareButton from "./components/ShareButton";

function App() {
  const mediaQuery = useMediaQuery("(min-width: 500px)");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [date, setDate] = useState("2020-09-14");

  const changeDate = e => {
    setDate(e.target.value);
  };

  const getDate = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://guarded-anchorage-41477.herokuapp.com/api/movie?birth=${date}`
      );
      const data = await response.json();
      if (data.status === 404) {
        setError(data.error);
        setIsLoading(false);
        return;
      }
      setMovieData(data);
      setIsLoading(false);
    } catch (err) {
      setError(`${err.message} check internet connection!`);
      setIsLoading(false);
    }
  };

  const handleClick = e => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share Your Movies",
          url: "https://blissful-beaver-33cf0d.netlify.com/"
        })
        .then(() => console.log("shared!!"))
        .catch(err => console.log(err));
    } else {
      const sharer = new Sharer(e.target);
      sharer.share();
    }
  };

  const cardTitleArray = [
    "Movies Released The Month You Were Born",
    `Movies Released This Year ${date.substring(0, 4)}`
  ];
  console.log(navigator.share);
  return (
    <>
      <div className="App">
        <CalendarCard getDate={getDate} changeDate={changeDate} date={date} />

        {movieData.length ? (
          <div
            style={
              mediaQuery ? styles.webShareButtons : styles.mobileShareButton
            }
          >
            {mediaQuery ? (
              ["twitter", "facebook"].map(socialSite => (
                <ShareButton
                  label={`Share on ${socialSite}`}
                  social={socialSite}
                  handleClick={handleClick}
                />
              ))
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                elevation={2}
                style={{ marginTop: 10 }}
              >
                Share
              </Button>
            )}
          </div>
        ) : null}
      </div>
      {error ? (
        <>
          <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
            <Typography variant="subtitle1" style={{ color: "red" }}>
              {error}
            </Typography>
          </div>
        </>
      ) : null}
      {movieData.length > 0 ? (
        <>
          <BirthCard
            cardTitle="Movies Released The Day You Were Born"
            mTitle={movieData[0].title}
            mInfo={movieData[0].overview}
            mImg={`https://image.tmdb.org/t/p/w500${movieData[0].poster_path}`}
            mediaQuery={mediaQuery}
          />

          {cardTitleArray.map((title, index) => {
            return (
              <MovieCard
                key={index}
                cardTitle={title}
                data={movieData}
                mediaQuery={mediaQuery}
                index={index + 1}
              />
            );
          })}
        </>
      ) : isLoading ? (
        <>
          <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>
            <CircularProgress />
            <Typography variant="subtitle1">Fetching Movies</Typography>
          </div>
        </>
      ) : null}
    </>
  );
}

export default App;
