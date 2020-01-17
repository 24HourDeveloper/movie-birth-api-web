import React, { useState } from "react";
import { CircularProgress, Typography, useMediaQuery } from "@material-ui/core";

import "./App.css";
import MovieCard from "./components/MovieCard";
import BirthCard from "./components/BirthCard";
import CalendarCard from "./components/CalendarCard";

function App() {
  const mediaQuery = useMediaQuery("(min-width: 500px)");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [date, setDate] = useState("2020-09-14");
  const [movieInfo, setMovieInfo] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

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
      setMovieTitle(data[0].title);
      setMovieInfo(data[0].overview);
      setMovieImg(`https://image.tmdb.org/t/p/w500${data[0].poster_path}`);
      setIsLoading(false);
    } catch (err) {
      setError(`${err.message} check internet connection!`);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="App">
        <CalendarCard getDate={getDate} changeDate={changeDate} date={date} />
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
            mTitle={movieTitle}
            mInfo={movieInfo}
            mImg={movieImg}
            mediaQuery={mediaQuery}
          />

          {[
            "Movies Released The Month You Were Born",
            `Movies Released This Year ${date.substring(0, 4)}`
          ].map((title, index) => {
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
