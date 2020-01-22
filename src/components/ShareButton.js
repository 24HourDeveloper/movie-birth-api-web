import React from "react";
import { useMediaQuery } from "@material-ui/core";

import { styles } from "../styles/styles";

export default function ShareButton({ label, handleClick, social }) {
  const mediaQuery = useMediaQuery("(min-width: 500px)");
  return (
    <button
      onClick={handleClick}
      data-sharer={social}
      data-title="Try this web app that shows movies based on your birth month and year."
      data-url="https://blissful-beaver-33cf0d.netlify.com/"
      style={mediaQuery ? styles.shareButton1 : styles.shareButton2}
    >
      {label.toUpperCase()}
    </button>
  );
}
